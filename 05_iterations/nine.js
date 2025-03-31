const price = [100,300,450,880]

const  totalPrice = price.reduce( (acc,currval)=> {
    return acc + currval;
} , 0)

console.log(totalPrice);





const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const BilltoPay = shoppingCart.reduce( (acc,item)=> acc + item.price , 0 )
console.log(BilltoPay);

