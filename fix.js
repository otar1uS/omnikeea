// One-time fix-up script. Already executed; the target .tsx files have since
// been edited by hand for compliance-safe wording. Strings here have been
// updated to mirror the current compliance-safe baseline so accidental
// re-execution will not reintroduce regulated-sounding language.
const fs = require('fs');

function updatePage(path, title, lead) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/title=\{<>A modern <span className="grad">product family<\/span> for e-commerce integrations<\/>\}/, `title={<><span className="grad">${title}</span></>}`);
  content = content.replace(/lead=".*?"/, `lead="${lead}"`);
  fs.writeFileSync(path, content);
}

try {
  updatePage('app/product/orchestration/page.tsx', 'Unified Integration Layer', 'A unified integration layer for managing connections with licensed third-party providers.');
  updatePage('app/product/dynamic-cashier/page.tsx', 'Dynamic Cashier', 'Deliver seamless, localised checkout experiences.');
  updatePage('app/product/white-label/page.tsx', 'White Label', 'Launch and scale your own branded technology platform with Omnikeea.');
} catch (e) { console.log(e); }

function updateSol(path, title, lead) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/title=\{<>Solve complex challenges with <span className="grad">software-first<\/span> solutions<\/>\}/, `title={<><span className="grad">${title}</span></>}`);
  content = content.replace(/lead=".*?"/, `lead="${lead}"`);
  fs.writeFileSync(path, content);
}

try {
  updateSol('app/solution/optimise-payments/page.tsx', 'Optimise Integration Performance', 'Improve technical performance and reduce operational overhead.');
  updateSol('app/solution/enhance-infrastructure/page.tsx', 'Enhance Infrastructure', 'Build scalable infrastructure for global integration growth.');
  updateSol('app/solution/deliver-experiences/page.tsx', 'Deliver Experiences', 'Create fully branded, global checkout journeys.');
  updateSol('app/solution/protect-payments/page.tsx', 'Protect Platforms', 'Strengthen security and improve system reliability.');
} catch (e) { console.log(e); }

console.log("Done");
