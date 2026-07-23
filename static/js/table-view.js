// Находим кнопку на странице
const export_button = document.getElementById("export");

// Отслеживаем нажатие на элемент и выполняем функцию
export_button.addEventListener("click", function(){
    // Идём "выше" и получаем "родительский" div, и сразу получаем в нём ul
    const export_menu = export_button.closest("div").querySelector("ul");

    // Добавляем или убираем класс "hidden"
    export_menu.classList.toggle("hidden")
})

// Находим checkbox выделения всех строк
const checkbox_toggle_all = document.querySelector("input.toggle-all");

// Отслеживаем изменение её состояния
checkbox_toggle_all.addEventListener("change", function(){
    
    // Если поставили галочку
    if (checkbox_toggle_all.checked) {
        // Получаем все остальные checkbox на странице, кроме "главного"
        const all_checkboxes = document.querySelectorAll('input[type="checkbox"]:not(.toggle-all)');
        // После чего в цикле активируем всех 
        for (const one_checkbox of all_checkboxes) {
            one_checkbox.checked = true;
        }
    } else {
        // Получаем все остальные checkbox на странице, кроме "главного"
        const all_checkboxes = document.querySelectorAll('input[type="checkbox"]:not(.toggle-all)');
        // После чего в цикле деактивируем всех
        for (const one_checkbox of all_checkboxes) {
            one_checkbox.checked = false;
        }
    }
})

// Находим кнопку пагинации на странице
const pagination_button = document.getElementById("pagination");

// Отслеживаем нажатие на элемент и выполняем функцию
pagination_button.addEventListener("click", function(){
    // Идём "выше" и получаем "родительский" div, и сразу получаем в нём ul
    const pagination_list = pagination_button.closest("div").querySelector("ul");

    // Добавляем или убираем класс "hidden"
    pagination_list.classList.toggle("hidden")
})