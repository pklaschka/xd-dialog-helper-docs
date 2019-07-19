---
id: custom-types
title: Custom types
sidebar_label: Custom types
---

In this section, we're going to take a look at using and creating custom elements. While 
using the elements is rather easy, creating own element types is a rather advanced topic 
and will require some advanced JavaScript skills. 

Therefore, if you don't feel up to creating your own element types quite yet, feel free to skip the **second section** of this guide as creating own types most likely isn't required at the beginning. We do, however, recommend reading the first section as it also explains how you can use much more easy to use, third-party element types which you can, for example, find on GitHub.

## Using custom element types
No matter if we've created our own content element, based on the guide below, or found one
that is available open-source and suits our needs – we have to know how to use it.

The first thing that's important is that content element types are first and foremost a JS
object. This means that you'll probably have a `my-type.js` file (the name doesn't matter)
that looks something like this:

```js
/**
 * @type {ContentElementType}
 */
const MyType = {
    render: (dialogId, props) => [...],
    valid: [...],
    value: [...],
    type: [...]
};

module.exports = MyType;
```

`MyType`, in this case, is just a placeholder and will be a different name for a real type,
but the basic structure should look the same.

Place this file somewehere in your project. In this case, we'll assume you place it in a
folder called `content-types` next to the `main.js` file, and our file is actually called
`my-type.js`.

Therefore, you should now have a file structure that looks something like this:
```
- content-types
|- my-type.js
- main.js
- manifest.json
```

Now, in order to use the type, you'll first have to import it by using `require()`:
```js
const MyType = require('./content-types/my-type');
```

Now, you can use it just like any other type in your element declaration:

```js
const MyType = require('./content-types/my-type');

try {
	const results = showDialog(
		'my-dialog',
		'Dialog with custom element',
		[
			{
				id: 'my-element',
				type: MyType,
				[...]
			}
		]
	);
	[...]
} catch (e) {
	[...]
}
```

Now, when we run our plugin, we should see our dialog with our custom element – whatever
that may be.

> **Please note:**
> Custom elements can come with custom properties, even properties taking child elements as
> inputs. To find out what properties the type you wish to use needs, please refer to the
> type's own documentation.

## Creating custom content element types
As mentioned above, custom element types are nothing more than an object defining a few
functions used to control the element's creation and behaviour. **It is recommended** that 
you put every element type in it's own file and export only this type from it.

You can use the following code as a "boilerplate-ish" code for your custom element type:

```js
// For type checking:
const { ContentElementType } = require('xd-dialog-helper');

/**
 * @type { ContentElementType }
 */
const MyType = {
	render: (dialogId, props, actions) => {
		const wrapper = document.createElement('div');
		// Put everything you need into the wrapper
		if (props.htmlAttributes) { // if there are htmlAttributes ...
			for (let name in props.htmlAttributes) {
				// ... apply them
				xyz.setAttribute(name, props.htmlAttributes[name]);
			}
		}
		
		xyz.addEventListener('change', () => { actions.change() });

		return { wrapper, input: xyz, type: MyType, props }
	},
	valid: (element) => true, // Always valid
	value: (element) => element.input.value, // Return the value
	type: 'My custom type',
}

module.exports = MyType;
```

## The `render(dialogId, props, actions): ContentElement` function
The render function is the main function of an element. It takes the element declaration
(props) as an input and does several things:

1. Setup all the necessary DOM elements for the content element, sorrounded by a `wrapper` element (which may be any element, but most often is a simple `<div>`).
2. Setup all the behavioural things. Most importantly, if the element is dynamic (i.e., can receive user input), it must add an event listener such that the `actions.change()` function gets called whenever the input changes (to reevaluate dialog validation).
3. Return the actual [`ContentElement`](reference--ContentElement.html) for the element, including the wrapper that gets inserted in the dialog and **all necessarry information** for further evaluation of the element, e.g., by calling the type's `value(element: ContentElement)` and `valid(element: ContentElement)` functions.

## The `value(element)`, `valid(element)` and `name` fields
### `value(element)` – Get the value of the fields
The `value()` function should compute and return the value of the passed [`ContentElement`](reference--ContentElement.html). For static elements that have no inputs, e.g., a text, `undefined` should get returned.

### `valid(element)` – is the element valid in its current state?
Should return `true` if the passed `element: ContentElement` is valid – in its current configuration – and `false` if it is not. This automatically gets called everytime a value in the dialog changes (not only if a value of the current element changes). 

It should, therefore, be highly performant and only perform simple checks.

For static elements, simply use `() => true` to keep the element valid and the dialog submitable.

### `name` – A name for the content element
A human-readable name for the current element type. It might get used in console outputs and other debugging resources.

## Adding child elements
Some elements might require adding child elements (with own values) to the element.

To make sure the values of these child elements also get "represented" in the main dialog, we have to call `actions.registerElement(element)`, where `element` is the rendered [`ContentElement`](reference--ContentElement.html). This registers the element with the dialog and therefore ensures that the element's value will get included in the dialog value, validation etc.

Below, you can see an example of a `render()` function that supports children:

```js
render: (dialogId, props, actions) {
	const wrapper = document.createElement('div');
	const left = document.createElement('div');
	const right = document.createElement('div');

	for (const childDeclaration of props.left) {
		const child = childDeclaration.type.render(dialogId, childDeclaration, actions);
		left.appendChild(child.wrapper);
		actions.registerElement(child);
	}

	for (const childDeclaration of props.right) {
		const child = childDeclaration.type.render(dialogId, childDeclaration, actions);
		right.appendChild(child.wrapper);
		actions.registerElement(child);
	}
	
	wrapper.appendChild(left);
	wrapper.appendChild(right);

	return { wrapper, props, type: MyType };
}
```

## Best practices
- Prefix HTML element ids by `[dialog-id]-[element-id]-`
- Make `valid()` as performant as possible as it'll get called frequently.
- Clearly document required and optional props of custom elements
- Use proper JSDoc to document prop types required. For example, if you have child elements, use
  ```js
  const DialogHelper = require('xd-dialog-helper');
  /**
   * @type { DialogHelper.ContentElementDeclaration[] }
   */
  ```
