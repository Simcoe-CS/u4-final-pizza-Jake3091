document.getElementById('calculate').addEventListener('click', calculatePrice);

function calculatePrice() {
    let totalPrice = 0;
    let size = document.querySelector('input[name="size"]:checked').value;
    totalPrice += parseInt(size);

    let toppings = document.querySelectorAll('input[name="toppings"]:checked');
    toppings.forEach(topping => {
        totalPrice += parseInt(topping.value);
    });

    document.getElementById('receipt').innerHTML = `Total Price: $${totalPrice}`;

}
