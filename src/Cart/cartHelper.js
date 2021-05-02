export const addItemToCart = (item) => {
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.push({
        ...item,
        count: 1
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
};
  
export const loadCart = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        return JSON.parse(localStorage.getItem("cart"));
      }
    }
};
  
export const removeItemFromCart = productId => {
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      console.log(cart)

      cart.map((product, i) => {
        console.log(productId)
        if (product.menuId === productId) {
          cart.splice(i, 1);
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    console.log(cart)
    return cart;
};
  
export const makeEmptyCart = () => {
  if(typeof window !== undefined){
    localStorage.clear();
  }
}

export const makeLocalStorage = () => {
  let cart = []; 
  if(typeof window !== undefined){
    if(!localStorage.getItem("cart")){
      localStorage.setItem("cart", JSON.stringify(cart));
    } 
  }
}

export const cartLength = () => {
  var array = JSON.parse(localStorage.getItem("cart"));
  var length = array.length;
  return length
}
