/*==============================
ESTRELLAS
==============================*/

const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

   const size=Math.random()*4+1;
star.style.opacity=Math.random();
    star.style.width=size+"px";

    star.style.height=size+"px";

    star.style.animationDelay=(Math.random()*5)+"s";

    star.style.animationDuration=(3+Math.random()*5)+"s";

    stars.appendChild(star);

}