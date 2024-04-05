//console.log("Hello, World!"); 

//object.onclick = function(darkMode){let element = document.body;
    //element.classList.toggle(".dark-mode");
  //};    

  function darkMode(){
   document.body.style.background="black"; 
   document.querySelectorAll('h1').forEach(e=>e.style.color="white");
  } 

  function lightMode(){
    document.body.style.background="white"; 
    document.querySelectorAll('h1').forEach(e=>e.style.color="black");
   }