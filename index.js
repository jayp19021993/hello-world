//console.log("Hello, World!"); 

  function darkMode(){
   document.body.style.background="black"; 
   document.querySelectorAll('h1').forEach(e=>e.style.color="white");
   document.querySelectorAll('p').forEach(e=>e.style.color="white");
  } 

  function lightMode(){
    document.body.style.background="white"; 
    document.querySelectorAll('h1').forEach(e=>e.style.color="black");
    document.querySelectorAll('p').forEach(e=>e.style.color="black");
   }