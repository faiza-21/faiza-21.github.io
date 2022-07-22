/* .js files add interaction to your website */
var factList = [
  "Almost 40 million people in the US live below the poverty line.",/*0*/
  "Being homeless could take 20-30 years off your life.",/*1*/
  "Every year 2.5 million children experience homelessness. That’s almost the entire population of Chicago.",/*2*/
  "You could fill five football stadiums with the homeless population of the U.S.",
  "40% of homeless school-age children have a mental health problem.",
"Median rent increased by 61% from 1960 to 2016, while median renter income only rose by 5% in that period.",
"A worker within a family of four needs to earn $12.73 per hour to reach the poverty level."];/*3*/


var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
