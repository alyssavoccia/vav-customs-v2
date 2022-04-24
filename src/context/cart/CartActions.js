// export const updateTotalItems = (res) => {
//   setTotalItems(0);
//   res.lineItems.forEach(item => {
//     setTotalItems(prevState => prevState + item.quantity);
//   });
// };

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

// export const handleCartClose = () => {
//   setIsCartOpen(false);
// };