# prepublish-ok

Check your package/project before publishing

## Install

`npm i prepublish-ok -D`

or globally

`npm i -g prepublish-ok`

## Usage

in your package.json scripts

```js
"scripts": {
  "prepublishOnly" : "npm-audit-ok && package-ok"
}
```

## Checks Includes

### Npm Audit

**`npm-audit-ok`** - check for npm vulnerabilities

### Package Check

**`package-ok`** - Checks paths in package.json
