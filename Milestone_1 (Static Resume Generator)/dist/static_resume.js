"use strict";
const button = document.getElementById("btn");
/* Here i m targeting skill list only ,if i want to  disappear the  skills div then i will have to target it instead of skill list . */
const skills = document.getElementById("skills");
button.addEventListener("click", () => {
  if (skills.style.display === "none") {
    skills.style.display = "block";
  } else {
    skills.style.display = "none";
  }
});
