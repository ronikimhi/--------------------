function checkAllFields() {
  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const phone_num = document.getElementById("phone_num");
  const mail = document.getElementById("mail");
  const password = document.getElementById("password");
  const password_confession = document.getElementById("password_confession");

  // const fields = {
  //   firstName: document.getElementById("first_name"),
  //   lastName: document.getElementById("last_name"),
  //   phoneNum: document.getElementById("phone_num"),
  //   mail: document.getElementById("mail"),
  //   password: document.getElementById("password"),
  //   passwordConfession: document.getElementById("password_confession"),
  // };
  // let flag = true;
  // for (let field in fields) {
  //   if (fields[field] === "") {
  //     flag = false;
  //   }
  // }
  // if (!flag) {
  //   alert("Please fill all required fields!");
  // }

  // for (let field in fields) {
  //   if (fields[field].value === "" && field !== "phoneNum") {
  //     changeBorder(fields[field]);
  //   } else {
  //     backToOrigin(fields[field]);
  //   }
  //   if (field === "password") {
  //     if (password.value.length < 8) {
  //       changeBorder(fields[field]);
  //       errorMsg(field);
  //     } else {
  //       backToOrigin(field);
  //       cleanError(field);
  //     }
  //   }
  //   if (field === "passwordConfession") {
  //     if (
  //       fields.passwordConfession.value !== fields.password.value ||
  //       password.value.length < 8
  //     ) {
  //       changeBorder(fields[field]);
  //       errorMsg(field);
  //     } else {
  //       backToOrigin(fields[field]);
  //       cleanError(field);
  //     }
  //   }
  // }

  // function errorMsg(field) {
  //   //belong to password
  //   if (field === "password") {
  //     const writeError = document.getElementById("errorPass");
  //     writeError.textContent = "Password should be at least 8 characters";
  //     //belong to password confession
  //   } else {
  //     const writeError = document.getElementById("errorConPass");
  //     writeError.textContent = "Password confession is incorrect";
  //   }
  // }
  // function cleanError(field) {
  //   if (field === "password") {
  //     const writeError = document.getElementById("errorPass");
  //   } else {
  //     const writeError = document.getElementById("errorConPass");
  //   }
  //   writeError.textContent = "";
  // }
  let allTerms = true;

  if (firstName.value === "" || lastName.value === "" || mail.value === "" || password.value === "" ||password_confession.value === "") {
    // alert("Please fill all required fields!");
    allTerms=false;
    if (firstName.value === "") {
      changeBorder(firstName);
    } else {
      backToOrigin(firstName);
    }
    if (lastName.value === "") {
      changeBorder(lastName);
    } else {
      backToOrigin(lastName);
    }
    if (mail.value === "") {
      changeBorder(mail);
    } else {
      backToOrigin(mail);
    }
    if (password.value === "") {
      changeBorder(password);
    } else {
      backToOrigin(password);
    }
    if (password_confession.value === "") {
      changeBorder(password_confession);
    } else {
      backToOrigin(password_confession);
    }
  }
  //password and confPass terms:
  if (password.value.length < 8) {
    changeBorder(password);
    const error = document.getElementById("errorPass");
    error.textContent = "Password should be at least 8 characters";
    allTerms=false;
  } else {
    backToOrigin(password);
    const error = document.getElementById("errorPass");
    error.textContent = "";
  }

  if (password_confession.value !== password.value || password.value.length < 8) {
    changeBorder(password_confession);
    const errorConf = document.getElementById("errorConPass");
    errorConf.textContent = "Password confession is incorrect";
    allTerms=false;
  } else {
    if (password.value !== "") {
      // alert("Please fill all required fields!");
    backToOrigin(password_confession);
    const errorConf = document.getElementById("errorConPass");
    errorConf.textContent = "";
    }
  }
  
  //first alert and then takes out the red border
  if(allTerms){
    
    backToOrigin(firstName);
    backToOrigin(lastName);
    backToOrigin(mail);
    backToOrigin(password);
    backToOrigin(password_confession);
    const error = document.getElementById("errorPass");
    error.textContent = "";
    const errorConf = document.getElementById("errorConPass");
    errorConf.textContent = "";
  
  alert("Refister completed!! WELCOME to the family!");
  cleanField(firstName);
  cleanField(lastName);
  cleanField(phone_num);
  cleanField(mail);
  cleanField(password);
  cleanField(password_confession);
  }
  else{
    alert("Please fill all required fields!");
  }
}

//first take out the red border and then alert
// if (allTerms) {
//   setTimeout(() => {
//     backToOrigin(firstName);
//     backToOrigin(lastName);
//     backToOrigin(mail);
//     backToOrigin(password);
//     backToOrigin(password_confession);
//     const error = document.getElementById("errorPass");
//     error.textContent = "";
//     const errorConf = document.getElementById("errorConPass");
//     errorConf.textContent = "";

//     setTimeout(() => {
//       alert("Register completed!! WELCOME to the family!");
//       finishReg();

//       // Clean the fields
//       finishReg(firstName,lastName,phone_num,mail,password,password_confession);
//     }, 100);
//   }, 100);
// } else {
//   alert("Please fill all required fields!");
// }
// }


function changeBorder(changeBorder) {
  changeBorder.style.border = "1px solid red";
}

function backToOrigin(changeBorder) {
  changeBorder.style.border = "";
}
function cleanField(field) {
  field.value = "";
}
