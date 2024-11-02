// Функция для расчета размена суммы
function calculateChange() {
    // Получаем сумму из поля ввода и преобразуем её в целое число
    const amount = parseInt(document.getElementById('amount').value);
    let remaining = amount; // Инициализируем оставшуюся сумму

    // Проверяем, является ли введенное значение корректным (число и больше нуля)
    if (isNaN(remaining) || remaining <= 0) {
        // Если сумма некорректна, выводим сообщение об ошибке
        document.getElementById('result').innerText = "Введите корректную сумму.";
        return; // Прекращаем выполнение функции
    }

    // Объект для хранения количества купюр каждого номинала
    const notes = {
        '500': Math.floor(remaining / 500), // Количество 500-рублевых купюр
        '100': Math.floor((remaining % 500) / 100), // Количество 100-рублевых купюр
        '10': Math.floor((remaining % 100) / 10), // Количество 10-рублевых купюр
        '2': Math.floor((remaining % 10) / 2) // Количество 2-рублевых купюр
    };

    remaining %= 2; // Оставшаяся сумма после размена (должна быть 0 или 1)

    // Формирование строки результата
    let resultString = `Размен для суммы ${amount} руб.:\n`;
    for (const [note, count] of Object.entries(notes)) {
        // Если количество купюр больше 0, добавляем в результат
        if (count > 0) {
            resultString += `${count} купюра(ы) по ${note} руб.\n`;
        }
    }

    // Проверяем, осталась ли сумма, которую нельзя разменять
    if (remaining > 0) {
        resultString += `Невозможно разменять оставшуюся сумму: ${remaining} руб.`;
    }

    // Отображаем результат в элементе с id 'result'
    document.getElementById('result').innerText = resultString;
}
