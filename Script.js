
let myCart = []
function add(n){
    n += 1
    document.getElementById('quantity').innerHTML = n;
}
function minus(n){
    if (n<=0){
        alert("Please select valid number of item")
    } 
    n -= 1
    document.getElementById('quantity').innerHTML = n;
}
function buy(){
    let item_des = document.getElementById("card-des").innerText;
    let pri = document.getElementById("price").innerText;
    let count = Number(document.getElementById("quantity").innerText);
    pri = Number(pri.split(" ")[0].slice(1))
    itme = {
         title : item_des,
         price: [pri, count * pri],
         total: count * pri, 
         quantity:count
    }
    myCart.push(itme)
    console.log(myCart)
}

