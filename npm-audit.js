#!/usr/bin/env node
const { spawnSync } = require('child_process')
const { success, error } = require('log-symbols')
const chalk = require('chalk')

let audit = spawnSync('npm', ['audit', '--json'], {
  cwd: process.cwd()
}).stdout.toString()

audit = JSON.parse(audit)

const { low, moderate, high, critical } = audit.metadata.vulnerabilities

const totalVulnerabilities = low + moderate + high + critical

if (totalVulnerabilities > 0) {
  console.log(`${error} ${chalk.red('Your project has', totalVulnerabilities, 'please fix them and then publish')}`)
  console.log(chalk.yellow('You can simple run `npm audit --fix` to fix them'))
  process.exit(1)
} else {
  console.log(`${success} Wohoo! Your project doesn't has any vulnerabilities`)
}
