let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("info").innerHTML = myObj.name;
  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

$(document).ready(function() {
    $("#getBio").click(function(event) {
      $("#bio").load("einstein.json");
    });
  });