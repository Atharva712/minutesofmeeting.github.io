
const stars = document.querySelectorAll(".star");

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];

    star.addEventListener("click", function() {
      const value = parseInt(this.getAttribute("data-value"), 10);

      for (let j = 0; j < stars.length; j++) {
        if (j < value) {
          stars[j].classList.add("active");
          stars[j].classList.remove("locked");
        } else {
          stars[j].classList.remove("active");
          stars[j].classList.add("locked");
        }
      }
    });
  }

// 
// 
function handleCheckboxClick() {
  const checkbox1 = document.getElementById("checkbox1");
  const checkbox2 = document.getElementById("checkbox2");
  
  if (checkbox1.checked) {
    checkbox2.disabled = true;
  } else if (checkbox2.checked) {
    checkbox1.disabled = true;
  } else {
    checkbox1.disabled = false;
    checkbox2.disabled = false;
  }
}