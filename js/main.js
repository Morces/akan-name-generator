// const btn = document.getElementsByName("akan");
// btn.addEventListener('click', (e)=> {
//   e.preventDefault()
//   myName()
// });


function myName() {
  let year = document.getElementById("year").value;
  let month = Number(document.getElementById("month").value);
  let day = Number(document.getElementById("day").value);
  let genders = document.getElementsByName("gender");

  // getting gender
  function gettingGender() {
    for (let gender of genders) {
      if (gender.checked) {
        return gender.value;
      }
    }
  }

  let valueOfGender = gettingGender();
  console.log(valueOfGender);
  
  // functions for validation
  function checkMonth() {
    if (month <= 0 || month > 12) {
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
  let actualDays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  let maleNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ]; 
  let femaleNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];

  // index for item selection in the array
  let position;
  if (dayOfWeek == 0) {
    position = 6;
  } else {
    position = dayOfWeek - 1;
  }
  console.log(dayOfWeek);

  if (valueOfGender == "male" && validMonth && validDay){
    document.getElementsByClassName("result").textContent = dayOfWeek[position] + "is the day you were born" + "and your Akan name is " + maleNames[position];
  } else if (valueOfGender == "female" && validMonth && validDay) {
    document.getElementsByClassName("result").textContent = dayOfWeek[position] + "is the day you were born" + "and your Akan name is " + femaleNames[position];
  } else {
    alert ("INVALID DAY OR MONTH!! TRY AGAIN!");
  }
   
}