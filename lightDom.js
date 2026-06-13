export default function renderLightDom(templates, dynamic) {
  dynamic?.querySelectorAll('[slot]').forEach((slot) => {
    const name = slot.getAttribute('slot');
    const template = templates.querySelector(`[name="${name}"]`);
    if (template) {
      template.innerHTML = '';
      template.appendChild(dynamic.removeChild(slot));
    }
  });

  const template = templates.querySelector(`slot`);
  if (template) {
    template.innerHTML = '';
    [...dynamic.children].forEach((defaultSlot) =>
      template.appendChild(defaultSlot),
    );
  }
  return templates.firstElementChild;
}
