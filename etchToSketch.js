 function random() {
    let random = Math.floor(Math.random() * 256);
    return random
}
let count = 0;
let n = 0;
const gridSize = document.querySelector("#gridSize"); 
const colors = document.querySelector("#colors");
const shading = document.querySelector("#shading")
const container = document.querySelector("#container");
  gridSize.addEventListener("click", () => {
  let size = parseInt(prompt("enter desirable size"));
  container.innerHTML = ''

for(i = 0; i < Math.floor(600/size) ; i++){
    count++;
    for(j = 0; j < Math.floor(600/size)  ; j++){
const div = document.createElement("div");
container.appendChild(div);
div.style.width  = `${size}px`
div.style.height = `${size}px`
div.addEventListener("mouseover", () => {
    if(colors.checked && !shading.checked){ 
    div.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
      }
    else if (shading.checked && !colors.checked) {
        let shade = parseInt(div.getAttribute('data-shade')) || 0;

        if (shade === 0) {
          div.style.backgroundColor = "lightgrey";
          div.setAttribute('data-shade', 1);
        } else if (shade === 1) {
          div.style.backgroundColor = "silver";
          div.setAttribute('data-shade', 2);
        } else if (shade === 2) {
          div.style.backgroundColor = "grey";
          div.setAttribute('data-shade', 3);
        }
        else if (shade === 3) {
            div.style.backgroundColor = "dimgrey"
            div.setAttribute('data-shade', 4);
        }
        else if (shade === 4) {
            div.style.backgroundColor = "black";
        }
      }
    });

        

    } 
    
    

 }


    })


