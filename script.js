document.addEventListener("DOMContentLoaded", function () {
    let selectedColor = "Red";
    let selectedSize = "Small";
    let quantity = 1;

    // Event listeners for color selection
    const colorSwatches = document.querySelectorAll('.color-swatch');
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            // Remove selected class from all color swatches
            colorSwatches.forEach(s => s.classList.remove('selected'));

            // Add selected class to the clicked color swatch
            swatch.classList.add('selected');
            selectedColor = swatch.getAttribute('fill');
        });
    });

    // Event listeners for size selection
    const sizeRadios = document.querySelectorAll("input[name='size']");
    sizeRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.checked) {
                selectedSize = radio.value;
            }
        });
    });

    // Event listeners for quantity selector
    const incrementButton = document.getElementById("increment");
    const input = document.getElementById("input");
    const decrementButton = document.getElementById("decrement");

    incrementButton.addEventListener("click", () => {
        quantity++;
        input.value = quantity;
    });

    decrementButton.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            input.value = quantity;
        }
    });

    // Event listener for add to cart button
    const addToCartButton = document.querySelector(".add-to-cart-button");
    addToCartButton.addEventListener("click", addToCart);

    function addToCart() {
        updateAddToCartMessage();
        // Additional logic to handle adding the product to the cart
    }

    function updateAddToCartMessage() {
        const title = document.querySelector(".product-title").innerText;
        const message = `${title} with Color ${selectedColor} and Size ${selectedSize} (Quantity: ${quantity}) added to cart`;

        const addToCartMessage = document.getElementById("addToCartMessage");
        addToCartMessage.style.display = "inline-flex";
        addToCartMessage.innerText = message;
    }
});
