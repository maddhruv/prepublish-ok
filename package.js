#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { success, error } = require('log-symbols')

const pkgFields = [
  'main',
  'bin',
  'browser',
  'man',
  'types',
  'typings',
  'module'
]

const pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json')))

const errors = []

function check (prop) {
  if (!fs.existsSync(path.join(process.cwd(), prop))) {
    errors.push(prop)
  }
}

pkgFields.forEach(field => {
  const theProp = pkg[field]
  if (theProp) {
    if (typeof theProp === 'object') {
      Object.values(theProp).forEach(prop => check(prop))
    } else {
      check(theProp)
    }
  }
})

if (errors.length > 0) {
  errors.forEach(file => {
    console.log(chalk.red(`${error} ${file} file not found at ${process.cwd()}/${file}`))
  })
  process.exit(1)
} else {
  console.log(`${success} Woohoo! The package is healthy and all fields' files were found`)
}
