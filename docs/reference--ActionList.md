---
id: reference--ActionList
title: interface ActionList
sidebar_label: ActionList
---

## Type
Interface

A list of actions that can get performed for the dialog

## Members
### `close(): void`
close submit dialog if valid
### `cancel(): void`
cancel the dialog
### `change(): void`
value of ContentElement has changed (should get called whenever the input value changes so validation can get re-evaluated)
### `values(): object`
get dialog values
### `registerElement(element: ContentElement): void`
register a [`ContentElement`](reference--ContentElement), e.g., child of a section ContentElement

Parameters:
- `element: ContentElement` –  child element
