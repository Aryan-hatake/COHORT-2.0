//Debouncing
function debounce(fn,delay){
    let timer;
    return function(){                      //agar event stop hoke 2 second hua tab fn chalega
        clearTimeout(timer);
        timer = setTimeout(fn,delay)
    }
}

//throttling

function throttle(fn,delay){
    let last = 0;
    return function(){              //agar event chalraha hai toh hi har 2 second ke gap pe fn chalega
        let now = Date.now()
        if(now-last>delay){
            fn()
            last = now
        }
    }
}

document.querySelector("input[type=text]").addEventListener("input",
    throttle(function(){console.log("hello")},2000)
)
// Action	Output
// Debounce	Wait until user stops triggering
// Throttle	Allow triggering at fixed intervals (e.g., once every 200ms)