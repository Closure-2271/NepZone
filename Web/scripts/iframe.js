const links = document.querySelectorAll('a.iframe');
//iframe traget
const iframe = document.getElementById('avater-iframe');

links.forEach(link => {
    link.addEventListener('click',function(event) {
        event.preventDefault();
        const url = this.href;
        iframe.src = url;
    });
});