// Находим кнопку на странице
const drop_menu = document.querySelector("a.drop_menu");

// Отслеживаем нажатие на элемент и выполняем функцию
drop_menu.addEventListener("click", function(){
    // Идём "выше" и получаем "родительский" li
    const menuItem = drop_menu.closest("li").querySelector(".dropdownMenu");

    // Добавляем или убираем класс "open"
    menuItem.classList.toggle("hidden")
})