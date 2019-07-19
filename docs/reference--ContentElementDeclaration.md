---
id: reference--ContentElementDeclaration
title: interface ContentElementDeclaration
sidebar_label: ContentElementDeclaration
---
## Type
Interface

A declaration for a content element which gets passed to the `showDialog()` function.

## Members
### `id: string`
unique id of the content element

### `type: ContentElementType`
The content element's type

### `value?: any`
(optional)

Initial value of an input field, if applicable

### `htmlAttributes?: object`
(optional)

Custom HTML attributes which get applied to the main element, e.g., the input element, if applicable

## More members (properties)
Depending on the `type`, there can be more members which can get used. For example, some types have a `label` field for denoting the element's label and so on. 

You can find more information about the different applicable properties in the type's documentation.

