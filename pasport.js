// script.js

// Функция для изменения данных
function modifyData() {
    // Сбор данных через prompt
    const passportIssued = prompt("Введите кем выдан:", document.getElementById("passport-issued").innerText);
    const dateIssue = prompt("Введите дату выдачи:", document.getElementById("date-issue").innerText);
    const departmentCode = prompt("Введите код подразделения:", document.getElementById("department-code").innerText);
    const gender = prompt("Введите пол (МУЖ, ЖЕН):", document.getElementById("gender").innerText);
    const placeBirth = prompt("Введите место рождения:", document.getElementById("place-birth").innerText);
    const seriesNumber = prompt("Введите серию и номер:", document.getElementById("series-number").innerText);

    // Обновляем текст в соответствующих элементах, если пользователь ввел данные
    if (passportIssued) document.getElementById("passport-issued").innerText = passportIssued;
    if (dateIssue) document.getElementById("date-issue").innerText = dateIssue;
    if (departmentCode) document.getElementById("department-code").innerText = departmentCode;
    if (gender) document.getElementById("gender").innerText = gender;
    if (placeBirth) document.getElementById("place-birth").innerText = placeBirth;
    if (seriesNumber) document.getElementById("series-number").innerText = seriesNumber;
}

// Объект с переводами фамилий и имен
const translations = {
    "Иванов": "Ivanov",
    "Иван": "Ivan",
    "Ivanov": "Иванов",
    "Ivan": "Иван"
};

// Функция для перевода данных
function translateData() {
    const lastNameElement = document.getElementById("last-name");
    const firstNameElement = document.getElementById("first-name");

    // Переводим фамилию
    const lastName = lastNameElement.innerText;
    if (lastName == "Иванов") { lastNameElement.innerText = "Ivanov" } else { lastNameElement.innerText = "Иванов" };
    
    

    // Переводим имя
    const firstName = firstNameElement.innerText;
    if (firstName == "Иван") {firstNameElement.innerText = "Ivan" } else { firstNameElement.innerText = "Иван" };
    
}

// Функция для открытия новой страницы
function openPage() {
    window.location.href = 'dom.html'; // Переход на страницу dom.html
}
