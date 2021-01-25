import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText; // rendering
};

/**
 * [development]
 * ./public/index.html (App running in isolation) with guaranteed `#dev-cart` id
 * immediately render the app
 *  */
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');

  if (el) {
    mount(el);
  }
}

/**
 * [development||production]
 * container/public/index.html - `#dev-cart` id is not guaranteed
 * do not render the app immediately - render in Container with `mount`
 *  */
export { mount };
