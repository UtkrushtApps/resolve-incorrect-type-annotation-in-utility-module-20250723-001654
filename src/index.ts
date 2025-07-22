import { products } from './catalog';
import { calculatePriceWithTax } from './utils/priceUtils';

console.log('Product Catalog:');
products.forEach(product => {
  console.log(
    `- ${product.name}: ${calculatePriceWithTax(product)}`
  );
});
