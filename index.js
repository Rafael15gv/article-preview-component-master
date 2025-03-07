const btn = document.getElementsByClassName("profile__btn")[0];


btn.addEventListener("click", function () {
  // alert("hola");
  document.querySelector(".redes__black").classList.remove("hiden");
  document.querySelector(".profile").classList.add("hiden");
});