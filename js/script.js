// const button = document.querySelector('.input-container button')
// const input = document.querySelector('.input-container input')

// const list = document.querySelector('.todo-list')

// button .addEventListener("click", () => {
//     const li = document.createElement("li");
//     li.className = "todo-list-item"
//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "Delete";
//     li.innerText = input.value;
//     list.appendChild(li);
//     li.appendChild(deleteBtn);
//     input.value = ("")

//     deleteBtn .addEventListener("click", () => {
//     list.removeChild (li);
//     });
// })





const button = document.querySelector('.input-container button');
const input = document.querySelector('.input-container input');
const list = document.querySelector('.todo-list');

button.addEventListener("click", () => {
    // Зчитуємо значення з інпуту та видаляємо зайві пробіли
    let inputValue = input.value.trim();

    // Перевірка на порожнє значення
    if (inputValue === "") {
        alert("Поле вводу не повинно бути порожнім!");
        return; // Зупиняє виконання, якщо поле порожнє
    }

    // Заміна значень в залежності від введеного тексту
    if (inputValue.toLowerCase() === "Юра") {
        inputValue = "Юра зараз байдикує";
    } else if (inputValue.toLowerCase() === "Лера") {
        inputValue = "Лера наприкрасніше ім'я на світі!";
    } else if (inputValue.toLowerCase() === "Єва") {
        inputValue = "Єва татова принцеса";
    }

    const li = document.createElement("li");
    li.className = "todo-list-item";
    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    
    // Додаємо текст з інпуту до елементу списку
    li.innerText = inputValue;

    // Додаємо кнопку видалення до елементу списку
    li.appendChild(deleteBtn);
    
    // Додаємо новий елемент списку до todo-list
    list.appendChild(li);
    
    // Очищуємо поле вводу
    input.value = "";

    // Додаємо функціонал видалення для кнопки
    deleteBtn.addEventListener("click", () => {
        list.removeChild(li);
    });
});