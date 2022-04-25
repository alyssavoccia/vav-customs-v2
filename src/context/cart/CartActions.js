export const updateTotalItemsInCart = async (checkout) => {
  return checkout.lineItems.reduce((acc, cur) => acc + cur.quantity, 0);
};

export const addItemToCart = async (client, checkout, variantId, quantity) => {
  const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}];
  const checkoutId = checkout.id;

  return await client.checkout.addLineItems(checkoutId, lineItemsToAdd);
};

export const updateQuantityInCart = async (client, checkout, lineItemId, quantity) => {
  const checkoutId = checkout.id;
  const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}];

  return await client.checkout.updateLineItems(checkoutId, lineItemsToUpdate);
};

export const removeLineItemInCart = async (client, checkout, lineItemId) => {
  const checkoutId = checkout.id;

  return client.checkout.removeLineItems(checkoutId, [lineItemId]);
};