// navbar
const sections = document.querySelectorAll("section[id]");
      window.addEventListener("scroll", navHighlighter);
          
      function navHighlighter() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 300;
          let sectionId = current.getAttribute("id");
                if (
                  scrollY > sectionTop &&
                  scrollY <= sectionTop + sectionHeight
                  ){
                    document.querySelectorAll("a[href*=" + sectionId + "]").forEach(element => {
                        element.parentElement.classList.add("active-nav");
                    });
                  } else {
                    document.querySelectorAll("a[href*=" + sectionId + "]").forEach(element => {
                        if(element.parentElement.classList.contains("active-nav"))
                        element.parentElement.classList.remove("active-nav");
                  })
                }
            })}

// home
const spots = document.querySelectorAll("span.pro");
spots[0].classList.add("pro-anim-left-in");
let active = 0;
const spotsCont = document.querySelectorAll(".spots");
spotsCont[0].classList.add("slide-left-in")
for(let i = 0 ; i < spots.length ; i++) {
  spots[i].onclick = () => {
    for(let j = 0 ; j < spots.length ; j ++){
      spots[j].setAttribute("class","pro")
      spotsCont[j].setAttribute("class","spots")
    }
    if(i > active){
        spots[i-1].classList.add("pro-anim-right-out")
        spotsCont[i-1].classList.add("slide-right-out")
        spots[i].classList.add("pro-anim-left-in")
        spotsCont[i].classList.add("slide-left-in")
        active = i;
        console.log(i)
    }
    if(i < active) {
      spots[i+1].classList.add("pro-anim-left-out")
      spotsCont[i+1].classList.add("slide-left-out")
      spots[i].classList.add("pro-anim-right-in")
      spotsCont[i].classList.add("slide-right-in")
        active = i;
        console.log(i)
    }
  }
}
let count = 1; 
setInterval(() => {
  if(count < spots.length){
    spots[count].click();
    count++
  }else {
    spots[0].click();
    count = 1;
  }
  
}, 3000);
