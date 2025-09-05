/* scripts/postinstall.js */

const { execSync } = require("child_process");
const path = require("path");

function run(cmd, cwd = process.cwd()) {
  console.log(`\n➡️  Running: ${cmd} (in ${cwd})\n`);
  execSync(cmd, { stdio: "inherit", cwd });
}

// Path to your local module
const helloModulePath = path.join(
  __dirname,
  "..",
  "src",
  "modules",
  "hello-module"
);

// Step 1: install module dependencies
run("yarn install", helloModulePath);

// Step 2: build the module
run("yarn build", helloModulePath);

// Step 3: run patch-package at root
run("yarn patch-package", path.join(__dirname, ".."));
