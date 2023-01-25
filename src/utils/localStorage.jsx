export const getItemFromLocalStorage = () => {
  const cart = localStorage.getItem('cart')
  const cartResult = cart ? JSON.parse(cart) : []
  return cartResult
}

export const getTotalFromLocalStorage = () => {
  const total = localStorage.getItem('total')
  const totalResult =  total ? JSON.parse(total) : ''
  return totalResult
}

export const addTotalToLocalStorage = (total) => {
  localStorage.setItem('total', JSON.stringify(total))
}

export const addItemToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}