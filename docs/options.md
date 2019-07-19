---
id: options
title: options for showDialog()
sidebar_label: Options for showDialog()
---

The fourth argument of `DialogHelper.showDialog()` is an `object` containing further
options for the dialog. Among them, there are

- The width of the dialog
- Texts of the two footer buttons
- and many more

We've already seen one example of this with the [`onValidate()` callback in the dialog
validation section](validation.html) before. Now, let's take a look at some more options
we can pass here.

> **Please note** that all the options for a dialog mentioned below are optional. We'll not
> explicitly mention this for every option.

`options` are simply an object passed as argument to the `showDialog()` function:

```js
try {
	const results = DialogHelper.showDialog('my-dialog',
		'My dialog',
		[ /* [...] */ ],
		{
			// [1]
		}
	);
	// [...]
} catch (e) {
	// [...]
}
```

All dialog options can simply get put at the section of the code above marked with `// [1]`.

## `width: number = 360`
First, there is `width`, with which you can set the width of the dialog. Please note that,
depending on the platform, dialog width can get intrepreted differently by XD, so check if
your selected width works on both platforms.

### Example
```js
// [1]
width: 480,
```

## `okButtonText: string = 'Ok'`
The text displayed in the ok button. Defaults to `'Ok'`, but can be anything you'd like.

### Example
```js
// [1]
okButtonText: 'Insert text',
```

## `cancelButtonText: string = 'Cancel'`
The text displayed in the cancel button. Defaults to `'Cancel'`, but can be anything you'd
like.

### Example
```js  
// [1]
cancelButtonText: 'Stop',
```

## `css: string = ''`
CSS styles that get applied to the dialog.

### Example
```js
// [1]
css: `
	input {
		background: black;
		color: white;
	}
`,
```

## `onBeforeShow(dialogElement: HTMLDialogElement, elements: ContentElement[], actions: ActionList): void`
A callback that gets called before the dialog gets shown. Can get used to inject custom 
logic, elements etc, when needed.

### Arguments:
- `dialogElement: HTMLDialogElement` – The dialog element
- `elements: ContentElement[]` – The content elements
- `actions: ActionList` – set of actions that can get performed for the dialog

For more details, please take a look at the [`showDialog()` reference](reference--showDialog.html#onbeforeshow-dialogelement-htmldialogelement-elements-contentelement-actions-actionlist-void).

### Example
```js
// [1]
onBeforeShow: (dialog, elements, actions) => {
	dialog.appendChild(
		document.createElement('header')
	);
}
```

In conjunction with some CSS, e.g.,

```css
header {
	postion: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 8px;
	background: #00ffff;
}
```

we can create a corporate-colored bar at the top of the dialog (as seen in Lorem Ipsum,
Text Toolbox etc.).

## `onValidate(values: object): boolean`
A function that gets called whenever a value in the dialog changes. Returns `true` if the
dialog is valid and `false` if it isn't. For more info, see [the previous section](validation.html) or the relevant [section in the reference](reference--showDialog.html##onvalidate-values-object-boolean).

### Example
```js
// [1]
onValidate: values => values['text'].length > 5,
```
