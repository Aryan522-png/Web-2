document.addEventListener("DOMContentLoaded", function () {
    const myName = document.getElementById("myname");
    const text = "ARYAN WAREKAR";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            myName.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
    
    myName.innerHTML = "";
    typeText();

    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
