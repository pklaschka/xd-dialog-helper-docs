---
id: reference--types-text_input
title: Text input
sidebar_label: Text input
---

![](assets/element-text_input.png)

## Signature
`readonly DialogHelper.types.TEXT_Input: ContentElementType`

## Type
[`ContentElementType`](reference--ContentElementType.html) exported readonly member of the `require('xd-dialog-helper').types` namespace

## Description
A (single-line) text input element

## Properties in element declaration
### Required properties
- `id: string`
- `label: string`

 ### Supported props
 - `value: boolean` – Initial value (default: `''`)
 - `htmlAttributes: object` – get applied to the `<input type="text">` element
 - `required: boolean` – determines if the element requires text (i.e., the field must not be empty) to be valid (default: `false`)