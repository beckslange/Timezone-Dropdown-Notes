//HTML Select Element Notes
/* //step 2
console.log(countriesSelect);
console.log(countriesSelect.value);*/

//step 4
/*before steps 3 and 4, step 2 would only show select a country, becuase that was the first 
country, but now we created an event listener that makes it so that any country 
clicked on from the list is shown in the console log*/
/*function showSelectedCountry(event) { --erase this line's /* to see solution
  //step 6 --this console log is no longer needed, and turned into an alert
  //console.log(event.target.value);
  //step 7--done because select a country does not have a value
  if (event.target.value.length > 0) {
    // alert(event.target.value); --step 9, get rid of this after making step 8
    //step 8
    if (event.target.value === "france") {
      alert("Bonjour!");
    }
    if (event.target.value === "italy") {
      alert("Ciao!");
    }
    if (event.target.value === "brazil") {
      alert("Oi!");
    }
    if (event.target.value === "japan") {
      alert("こんにちは!");
    }
  }
}
//step 1 and step 5--move this under step 4 after step 4 is made. It was originally at the top of the page
let countriesSelect = document.querySelector("#countries");
//step 3
countriesSelect.addEventListener("change", showSelectedCountry); 
and erase this one*/
