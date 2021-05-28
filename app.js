//create hover by diving 70vw by number of li 
function setWithLi() {
    const numLi = document.querySelectorAll('li');
    const width = 70/(numLi.length);
    
    const links = document.querySelector('.navlinks').querySelectorAll('a');
    console.log(links);
    links.forEach((item)=> {
        item.style.width = String(width)+"vw";
    })
}

setWithLi();