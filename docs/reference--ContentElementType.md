---
id: reference--ContentElementType
title: interface ContentElementType
sidebar_label: ContentElementType
---
## Type
Interface

A content element type. Defines how an element should behave, render etc.

## Members
### `render(dialogId: string, props: ContentElementDeclaration, actions: ActionList): ContentElement`
Renders the component, returning a [Content Element](reference--ContentElement.html) for the given input props. Every element id used should get prefixed by `[dialogId]-`.

#### Arguments
##### `dialogId: string`
The dialog's id. Should get used to prefix element ids.

##### `props: ContentElementDeclaration`
The declaration of the element. Contains all information about the element.

##### `actions: ActionList`
Actions that can get performed. See [ActionList](reference--ActionList.html) for futher details.

> **Note:** `actions.change()` should get called whenever the element value changes to recheck dialog validation

#### Returns
The [`ContentElement`](reference--ContentElement.html) for the passed props.

### `value(contentElement: ContentElement): *`
Evaluates the value of the passed `contentElement` and returns it

#### Arguments
##### `contentElement: ContentElement`
The content element for which the value should get evaluated. Is of the current `ContentElementType`.

#### Returns
The value of the passed [`ContentElement`](reference--ContentElement.html). `undefined`, if no value is available, e.g., for static elements like `DialogHelper.types.HEADER`

### `valid(contentElement: ContentElement): boolean`
Checks if input of the given ContentElement is valid. Returns `true` if it's valid and `false` if it's invalid.

Can, for example, get used for required checkboxes.

#### Arguments
##### `contentElement: ContentElement`
The [`ContentElement`](reference--ContentElement.html) for which the function should check if the value is valid. Is of the current `ContentElementType`

#### Returns
`true`, if the values is valid and `false`, if it's not valid.

### `readonly type: string`
A (readonly) string denoting the type in human-readable form (won't get used for technical purposes, meaning it can be any text that makes the type clear).
