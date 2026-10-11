import assert from "node:assert/strict";
import { CASE_STUDIES, getCaseStudyCopy } from "../src/case-studies";
import { resources, SUPPORTED_LANGUAGES, getTranslation } from "../src/i18n";
import { getServiceGrowthCopy, type ServiceId } from "../src/service-growth";
import { getSeoData, getSitemapEntries } from "../src/seo";

function strings(value: unknown, prefix = ""): Record<string, string> {
  if (typeof value === "string") return { [prefix]: value };
  if (!value || typeof value !== "object") return {};
  return Object.fromEntries(Object.entries(value).flatMap(([key, child]) =>
    Object.entries(strings(child, prefix ? `${prefix}.${key}` : key))));
}

const base = strings(resources.it.translation);
const services: ServiceId[] = ["webdev", "webapp", "automations", "chatbot", "scripting", "consulting"];
for (const lang of SUPPORTED_LANGUAGES) {
  const localized = strings(resources[lang].translation);
  for (const key of Object.keys(base)) {
    // Inspect the locale itself: getTranslation would hide missing keys with Italian fallback.
    assert.ok(localized[key]?.trim(), `${lang}: missing or empty ${key}`);
  }
  for (const service of services) {
    const copy = getServiceGrowthCopy(service, lang);
    assert.equal(copy.offers.length, 3);
    assert.equal(copy.process.length, 4);
    assert.equal(copy.faqs.length, 4);
    for (const [key, value] of Object.entries(strings(copy))) {
      assert.ok(value.trim(), `${lang}/${service}: empty ${key}`);
    }
    if (lang !== "it") assert.notEqual(copy.intro[0], getServiceGrowthCopy(service, "it").intro[0]);
    if (!["it", "en"].includes(lang)) assert.notEqual(copy.intro[0], getServiceGrowthCopy(service, "en").intro[0]);
    const seo = getSeoData(service, lang);
    if (service === "webdev") {
      const faq = seo.schema.find((item) => item["@type"] === "FAQPage");
      assert.deepEqual((faq?.mainEntity as Array<{ name: string; acceptedAnswer: { text: string } }>).map((item) => ({ question: item.name, answer: item.acceptedAnswer.text })), copy.faqs);
    }
    const schema = seo.schema.find((item) => item["@type"] === "Service");
    assert.equal(schema?.name, getTranslation(lang, `footer.links.${service}`));
    assert.equal(schema?.description, seo.description);
  }
  for (const study of CASE_STUDIES) {
    const copy = getCaseStudyCopy(study, lang);
    for (const [key, value] of Object.entries(strings(copy))) assert.ok(value.trim(), `${lang}/${study.slug}: empty ${key}`);
    if (!["it", "en"].includes(lang)) {
      assert.notEqual(copy.summary, study.copy.it.summary);
      assert.notEqual(copy.summary, study.copy.en.summary);
    }
  }
}
const entries = getSitemapEntries();
assert.equal(entries.length, 70);
assert.equal(new Set(entries.map((entry) => entry.url)).size, 70);
console.log(`Locale checks passed: ${Object.keys(base).length} keys × 5 languages, 30 service sections, 25 case studies, 70 unique URLs.`);
