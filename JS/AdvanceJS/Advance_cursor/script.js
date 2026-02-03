const outer = document.querySelector(".outer-c")
const inner = document.querySelector(".inner-c")


addEventListener("mousemove",(e)=>{
    const {clientX,clientY} = e;

    outer.style.top = clientY + 'px'
    outer.style.left = clientX + 'px'

    inner.style.top = clientY + 'px'
    inner.style.left = clientX + 'px'
})