"use strict";
const button = document.getElementById("btn");
/* Here i m targeting skill list only ,if i want to  disappear the  skills div then i will have to target it instead of skill list . */
const skills = document.getElementById("skills");
button.addEventListener("click", () => {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
//Getting all Resume elements using getElementbyID selector.
const resLinkedin = document.getElementById("linkedin_");
const resGithub = document.getElementById("github_");
const resTwitter = document.getElementById("twitter_");
const resAdress = document.getElementById("adress_");
const resEmail = document.getElementById("mail_");
const resPhone = document.getElementById("phone_");
const resName = document.getElementById("name_");
const resSkill1 = document.getElementById("skill1_");
const resSkill2 = document.getElementById("skill2_");
const resSkill3 = document.getElementById("skill3_");
const resSkill4 = document.getElementById("skill4_");
const resSkill5 = document.getElementById("skill5_");
const resSkill6 = document.getElementById("skill6_");
const resLang1 = document.getElementById("lang1_");
const resLang2 = document.getElementById("lang2_");
const resLang3 = document.getElementById("lang3_");
const resLang4 = document.getElementById("lang4_");
const resLang5 = document.getElementById("lang5_");
const resUserInfo = document.getElementById("userinfo_");
const resDesig1 = document.getElementById("desig1_");
const resDesig2 = document.getElementById("desig2_");
const resDesig3 = document.getElementById("desig3_");
const resDesig4 = document.getElementById("desig4_");
const resExperience1 = document.getElementById("exp1_");
const resExperience2 = document.getElementById("exp2_");
const resExperience3 = document.getElementById("exp3_");
const resExperience4 = document.getElementById("exp4_");
const resSchool = document.getElementById("school_");
const resCollege = document.getElementById("college_");
const resUniversity = document.getElementById("university_");
// Getting Stored Values from localstorage on this page.
const getData = localStorage.getItem("storedData");
const formData = JSON.parse(getData);
//Assigning userInputValues in Static_Resume.
function convertTittle(str) {
    return str
        .split(" ")
        .map((newStr) => newStr.charAt(0).toUpperCase() + newStr.slice(1).toLowerCase())
        .join(" ");
}
if (formData.inputLinkedin) {
    resLinkedin.href = formData.inputLinkedin;
    resLinkedin.style.display = "block";
}
else {
    resLinkedin.style.display = "none";
}
if (formData.inputGithub) {
    resGithub.href = formData.inputGithub;
    resGithub.style.display = "block";
}
else {
    resGithub.style.display = "none";
}
if (formData.inputTwitter) {
    resTwitter.href = formData.inputTwitter;
    resTwitter.style.display = "block";
}
else {
    resTwitter.style.display = "none";
}
resAdress.innerText = convertTittle(formData.inputAdress);
resEmail.innerText = formData.inputEmail;
resPhone.innerText = formData.inputPhone;
resName.innerText = formData.inputName;
resSkill1.innerHTML = convertTittle(formData.inputSkill1);
resSkill2.innerHTML = convertTittle(formData.inputSkill2);
resSkill3.innerHTML = convertTittle(formData.inputSkill3);
resSkill4.innerHTML = convertTittle(formData.inputSkill4);
resSkill5.innerHTML = convertTittle(formData.inputSkill5);
resSkill6.innerHTML = convertTittle(formData.inputSkill6);
resLang1.innerHTML = convertTittle(formData.inputLang1);
resLang2.innerHTML = convertTittle(formData.inputLang2);
resLang3.innerHTML = convertTittle(formData.inputLang3);
resLang4.innerHTML = convertTittle(formData.inputLang4);
resLang5.innerHTML = convertTittle(formData.inputLang5);
resUserInfo.innerHTML = convertTittle(formData.inputUserInfo);
resExperience1.innerHTML = convertTittle(formData.inputExperience1);
resExperience2.innerHTML = convertTittle(formData.inputExperience2);
resExperience3.innerHTML = convertTittle(formData.inputExperience3);
resExperience4.innerHTML = convertTittle(formData.inputExperience4);
resDesig1.innerHTML = convertTittle(formData.inputDesig1);
resDesig2.innerHTML = convertTittle(formData.inputDesig2);
resDesig3.innerHTML = convertTittle(formData.inputDesig3);
resDesig4.innerHTML = convertTittle(formData.inputDesig4);
resSchool.innerHTML = convertTittle(formData.inputSchool);
resCollege.innerHTML = convertTittle(formData.inputCollege);
resUniversity.innerHTML = convertTittle(formData.inputUniversity);
const div = document.getElementById("outer_cont");
const edit_btn = document.getElementById("edit");
edit_btn.addEventListener("click", () => {
    div.classList.add("highlighted");
    setTimeout(() => {
        div.classList.remove("highlighted");
    });
    300;
});
