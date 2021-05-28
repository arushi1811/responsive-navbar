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
    const burger =document.querySelector('.burger').addEventListener('click',() => {
        console.log("hi");
        navlinks.classList.toggle("links-active");
    });
    
}

setWithLi();
burger();