let bar = document.querySelector("#bar");
let sidebar = document.querySelector('.sidebar')
let display = 0; 
    bar.addEventListener("click", function () {
       this.classList.toggle("fa-x");
       if (display==1){
        sidebar.style.display= 'none';
        display = 0;
       }
       else{
        sidebar.style.display= 'flex';
        display = 1;
       }

    });
/*
function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display= 'flex'
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display= 'none'
}*/

