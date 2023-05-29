let openModalButton = document.getElementById("openModalButton");
let modal = document.getElementById("myModal");
let closeButton = document.getElementsByClassName("close")[0];
openModalButton.addEventListener("click", function() {
    modal.style.display = "block";
  });
  closeButton.addEventListener("click", function() {
    modal.style.display = "none";
  });
    