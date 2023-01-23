const h1 = document.querySelectorAll(".btn");

h1.forEach((li) => {
  li.addEventListener("click", () => {
    if (li.innerHTML === "Hello Man!") {
      li.innerText = "Thank You";
    } else {
      li.innerHTML = "Hello Man!";
    }
  });
});
