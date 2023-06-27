const hamburger_icon=document.querySelector('.hamburger-icon')
const mobile_menu=document.querySelector('.mobile-menu')

hamburger_icon.addEventListener('click',()=>{
    hamburger_icon.querySelectorAll('div').forEach(div=>{
        div.classList.toggle('active')
    })
    mobile_menu.classList.toggle('fade-in')
    document.body.classList.toggle('stop-scrolling')
})