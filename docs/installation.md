---
id: installation
title: Installing the library
sidebar_label: Installation
---

## Preparations and Prerequisites
### Skills you should already have before installing the library and/or following this documentation
- A basic JavaScript skillset
- How to develop (basic) plugins for Adobe XD (learn more [here](https://adobexdplatform.com/plugin-docs/))
- A basic understanding of Promises and `async`/`await` in JavaScript (learn more about that in this [concise article by Daniel Brain](https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8))
- An understanding of how CommonJS2 modules work in JS (`module.exports = [...]` and `const c = require('[...]')`)
### Compatibility
The current version of the `xd-dialog-helper` is developed with and optimized
for UXP 3+, meaning it is tested for versions >= 21.0 of Adobe XD. It'll
	probably still work for older versions, but we still recommend that you use
	v21.0 as `minVersion` in your `manifest.json` to ensure everything works as
	expected.

## Installing the library
### Option 1: Using npm (with a bundling service like webpack)
The most comfortable way to use the library is to use some bundling tool like webpack and simply install `xd-dialog-helper` via npm. To do so, run

```bash
npm install xd-dialog-helper
```

in the project folder you're working in. After that, you're already good to go and can import the library by following the steps described below in "Importing the library - Option 1 (npm)".

### Option 2: Without npm

Folder structure:
* `main.js`
* `manifest.json`
* `lib`
  * `dialog-helper.js`
  * `dialog-helper.d.ts`

## Importing the library
Next, we'll have to import the `xd-dialog-helper` module in our `main.js` file.
To do so, we simply add the following `require` statement (dpending on whether
we're using npm or not) to the top of our `main.js` file.
### Option 1 (npm)
```js
const DialogHelper = require('xd-dialog-helper');
```
### Option 2 (no npm)
```js
const DialogHelper = require('./lib/dialog-helper');
```

Now, we're all set and can begin creating our first dialog with
`xd-dialog-helper`.
