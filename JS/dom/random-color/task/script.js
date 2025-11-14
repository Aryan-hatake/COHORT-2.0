var h1 = document.querySelector("h1")
var btn = document.querySelector("button")
var main = document.querySelector("main")

const ipl2026Teams = [
  { team: "Chennai Super Kings", primaryColor: "#F9CD05", secondaryColor: "#1C4EA1" },
  { team: "Mumbai Indians", primaryColor: "#004BA0", secondaryColor: "#D1AB3E" },
  { team: "Royal Challengers Bengaluru", primaryColor: "#000000", secondaryColor: "#D1A128" },
  { team: "Kolkata Knight Riders", primaryColor: "#3A225D", secondaryColor: "#C5A348" },
  { team: "Rajasthan Royals", primaryColor: "#EA1A8E", secondaryColor: "#17479E" },
  { team: "Sunrisers Hyderabad", primaryColor: "#F76900", secondaryColor: "#000000" },
  { team: "Delhi Capitals", primaryColor: "#004C93", secondaryColor: "#E4242E" },
  { team: "Punjab Kings", primaryColor: "#ED1B24", secondaryColor: "#D4AF37" },
  { team: "Gujarat Titans", primaryColor: "#1B2133", secondaryColor: "#DEC28B" },
  { team: "Lucknow Super Giants", primaryColor: "#0057B8", secondaryColor: "#F58220" }
];
console.log(ipl2026Teams.length)
btn.addEventListener('click',()=>{
    let winner =  Math.floor(Math.random()*ipl2026Teams.length)
    h1.innerHTML=ipl2026Teams[winner].team
    main.style.backgroundColor=ipl2026Teams[winner].primaryColor
    h1.style.backgroundColor=ipl2026Teams[winner].secondaryColor
})