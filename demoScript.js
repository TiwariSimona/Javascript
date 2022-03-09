let helloBtn = document.querySelector('button');
helloBtn.addEventListener('click',inputMsg);

function inputMsg(){
    let name = prompt('Enter Name');
    helloBtn.textContent='Hello:'+name;
    
    
}
