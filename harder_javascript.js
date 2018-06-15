var head = document.getElementById('heading')
var dimensions = document.getElementById('resize');

var container = document.getElementById('container');
var animate = document.getElementById('animate');



// heading stuff 
function changeHeading() {
  head.innerHTML = "Click me?";
  head.style.backgroundColor = "orange";
};

head.addEventListener("mouseout", function() { 
  head.innerHTML = "Mouse-over!";
  head.style.backgroundColor = "white";
});

head.addEventListener("mousedown", function() {
  head.style.backgroundColor = "pink";
  head.innerHTML = "This uses event listeners!";
});

head.addEventListener("mouseup", function() {
  head.style.backgroundColor = "lightGrey";
});

// window resize 
window.addEventListener("resize", function() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  resize.innerHTML = 'the width is ' + w + 'px and the height is ' + h + 'px';
});

dimensions.addEventListener("mouseover", function(){
  dimensions.innerHTML = "try resizing the window!";
})

var pos = 0
//animation 
function moveBox() {  
  
  var timer = setInterval(frame, 10);
  console.log(timer);
  container.addEventListener("click", backBox);
  function frame() {

    if (pos >= 170) {
      clearInterval(timer);
      backBox();
    } else {
      pos = pos + 1;
      animate.style.top = pos + "px";
      animate.style.right = pos + "px";
    }
  }
}

function backBox() {
    var timer = setInterval(frame, 10);
    function frame() {
        if (pos <= 0) {
            clearInterval(timer);
        } else {
            pos = pos -1; 
            animate.style.top = pos + 'px'; 
            animate.style.right = pos + 'px'; 
        }
    }
}




