# Lit Examples

Four example [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), two using the [Lit library](https://lit.dev/) and two using vanilla JS.

![Web Components](./favicon.png) ![Lit library](./Lit.png)

Each pair of implmentations have two varieties: One using a Shadow DOM and the other using a light DOM.

The index.html file is virtually identical for all examples. They only differ in the use of slots, which are not supported outside a Shadow DOM.

- `native-light`: Vanilla JS using the light DOM with an pseudo-slot insertion mechanism.

- `native-shadow`: Vanilla JS using the Shadow DOM

- `lit-light`: Lit JS using the light DOM (uses importMaps), no slot insertion.

- `lit-shadow`: Lit JS using the Shadow DOM (loaded from a CDN)

_LiteElement_ is the basic web component class we will be extending and customising for our needs. _html_ and _css_ are [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), used to register the html template and styling of the custom component.

---

## Web Component features

1. Active attributes
2. Two-way properties (linked to attributes)
3. Custom Event emissions
4. Slots (names and unnamed)
5. Ligtht- and shadowDOM
6. Pseudo-Slot insertion for native light-DOM only.
