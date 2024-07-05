// Function to add or remove the 'scrolled' class to navbar
document.addEventListener('scroll',()=>{
    const header= document.querySelector('header');
    if(window.scrollY>0){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled')
    }
});