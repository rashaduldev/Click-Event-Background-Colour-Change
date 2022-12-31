// step-1---create on-load handaler
window.onload=()=>{
    main();
}
function main(){
    const nev=document.getElementById('nev')
    const btn =document.getElementById('btn')
    btn.addEventListener('click',function(){
        const bgColor=generatorRGBColor()
        nev.style.backgroundColor=bgColor;
    })
}

// step-2 ---create random colour ganarator function
function generatorRGBColor(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    
    return`rgb(${red},${green},${blue})`
}

// step-3-- COllect all nesesery reference 


// step-4---handel the click event
















