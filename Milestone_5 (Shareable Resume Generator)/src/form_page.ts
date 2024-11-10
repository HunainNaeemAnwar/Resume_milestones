const form = document.getElementById("_Form") as HTMLFormElement;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //Getting all the userInputData using getElementbyID selector.

  const inputLinkedin = (
    document.getElementById("_Linkedin") as HTMLInputElement
  ).value;
  const inputGithub = (document.getElementById("_Github") as HTMLInputElement)
    .value;
  const inputTwitter = (document.getElementById("_Twitter") as HTMLInputElement)
    .value;
  const inputAdress = (document.getElementById("_Adress") as HTMLInputElement)
    .value;
  const inputEmail = (document.getElementById("_Mail") as HTMLInputElement)
    .value;
  const inputPhone = (document.getElementById("_Phone") as HTMLInputElement)
    .value;
  const inputName = (document.getElementById("_Name") as HTMLInputElement)
    .value;
  const inputSkill1 = (document.getElementById("_Skill1") as HTMLInputElement)
    .value;
  const inputSkill2 = (document.getElementById("_Skill2") as HTMLInputElement)
    .value;
  const inputSkill3 = (document.getElementById("_Skill3") as HTMLInputElement)
    .value;
  const inputSkill4 = (document.getElementById("_Skill4") as HTMLInputElement)
    .value;
  const inputSkill5 = (document.getElementById("_Skill5") as HTMLInputElement)
    .value;
  const inputSkill6 = (document.getElementById("_Skill6") as HTMLInputElement)
    .value;
  const inputLang1 = (document.getElementById("_Lang1") as HTMLInputElement)
    .value;
  const inputLang2 = (document.getElementById("_Lang2") as HTMLInputElement)
    .value;
  const inputLang3 = (document.getElementById("_Lang3") as HTMLInputElement)
    .value;
  const inputLang4 = (document.getElementById("_Lang4") as HTMLInputElement)
    .value;
  const inputLang5 = (document.getElementById("_Lang5") as HTMLInputElement)
    .value;
  const inputUserInfo = (
    document.getElementById("_UserInfo") as HTMLInputElement
  ).value;
  const inputExperience1 = (
    document.getElementById("_Exp1") as HTMLInputElement
  ).value;
  const inputExperience2 = (
    document.getElementById("_Exp2") as HTMLInputElement
  ).value;
  const inputExperience3 = (
    document.getElementById("_Exp3") as HTMLInputElement
  ).value;
  const inputExperience4 = (
    document.getElementById("_Exp4") as HTMLInputElement
  ).value;
  const inputDesig1 = (document.getElementById("_Desig1") as HTMLInputElement)
    .value;
  const inputDesig2 = (document.getElementById("_Desig2") as HTMLInputElement)
    .value;
  const inputDesig3 = (document.getElementById("_Desig3") as HTMLInputElement)
    .value;
  const inputDesig4 = (document.getElementById("_Desig4") as HTMLInputElement)
    .value;
  const inputSchool = (document.getElementById("_School") as HTMLInputElement)
    .value;
  const inputCollege = (document.getElementById("_College") as HTMLInputElement)
    .value;
  const inputUniversity = (
    document.getElementById("_University") as HTMLInputElement
  ).value;

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
