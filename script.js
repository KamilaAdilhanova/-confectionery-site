let totalPrice = 0; // Инициализация переменной для хранения общей суммы корзины

// Функция для обновления корзины
function updateCart(itemName, price) {
    // Обновляем общую сумму
    totalPrice += price;
    document.getElementById('total-price').textContent = totalPrice; // Обновляем отображаемую сумму

    // Добавляем товар в корзину
    const cartItems = document.getElementById('cart-items');
    const newItem = document.createElement('li');
    newItem.textContent = `${itemName} - ${price} руб.`;
    cartItems.appendChild(newItem);

    // Активируем кнопку оплаты
    document.getElementById('checkout-button').disabled = false;
}

document.querySelectorAll('.add-button').forEach(button => {
    button.addEventListener('click', function() {
        const price = parseInt(this.getAttribute('data-price'));
        if (isNaN(price)) return; // Проверка на NaN

        const itemName = this.previousElementSibling.querySelector('.image-description').textContent; // Получаем название товара
        updateCart(itemName, price); // Обновляем корзину

        alert(`Товар "${itemName}" успешно добавлен в корзину!`); // Сообщаем о добавлении
    });
});

// Обработчик события для кнопки завершения покупки
document.getElementById('checkout-button').addEventListener('click', function() {
    alert(`Оплата произведена! Сумма: ${totalPrice} руб.`); // Сообщаем о завершении покупки

    // Сброс корзины
    totalPrice = 0;
    document.getElementById('total-price').textContent = totalPrice; // Обновляем отображаемую сумму
    document.getElementById('cart-items').innerHTML = ''; // Очищаем список товаров в корзине
    this.disabled = true; // Деактивируем кнопку после завершения покупки
});

// Обработчики событий для открытия и закрытия корзины
document.getElementById('cart-button').addEventListener('click', function() {
    const cart = document.getElementById('cart');
    cart.style.display = (cart.style.display === 'none') ? 'block' : 'none';
});

document.getElementById('close-cart-button').addEventListener('click', function() {
    document.getElementById('cart').style.display = 'none'; // Скрываем корзину
});
