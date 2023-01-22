export const getItemFromLocalStorage = () => {
  const cart = localStorage.getItem('cart')
  const cartResult = cart ? JSON.parse(cart) : []
  return cartResult
}

export const addItemToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}