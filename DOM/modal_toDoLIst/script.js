var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("closeModal")[0];

openModalBtn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var lists = document.getElementsByTagName("LI");
for(var i = 0; i < lists.length; i++){
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  lists[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for(var i = 0; i < close.length; i++){
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = none;
  }
}

var list = document.querySelector("ul");
list.addEventListener("click", function(e) {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle('checked');
  }
}, false);

function newElement(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if(inputValue === ""){
    alert("Listee biceegui baina.");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for(i = 0; i < close.length; i++){
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}