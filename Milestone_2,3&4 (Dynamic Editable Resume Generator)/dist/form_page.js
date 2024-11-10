"use strict";
const form = document.getElementById("_Form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //Getting all the userInputData using getElementbyID selector.
    const inputLinkedin = document.getElementById("_Linkedin").value;
    const inputGithub = document.getElementById("_Github")
        .value;
    const inputTwitter = document.getElementById("_Twitter")
        .value;
    const inputAdress = document.getElementById("_Adress")
        .value;
    const inputEmail = document.getElementById("_Mail")
        .value;
    const inputPhone = document.getElementById("_Phone")
        .value;
    const inputName = document.getElementById("_Name")
        .value;
    const inputSkill1 = document.getElementById("_Skill1")
        .value;
    const inputSkill2 = document.getElementById("_Skill2")
        .value;
    const inputSkill3 = document.getElementById("_Skill3")
        .value;
    const inputSkill4 = document.getElementById("_Skill4")
        .value;
    const inputSkill5 = document.getElementById("_Skill5")
        .value;
    const inputSkill6 = document.getElementById("_Skill6")
        .value;
    const inputLang1 = document.getElementById("_Lang1")
        .value;
    const inputLang2 = document.getElementById("_Lang2")
        .value;
    const inputLang3 = document.getElementById("_Lang3")
        .value;
    const inputLang4 = document.getElementById("_Lang4")
        .value;
    const inputLang5 = document.getElementById("_Lang5")
        .value;
    const inputUserInfo = document.getElementById("_UserInfo").value;
    const inputExperience1 = document.getElementById("_Exp1").value;
    const inputExperience2 = document.getElementById("_Exp2").value;
    const inputExperience3 = document.getElementById("_Exp3").value;
    const inputExperience4 = document.getElementById("_Exp4").value;
    const inputDesig1 = document.getElementById("_Desig1")
        .value;
    const inputDesig2 = document.getElementById("_Desig2")
        .value;
    const inputDesig3 = document.getElementById("_Desig3")
        .value;
    const inputDesig4 = document.getElementById("_Desig4")
        .value;
    const inputSchool = document.getElementById("_School")
        .value;
    const inputCollege = document.getElementById("_College")
        .value;
    const inputUniversity = document.getElementById("_University").value;
    //Storing all values in an Object (formData).
    const formData = {
        inputLinkedin: inputLinkedin,
        inputGithub: inputGithub,
        inputTwitter: inputTwitter,
        inputAdress: inputAdress,
        inputEmail: inputEmail,
        inputPhone: inputPhone,
        inputName: inputName,
        inputSkill1: inputSkill1,
        inputSkill2: inputSkill2,
        inputSkill3: inputSkill3,
        inputSkill4: inputSkill4,
        inputSkill5: inputSkill5,
        inputSkill6: inputSkill6,
        inputLang1: inputLang1,
        inputLang2: inputLang2,
        inputLang3: inputLang3,
        inputLang4: inputLang4,
        inputLang5: inputLang5,
        inputUserInfo: inputUserInfo,
        inputExperience1: inputExperience1,
        inputExperience2: inputExperience2,
        inputExperience3: inputExperience3,
        inputExperience4: inputExperience4,
        inputDesig1: inputDesig1,
        inputDesig2: inputDesig2,
        inputDesig3: inputDesig3,
        inputDesig4: inputDesig4,
        inputSchool: inputSchool,
        inputCollege: inputCollege,
        inputUniversity: inputUniversity,
    };
    //Converting  formData Object into JSON string.
    const cnvrtStrData = JSON.stringify(formData);
    //storing JSON string in  browser localstorage.
    const storeData = localStorage.setItem("storedData", cnvrtStrData);
    //Redirecting to the Resume page.
    window.location.href = "../html/static_resume.html";
});
