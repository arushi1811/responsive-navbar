//create hover by diving 70vw by number of li 
function setWithLi() {
    const numLi = document.querySelectorAll('li');
    const width = 70/(numLi.length);
    
    const links = document.querySelector('.navlinks').querySelectorAll('a');
    links.forEach((item)=> {
        item.style.width = String(width)+"vw";
    })
}

function burger() {
    const navlinks = document.querySelector('#navlinks');
    const line1 = document.querySelector('#line1')
    const line2 = document.querySelector('#line2')
    const line3 = document.querySelector('#line3')
    const burger =document.querySelector('.burger').addEventListener('click',() => {
        navlinks.classList.toggle("links-active");
        line1.classList.toggle("line1-active");
        line2.classList.toggle("line2-active");
        line3.classList.toggle("line3-active");
    });
    
}

setWithLi();
burger();