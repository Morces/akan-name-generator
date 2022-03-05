function myName() {
  let year = document.getElementById("year").value;
  let month = Number(document.getElementById("month").value);
  let day = Number(document.getElementById("day").value);
  let genders = document.getElementById("gender");

  // getting gender
  function gettingGender() {
    for (let gender of genders) {
      if (gender.selected) {
        return gender.value;
      }
    }
  }

  let valueOfGender = gettingGender();
  console.log(valueOfGender);

  // functions for validation
  function checkMonth() {
    if (month <= 1 || month > 12) {
      return false;
    } else {
      return true;
    }
  }

  function checkDay() {
    if (month === 2 && Number(year)%4 === 0) {
      if (day > 28 || day < 1) {
        return false;
      } else if (month === 2 && day > 29) {
        return false;
      } else if (month === 2 && day < 1) {
        return false;
      } else {
        return true;
      }
    } else if (day <= 0 || day > 31) {
      return false;
    } else {
      return true;
    }
  }
  // variables for validation
  let validMonth = checkMonth();
  let validDay = checkDay();
  
  // specific day of birth formula
  let dayOfWeek = Math.floor((((Number(year.slice(0,2))/4)-2*Number(year.slice(0,2))-1)+
  ((5*Number(year.slice(2,4))/4))+((26*(month+1)/10))+day)%7);

  // male and female akan names
  let maleNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ]; 
  let femaleNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];
  
}