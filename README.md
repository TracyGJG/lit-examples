# Lit Examples

Four example [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), two using the [Lit library](https://lit.dev/) and two using vanilla JS.

Each pair of implmentations have two varieties: One using a Shadow DOM and the other using a light DOM.

The index.html file is virtually identical for all examples. They only differ in the use of slots, which are not supported outside a Shadow DOM.

- `native-light`: Vanilla JS using the light DOM

- `native-shadow`: Vanilla JS using the Shadow DOM

- `lit-light`: Lit JS using the light DOM

- `lit-shadow`: Lit JS using the Shadow DOM

_LiteElement_ is the basic web component class we will be extending and customising for our needs. _html_ and _css_ are [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), used to register the html template and styling of the custom component.

---
