import faker from "faker";

const mount = (el) => {
  const cartText = `<div> You haver ${faker.random.number()} of items</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  if (el) {
    mount(el);
  }
}

export { mount };
