const button = document.getElementById("btn") as HTMLButtonElement;
/* Here i m targeting skill list only ,if i want to  disappear the  skills div then i will have to target it instead of skill list . */
const skills = document.getElementById("skills") as HTMLUListElement;

button.addEventListener("click", () => {
  if (skills.style.display === "none") {
    skills.style.display = "block";
  } else {
    skills.style.display = "none";
  }
});
