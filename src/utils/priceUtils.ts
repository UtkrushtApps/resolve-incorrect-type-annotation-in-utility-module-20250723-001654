import { Product } from '../types/Product';

const TAX_RATE = 0.1;

export function calculatePriceWithTax(product: Product): string {
  if (typeof product.price !== 'number') {
    return 'N/A';
  }
  const total = product.price + product.price * TAX_RATE;
  return `$${total.toFixed(2)}`;
}
