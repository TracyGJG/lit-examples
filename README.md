# lit-examples

Two simple example [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), one using the [Lit library](https://lit.dev/).

## Example One: Vanilla Web Component (no-lit)

This example comprises of two files:

- index.html is the sampler that exercises the component.
- my-button.js is a basic web component.

The _my-button_ component extends the HTMLElement DOM element. It is constructed using an HTML template that includes the DOM elements for building the component and a _style_ element containing CSS, defined in a separate template literal.

## Example Two: Web Component using Lit (with-lit)

The second example imports the _html, css_ & _LitElement_ features of the lit library.

_LiteElement_ is the basic web component class we will be extending and customising for our needs. _html_ and _css_ are [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), used to register the html template and styling of the custom component.

The index.html file is virtually identical for both examples, only differing in the use of _script_ tags in the head.

---
