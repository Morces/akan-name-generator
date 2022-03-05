function myName() {
  let year = document.getElementById("year").value;
  let month = Number(documrnt.getElementById("month").value);
  let day = Number(documrnt.getElementById("day").value);
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
}