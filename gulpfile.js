'use strict';

// Import dependencies
const { series, parallel } = require("gulp");

// Import tasks
const { clean } = require("./tasks/clean");
const { lint } = require("./tasks/lint");
const { babel } = require("./tasks/babel");

global.projectRoot = __dirname;

// (Re-)export tasks that should be  available from cli
module.exports.clean = clean;

// Basic compile workflow
const compile = babel;
module.exports.compile = compile;
// Lint
module.exports.test = lint;
// Build task that cleans output and compiles
module.exports.build = series(clean, lint, compile);

// Set build task as default task
module.exports.default = module.exports.build;
