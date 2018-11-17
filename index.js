var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let random = Math.floor(Math.random() * (100));
 let obj = {itemName: item, itemPrice: random};
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  let str = "In your cart, ";
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  for(let i = 0; i < cart.length; i++){
    let objElem = cart[i];
    if(i === 0 && cart.length === 1){
      str += `you have ${objElem["itemName"]} at $${objElem["itemPrice"]}.`;
    } else if(i === 0){
      str += `you have ${objElem["itemName"]} at $${objElem["itemPrice"]}, `;
    } else if(i === cart.length - 1){
      str += `and ${objElem["itemName"]} at $${objElem["itemPrice"]}.`;
    } else {
      str += `${objElem["itemName"]} at $${objElem["itemPrice"]}, `;
    }
  }
  return str;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
