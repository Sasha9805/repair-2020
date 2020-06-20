// Кнопка в шапке
var btn = document.querySelector("#btn");
// Крестик
var close = document.querySelector("#close");
// Модально окно .modal
var modal = document.querySelector("#modal");
// Показ мод. окна
btn.addEventListener("click", function() {
  modal.classList.add("modal_visible");
  // console.log(modal.classList);
  // console.log("click");
});
// Скрытие мод. окна
close.addEventListener("click", function() {
  modal.classList.remove("modal_visible");
});
// console.log(btn);
