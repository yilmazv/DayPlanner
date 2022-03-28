let timeEl = document.getElementById("currentDay");
let nineEl = document.getElementById("nine");
let tenEl = document.getElementById("ten");
let elevenEl = document.getElementById("eleven");
let twelveEl = document.getElementById("twelve");
let oneEl = document.getElementById("one");
let twoEl = document.getElementById("two");
let threeEl = document.getElementById("three");
let fourEl = document.getElementById("four");
let fiveEl = document.getElementById("five");
let sixEl = document.getElementById("six");
let sevenEl = document.getElementById("seven");
let savbtnEl = document.getElementsByClassName("saveBtn");
let formControlEl = document.getElementsByClassName("form-control");
let resetbtnEl = document.getElementById("resetBtn");
let rowEl = document.getElementsByClassName(".row");
let allTextBox = document.querySelectorAll(".form-control");

let timeHour = moment().hours();
let userinputval;
let holdingHour;

// this is the function that is setting the background color change but its not working
// correctly for some odd reason
allTextBox.forEach(function callback(value, index) {
  // console.log("index ", index + 9);
  if (index + 9 < timeHour) {
    console.log("index + 9 ", index + 9);
    console.log("hour ", timeHour);
    this.$(formControlEl).addClass("future");
    console.log("went into first if");
  } else if (index + 9 == timeHour) {
    console.log("index + 9 ", index + 9);
    console.log("hour ", timeHour);
    this.$(formControlEl).removeClass("past");
    this.$(formControlEl).addClass("past");
    console.log("went into second if");
  } else if (index + 9 > timeHour) {
    console.log("index + 9 ", index + 9);
    console.log("hour ", timeHour);
    this.$(formControlEl).removeClass("past");
    this.$(formControlEl).removeClass("present");
    this.$(formControlEl).addClass("future");
    console.log("went into third if");
  }

  // if ($(index + 9).this() > $(timeHour)) {
  //   $(this).css("color", "red");
  //   console.log("went into first if");
  //   console.log($(index + 9));
  //   console.log($(timeHour));
  // }
  // if ($(index + 9) > $(timeHour)) {
  //   $(this).css("color", "red");
  //   console.log("went into second if");
  // }
  // if ($(index + 9) > $(timeHour)) {
  //   $(this).css("color", "red");
  //   console.log("went into third if");
  // }
});

// Function that is for getting the data that is saved at each element.
let time = moment().format("YYYY MMMM DD");
timeEl.textContent = time;

function savedVal() {
  let time9 = localStorage.getItem("09:00am");
  nineEl.textContent = time9;

  let time10 = localStorage.getItem("10:00am");
  tenEl.textContent = time10;

  let time11 = localStorage.getItem("11:00am");
  elevenEl.textContent = time11;

  let time12 = localStorage.getItem("12:00pm");
  twelveEl.textContent = time12;

  let time1 = localStorage.getItem("01:00pm");
  oneEl.textContent = time1;

  let time2 = localStorage.getItem("02:00pm");
  twoEl.textContent = time2;

  let time3 = localStorage.getItem("03:00pm");
  threeEl.textContent = time3;

  let time4 = localStorage.getItem("04:00pm");
  fourEl.textContent = time4;

  let time5 = localStorage.getItem("05:00pm");
  fiveEl.textContent = time5;

  let time6 = localStorage.getItem("06:00pm");
  sixEl.textContent = time6;

  let time7 = localStorage.getItem("07:00pm");
  sevenEl.textContent = time7;
}

// this is the function that is saving each element to the storage
for (let i = 0; i < savbtnEl.length; i++) {
  savbtnEl[i].addEventListener("click", function () {
    userinputval = savbtnEl[i].previousSibling.previousSibling.value;
    holdingHour =
      savbtnEl[i].previousElementSibling.previousElementSibling
        .firstElementChild.textContent;
    localStorage.setItem(holdingHour, userinputval);
  });
}

//reset button that deletes everything
resetbtnEl.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

savedVal();
function colorChange() {}
