"""Check the actual static HTML after npm run build; uses only Python's standard library."""
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent / '.next/server/pages'
LANGUAGES = ('it', 'en', 'de', 'fr', 'es')
DOMAIN = 'https://www.angeloromanostudio.it'
SERVICE_SEGMENTS = ('sviluppo-siti-web', 'web-app-gestionali', 'automazioni-ai', 'chatbot-segretaria-ai', 'scripting-scraping', 'consulenza-it')

class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.lang = None
        self.canonicals, self.alternates, self.links, self.h1, self.schemas = [], {}, [], [], []
        self.description = None
        self.robots = ''
        self.text = []
        self._heading = False
        self._schema = None
        self.feed(source)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'html': self.lang = a.get('lang')
        if tag == 'h1': self._heading = True; self.h1.append('')
        if tag == 'a' and a.get('href'): self.links.append(a['href'])
        if tag == 'link' and a.get('rel') == 'canonical': self.canonicals.append(a.get('href'))
        if tag == 'link' and a.get('rel') == 'alternate' and a.get('hreflang'): self.alternates[a['hreflang']] = a.get('href')
        if tag == 'meta' and a.get('name') == 'description': self.description = a.get('content')
        if tag == 'meta' and a.get('name') == 'robots': self.robots = a.get('content', '')
        if tag == 'script' and a.get('type') == 'application/ld+json': self._schema = ''
    def handle_data(self, text):
        self.text.append(text)
        if self._heading: self.h1[-1] += text
        if self._schema is not None: self._schema += text
    def handle_endtag(self, tag):
        if tag == 'h1': self._heading = False
        if tag == 'script' and self._schema is not None:
            self.schemas.append(json.loads(self._schema)); self._schema = None

pages = {}
for file in ROOT.rglob('*.html'):
    route = '/' + file.relative_to(ROOT).with_suffix('').as_posix()
    if route.split('/')[1] in LANGUAGES: pages[route] = Page(file.read_text())
assert len(pages) == 70, f'Expected 70 localized pages, got {len(pages)}'
for route, page in pages.items():
    lang = route.split('/')[1]
    assert page.lang == lang, (route, 'html language', page.lang)
    assert page.canonicals == [DOMAIN + route], (route, 'canonical', page.canonicals)
    assert len(page.h1) == 1 and page.h1[0].strip(), (route, 'h1', page.h1)
    assert page.description and len(page.description.strip()) > 40, (route, 'description')
    assert 'noindex' not in page.robots, (route, 'noindex')
    assert page.schemas, (route, 'missing JSON-LD')
    assert set(page.alternates) == set(LANGUAGES) | {'x-default'}, (route, 'hreflang set')
    for alternate in LANGUAGES:
        target = re.sub(r'^/(it|en|de|fr|es)(?=/|$)', '/' + alternate, route)
        assert page.alternates[alternate] == DOMAIN + target, (route, alternate)
        assert pages[target].alternates[lang] == DOMAIN + route, (route, 'reciprocity')
    assert page.alternates['x-default'] == DOMAIN + re.sub(r'^/(it|en|de|fr|es)(?=/|$)', '/it', route)
    for link in page.links:
        parsed = urlparse(link)
        if parsed.netloc and parsed.netloc != 'www.angeloromanostudio.it': continue
        if re.match(r'^/(it|en|de|fr|es)(/|$)', parsed.path):
            assert parsed.path in pages, (route, 'broken internal link', link)
    if any(route == f'/{lang}/{segment}' for segment in SERVICE_SEGMENTS):
        assert f'/{lang}/progetti' in page.links, (route, 'portfolio link')

    if lang in ('de', 'fr', 'es'):
        prose = ' '.join(page.text)
        for untranslated in ('Soluzioni su misura per settori diversi', 'Performance ottimizzate e design esclusivo', 'Ingegneria di Processo', 'Workflow automatico attivo', 'Preferenze Cookie', 'Clienti che hanno scelto un supporto concreto'):
            assert untranslated not in prose, (route, 'untranslated interface text', untranslated)
    if route == f'/{lang}/sviluppo-siti-web':
        for slug in ('nardi-arte', 'siaps', 'poliambulatorio-prof-gemelli', 'studio-henergia', 'domus-juliae'):
            assert f'/{lang}/progetti/{slug}' in page.links, (route, 'case link', slug)
    if '/progetti/' in route:
        assert f'/{lang}/sviluppo-siti-web' in page.links, (route, 'service link')
print('Static SEO checks passed: 70 pages, languages, H1, descriptions, canonical, reciprocal hreflang, JSON-LD and internal links.')
