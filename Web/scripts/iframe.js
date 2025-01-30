document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll("#side-bar ul li a");
    const iframe = document.createElement("iframe");
    iframe.id = "content-frame";
    iframe.style.width = "100%";
    iframe.style.height = "100vh";
    iframe.style.position = "absolute";
    iframe.style.left = "184px";
    iframe.style.top = "100px";
    iframe.style.border = "none";

    document.body.appendChild(iframe);

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const url = this.href;
            iframe.src = url; 
        });
    });
});
