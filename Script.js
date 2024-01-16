
let myCart = []

function buy(){
    let item_des = document.getElementById("card-des").innerText
    let pri = document.getElementById("price").innerText
    itme = {
         title : item_des,
         price: pri
    }
      myCart.push(itme)
}

console.log(myCart)