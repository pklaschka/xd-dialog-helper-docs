---
id: validation
title: Adding validation to our dialog
sidebar_label: Dialog validation
---

A common task for dialogs is to make sure user input is valid. For this reason, `xd-dialog-helper` makes it easy to add a validation process to our dialogs, allowing for the dialog to only get submitted when the input is valid.

There are two places where dialogs can get validated:
1. In-Element: Checked by the [`ContentElementType`](reference--`ContentElementType.html`), checking if the input of the current elment is valid. For example, by setting `required: true` in the props of a `DialogHelper.types.CHECKBOX` element, this checkbox will get considered as valid only when it's checked.
2. With the `onValidate()` callback, passed into [`showDialog()`](reference--showDialog.html) as `option`.

When one or more elements are invalid or `onValidate()` returns `false` (or both), the submit button of the dialog gets disabled.

## Using the `onValidate()` callback
As denoted in the [`showDialog()` reference](reference--showDialog#onvalidate-values-object-boolean), `onValidate()` gets passed the values in the same format they would get returened in when submitting the dialog.

Based on these values, we can return `true`, if everything is valid, or `false` if something isn't valid.

> **Make sure** to make it clear which requirements certain content elements have in their labels as there are no messages about which element is invalid and not letting the user know why the submit button isn't clickable is, of course, bad UX

### An example
Let's consider a simple example. In this case, a user should enter some text that is no longer than three characters. First, let's create our dialog the same way we did in the previous sections:

```js
try {
    const results = await showDialog('example-dialog',
        'My dialog', 
        [
           {
               type: DialogHelper.types.TEXT_INPUT,
               label: 'Enter some text (max 3 chars)',
               id: 'text'
           }
        ], {
            // [1]
        }
    );
} catch (e) {
    console.warn('User has cancelled the dialog');
}
```

Now, let's take a look at how to add our validation step to this dialog. In the code above, you can see `// [1]`. This is the place where all code snippets of below will be placed (to showing the same code over and over again 😉).

#### Adding a basic validation function

As a first step, let's add a validation function that always returns `true`, meaning the dialog is always valid:

```js
// [1]
onValidate: values => true,
```

When we now open our dialog, the behaviour should be  the same as last time, since we never have the case where `onValidate` returns `false` and the submit button gets disabled.

If we always return false, the ok button is always disabled and we won't be able to submit the dialog (only cancel it):

```js
// [1]
onValidate: values => false,
```

As stated above, `values` here is our object of values as we'd also get it when the dialog gets resolved. Therefore, `values['text']` contains the current value of our text field. We can now use that to compute whether our dialog values are valid based on the actual values:

```js
// [1]
onValidate: values => values['text'].length <= 3,
```

Now, our dialog will have the desired behaviour: For all inputs with three or less characters, the dialog will get considered valid. For all inputs with more than three characters, it'll get considered invalid and the dialog cannot get submitted.

Of course, it's also possible to add much more complex validation to the dialogs. For example, we could check whether an input matches a RegExp and much more.

Having said that, as the function gets called whenever any value in the dialog changes, the function should be as performant as possible. Asynchronous checks etc. should get performed **after** the dialog got submitted to avoid low performance.