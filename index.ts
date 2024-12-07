type Pizza = {    //type
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed" //union
}

let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1

const menu: Pizza[] = [      //explicit typing and using square brackets to explicitly tell the variable is array type
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]

const orderQueue: Order[] = []


function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza { // using utility type called omit
    const newPizza: Pizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza)
    return newPizza
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })





function placeOrder(pizzaName: string): Order | undefined {   // again using the union type and also defining the return type of the funtion
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {  // writing an exception handling code so that typescript is satisfied
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}
function getPizzaDetail(identifier: string | number): Pizza | undefined { // using unions inside the parameter of the function 
    if (typeof identifier === "string") {  // using type narrowing to narrow down
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}


placeOrder("Chicken Bacon Ranch")
placeOrder("Pepperoni")
completeOrder(1)
placeOrder("Veggie")
completeOrder(2)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)