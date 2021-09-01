#!/usr/bin/env node
/* @flow */
const chalk = require("chalk");
import type { Result } from "./types";

(async function main() {
  try {
    const ora = require("ora");
    const grepAst = require("./index");
    const readArgv = require("./readArgv");
    const argv = readArgv();

    const patternsSpinner = ora();
    patternsSpinner.start();

    const results: Array<Result> = await grepAst(argv, (files) => {
      patternsSpinner.succeed();
    });

    process.stdout.write(JSON.stringify(results) + "\n");

  } catch (error) {
    process.stderr.write(chalk.red(error) + "\n");
    process.exit(1);
  }
})();
