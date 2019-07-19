---
id: reference--showDialog
title: function DialogHelper.showDialog()
sidebar_label: showDialog()
---

## Signature
`function showDialog(dialogId: string, elements: ContentElementDeclaration[], options): Promise<object>`

## Type
Exported function of the `xd-dialog-helper` module

## Paramters
### `dialogId: string`
The dialog id. Must be unique when showing the dialog. Gets used to prefix element ids. Important element ids are:
- `[dialogId]`: The dialog element itself
- `[dialogId]-dialogHelperBtnOk`: The *Submit* button
- `[dialogId]-dialogHelperBtnCancel`: The *Cancel* button

### `elements?: ContentElementDeclaration[] = []`

(optional)

A list of content element declarations ([`ContentElementDeclaration`](reference--ContentElementDeclaration.html)) which will get displayed in their order in the array as dialog content. The ids determine the value key in the [return value](#returns).

### `options?: object = {}`

(optional)

Options for the dialog like custom CSS, texts etc.

#### `options.okButtonText?: string = 'Ok'`
(optional)

The text in the "ok" button (e.g., "ok", "insert" or similar)

#### `option.cancelButtonText?: string = 'Cancel'`
(optional)

The text in the "cancel" button (e.g., "cancel", "abort" or similar)

#### `css?: string = ''`
(optional)

CSS code that gets injected into the style

#### `width?: number = 360`
(optional)

The dialog width in px

#### `onBeforeShow?: (dialogElement: HTMLDialogElement, elements: ContentElement[], actions: ActionList): void`
A function that gets triggered before the dialog gets shown.
You can – for example – inject custom code here.

Parameters:
- `dialogElement: HTMLDialogElement` – The dialog element that gets shown
- `elements: ContentElement[]` – The dialog's elements in a key-value based manner (the key corresponds to the name of an input) – see [`ContentElement`](reference--ContentElement.html)
- `actions: ActionList` – Actions which can get performed like closing or canceling the dialog – see [`ActionList`](reference--ActionList.html)

#### `onValidate?: (values: object): boolean`
A function that gets triggered when inputs change. Its return value determines if the inputs are value and thus, if the ok button is clickable

Paramters:
- `values: object` The dialog values in a key-value-pair form (as an object), in the same format as [the showDialog() return value](#returns).

Returns:
`boolean` – `true` if the values are valid, `false` if they're not

## Returns

Type: `Promise<object>`

A promise that
1. resolves with an object containing the form values of the dialog in an object in key-value-pair form.
    For example, for a dialog containing a text field with the id `'name'`, the resulting object will look like this:
    ```js
    {
        name: 'Entered name'
    }
    ```
2. rejects with `'reasonCancelled'` if the user cancels the dialog
