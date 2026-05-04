const fs = require('fs');

function updatePage(path, title, lead) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/title=\{<>A modern <span className="grad">product family<\/span> for e-commerce payments<\/>\}/, \`title={<><span className="grad">\${title}</span></>}\`);
  content = content.replace(/lead=".*?"/, \`lead="\${lead}"\`);
  fs.writeFileSync(path, content);
}

try {
  updatePage('app/product/orchestration/page.tsx', 'Orchestration', 'Orchestrate your payments, ensuring every transaction performs.');
  updatePage('app/product/dynamic-cashier/page.tsx', 'Dynamic Cashier', 'Deliver seamless, localised payment experiences.');
  updatePage('app/product/white-label/page.tsx', 'White Label', 'Launch and scale your own payment solutions with Omnikeea.');
} catch (e) { console.log(e); }

function updateSol(path, title, lead) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/title=\{<>Solve complex challenges with <span className="grad">software-first<\/span> solutions<\/>\}/, \`title={<><span className="grad">\${title}</span></>}\`);
  content = content.replace(/lead=".*?"/, \`lead="\${lead}"\`);
  fs.writeFileSync(path, content);
}

try {
  updateSol('app/solution/optimise-payments/page.tsx', 'Optimise Payments', 'Increase acceptance rates and mitigate costs.');
  updateSol('app/solution/enhance-infrastructure/page.tsx', 'Enhance Infrastructure', 'Build scalable infrastructure for global payment growth.');
  updateSol('app/solution/deliver-experiences/page.tsx', 'Deliver Experiences', 'Create fully branded, global payment journeys.');
  updateSol('app/solution/protect-payments/page.tsx', 'Protect Payments', 'Strengthen security and minimise payment risk.');
} catch (e) { console.log(e); }

console.log("Done");
