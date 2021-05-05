


const tempload = () => {

   let thermo =document.getElementById("temp");
   thermo.innerHTML="<li class='fa'>&#xf2cb;</li>";
   thermo.style.color="#FF8C00";


   setTimeout(()=>{

    thermo.innerHTML="<li class='fa'>&#xf2ca;</li>";

   },1000)

   setTimeout(()=>{

    thermo.innerHTML="<li class='fa'>&#xf2c9;</li>";

   },2000)

   setTimeout(()=>{

    thermo.innerHTML="<li class='fa'>&#xf2c8;</li>";

   },3000)

   setTimeout(()=>{

    thermo.innerHTML="<li class='fa'>&#xf2c7;</li>";
    thermo.style.color="#FF4500";

   },4000)



}



tempload();

setInterval(tempload,5000);
