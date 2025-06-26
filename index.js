//console.log("Hello, World!"); 

   //function darkMode(){
   //document.body.style.background="black"; 
   //document.querySelectorAll('h1').forEach(e=>e.style.color="white");
   //document.querySelectorAll('p').forEach(e=>e.style.color="white");
  //} 

  //function lightMode(){
   //document.body.style.background="white"; 
   //document.querySelectorAll('h1').forEach(e=>e.style.color="black");
   //document.querySelectorAll('p').forEach(e=>e.style.color="black");
  //}

  let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})