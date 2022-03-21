const pizzaSize = document.getElementById('pizzaSize');
const pizzaTopping = document.getElementById('pizzaTopping');
const pizzaCrust = document.getElementById('pizzaCrust');

const placeOrder = document.getElementById('placeOrder');
const orderMoreBtn = document.getElementById('orderMoreBtn')
const checkout = document.getElementById('checkout');

const orderSummary = document.getElementById('orderSummary');

const total = document.getElementById('total')

const locationInfo = document.getElementById('locationInfo')
const orderDetails = document.getElementById('orderDetails')

const deliver = document.getElementById('deliver')

locationInfo.style.visibility = 'hidden'
orderDetails.style.visibility = 'hidden'


pizzaData = {
    "Small": {"price":500,"topping":100, "crust":200},
    "Medium":{"price":700,"topping":200, "crust":350},
    "Large": {"price":1000,"topping":300, "crust":500}
}

let totalPrice = 0
let noOfOrders = 0

placeOrder.addEventListener('click', function() {
    orderDetails.style.visibility = 'visible'
    const size = pizzaSize.value
    const priceOfPizza = pizzaData[size].price + pizzaData[size].topping + pizzaData[size].crust
    totalPrice += priceOfPizza
    orderSummary.innerHTML += `
      <tr>
        <td>${noOfOrders += 1}</td>
        <td>${pizzaSize.value}</td>
        <td>${pizzaTopping.value}</td>
        <td>${pizzaCrust.value}</td>
        <td>${priceOfPizza}</td>
      </tr>
    `
    
    orderMoreBtn.style.display = 'visible'
    placeOrder.style.visibility = 'hidden'
})

orderMoreBtn.addEventListener('click', function() {
    const size = pizzaSize.value
    const priceOfPizza = pizzaData[size].price + pizzaData[size].topping + pizzaData[size].crust
    noOfOrders += 1
    orderSummary.innerHTML += `
      <tr>
        <td>${noOfOrders}</td>
        <td>${pizzaSize.value}</td>
        <td>${pizzaTopping.value}</td>
        <td>${pizzaCrust.value}</td>
        <td>${priceOfPizza}</td>
      </tr>
    `
    totalPrice += priceOfPizza
    console.log(totalPrice)
})

checkout.addEventListener('click', function() {
    total.innerHTML = `
    <p>Your Order Total is Ksh.${totalPrice}</p>
    <p id="delivery">Would you like us to deliver your order at an extra fee of Ksh.200?</p>
    <button type="submit" id="deliverYes">Yes</button>
    <button type="submit" id="deliverNo">No</button>
    `
    
    checkout.style.visibility = 'hidden'
    orderMoreBtn.style.visibility = 'hidden'

    document.getElementById('deliverYes').addEventListener('click', function(){
        totalPrice += 200
        total.innerHTML = `
        <p>Your order total is now ${totalPrice}</p>
        `
        locationInfo.style.visibility = 'visible'
        deliver.addEventListener('click', function() {

          locationInfo.style.visibility = 'visible'
          const location = document.getElementById('location')
          total.innerHTML = `
          <p>Great. Your order will be delivered to ${location.value}</p>
          `
        })


    })

    document.getElementById('deliverNo').addEventListener('click', function(){
        total.innerHTML = `
        <p>Enjoy your meal. Your order total is Ksh.${totalPrice}</p>
        
    })
})