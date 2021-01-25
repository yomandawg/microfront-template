import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartIndex';

productsMount(document.querySelector('#app-products'));
cartMount(document.querySelector('#app-cart'));
