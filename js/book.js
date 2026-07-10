function openBook(){

    document.querySelector(".cover").classList.add("hidden");

    document.getElementById("page1").classList.remove("hidden");

    document.getElementById("moon").style.opacity="0";

document.getElementById("stars").style.opacity="0";

    revealLetter();

}