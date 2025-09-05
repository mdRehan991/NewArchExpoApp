/* src/scripts/prebuild.js */
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

function run(cmd, cwd) {
  console.log(`\n➡️ ${cmd} (in ${cwd})\n`);
  execSync(cmd, { stdio: "inherit", cwd });
}

const helloModule = path.join(__dirname, "..", "modules", "hello-module");

if (!fs.existsSync(helloModule)) {
  console.warn("⚠️ hello-module not found, skipping prebuild.");
  process.exit(0);
}

// Install deps
run("yarn install", helloModule);

// Build once (prefer tsc, fallback to yarn build)
run("yarn tsc --noEmit false || yarn build", helloModule);
