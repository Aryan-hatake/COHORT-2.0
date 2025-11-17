var btn = document.querySelector("button");
const quotes = [
  "Discipline turns dreams into results.",
  "Your habits decide your future.",
  "Small steps every day build big victories.",
  "Consistency beats motivation every single time.",
  "Focus is a superpower most people ignore.",
  "Your only real competition is yesterday’s you.",
  "Courage begins where comfort ends.",
  "Every master was once a confused beginner.",
  "Progress is louder than excuses.",
  "Your mindset will carry you further than your talent.",
  "If you can’t control your mind, it will control you.",
  "Success loves preparation.",
  "You don’t need motivation; you need commitment.",
  "Build your life, not your excuses.",
  "The best time to start was yesterday. The next best is now.",
  "Your struggle today is your strength tomorrow.",
  "Failure is not opposite to success; it’s part of it.",
  "Discomfort is the gateway to growth.",
  "Be the reason your future self smiles.",
  "Energy flows where attention goes.",
  "Your life changes the moment your standards change.",
  "Your grind will make sense one day.",
  "Strength grows in silent battles.",
  "When you feel like quitting, remember why you started.",
  "If it was easy, everyone would do it.",
  "You don’t need to be perfect — just better.",
  "Never fear slow progress; fear standing still.",
  "Discipline is choosing what you want most over what you want now.",
  "The only limits you have are the ones you accept.",
  "Success is built on boring, daily work.",
  "Stop doubting yourself, work harder.",
  "Your future is built by today’s decisions.",
  "Dreams demand sacrifice.",
  "Your potential is bigger than your fear.",
  "One hour of focus beats five hours of distraction.",
  "You can’t win if you don’t show up.",
  "Your best teacher is your last mistake.",
  "Don’t complain. Upgrade.",
  "Work in silence. Let success talk.",
  "Comfort kills ambition.",
  "The grind is tough, but regret is tougher.",
  "Patience + Consistency = Power.",
  "Do it scared, but do it anyway.",
  "Your success will upset the lazy.",
  "Don’t wait for inspiration. Create it.",
  "If they can do it, you can do it better.",
  "Win the day, every day.",
  "Greatness begins with self-control.",
  "Stop wishing. Start executing.",
  "Every effort compounds, even the small ones.",
  "A year from now, you’ll thank yourself.",
  "Pain is temporary; pride is forever.",
  "Silence is your best strategy until you win.",
  "Stay hungry; stay humble.",
  "Let your actions prove your point.",
  "Your vibe attracts your tribe.",
  "What you ignore becomes your weakness.",
  "There is no growth without struggle.",
  "Purpose fuels discipline.",
  "Better days start with better choices.",
  "A clear mind wins bigger battles.",
  "Sacrifice today so you shine tomorrow.",
  "You can’t reach new levels with old habits.",
  "Confidence is built, not gifted.",
  "Your grind will confuse people — let it.",
  "Weak moments build strong people.",
  "Nothing changes if nothing changes.",
  "Your consistency scares those who quit.",
  "Invest in yourself like you’re a business.",
  "Believe in progress more than perfection.",
  "You rise by lifting your standards.",
  "Execution separates dreamers from achievers.",
  "Your effort writes your future.",
  "Stop delaying your greatness.",
  "Success starts with self-belief.",
  "Don’t break down — break through.",
  "Every day is a chance to rewrite your story.",
  "Fear is a liar; ignore it.",
  "You owe it to yourself to become better.",
  "Chase growth, not approval.",
  "Your dreams won’t work unless you do.",
  "The right mindset can change everything.",
  "Stay focused — distractions are traps.",
  "You aren’t behind. You’re building.",
  "One decision can change your entire life.",
  "Be loyal to your goals, not your comfort.",
  "Your habits reveal who you’re becoming.",
  "Growth feels like struggle until it becomes strength.",
  "You didn’t come this far to stop here.",
  "Hard work will pay off — but not immediately.",
  "You can restart anytime.",
  "Not all storms come to destroy; some come to clear the path.",
  "Forget the noise and trust your direction.",
  "You’re allowed to start over stronger.",
  "Every day is a fresh opportunity.",
  "Self-discipline is self-love.",
  "Your journey matters more than opinions.",
  "Your time is too valuable to waste.",
  "Ambition is your greatest weapon.",
  "Keep going. The results are building quietly."
];

 document.querySelector("main").addEventListener("mousemove",()=>{
  var h1 = document.createElement("div");
  var randIdx = Math.floor(Math.random()*quotes.length);
  var x = Math.random()*100;
  var y = Math.random()*100;
  var scale = Math.random()*3;
  var rotate = Math.random()*360;
  var c1 = Math.floor(Math.random()*255);
  var c2 = Math.floor(Math.random()*255);
  var c3 = Math.floor(Math.random()*255);
  h1.style.height="50px"
  h1.style.width="50px"
  h1.style.whiteSpace="nowrap";
  h1.style.position="absolute";
  h1.style.left = x+"%";
  h1.style.top = y+"%"
  h1.style.transform=`scale(${scale}) rotate(${rotate}deg)`
  h1.style.backgroundColor=`rgb(${c1},${c2},${c3})`
  document.querySelector("main").appendChild(h1);
  console.log(h1)
})