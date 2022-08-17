const leftArrow = document.querySelector("#click-left");
const rightArrow = document.querySelector("#click-right");

var left = 1;
var right = 5;

let show = () => {
  for (i = left; i <= right; i++ ) {
    document.querySelector("#c" + i).style.display = "inline-block";
  }
};

leftArrow.addEventListener("click", () => {
  if (left <= 6 && right <= 9) {
    document.querySelector("#c" + left).style.display = "none";
    left += 1;
    right += 1;
    
    for (i = left; i <= right; i++ ) {
        document.querySelector("#c" + i).style.display = "inline-block";
      }
    
  } else return;
});

rightArrow.addEventListener("click", () => {


  if (left >= 4 && right >= 8) {
    document.querySelector("#c" + left).style.display = "none";
    left -= 1;
    right -= 1;

    for (i = left; i <= right; i++ ) {
      document.querySelector("#c" + i).style.display = "inline-block";
    } 
    // show();
  } else return;
});


