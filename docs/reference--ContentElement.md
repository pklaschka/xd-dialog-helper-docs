---
id: reference--ContentElement
title: interface ContentElement
sidebar_label: ContentElement
---
## Type
Interface

The parsed element, coming from the element types render function. Contains view and model information about the element.

## Members
### `readonly wrapper: HTMLElement`
The wrapper (or outer-most) HTML element specific to the content element

### `readonly type: ContentElementType`
The element's type, see [ContentElementType](reference--ContentElementType.md.html)

### `readonly props: ContentElementDeclaration`
The properties with which the element got declared, see [ContentElementDeclaration](reference--ContentElementDeclaration.html)

### `readonly input?: HTMLElement`
(optional)

The input HTML element, if applicable

## Further members

> **Note:** Content elements can have more, unspecified members. They get defined in [the type's `render()` function](reference--ContentElementType.html#renderdialogid-string-props-contentelementdeclaration-actions-actionlist-contentelement) and should contain all the information needed for a content type to determine the state of the element.