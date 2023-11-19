function rain() {
    let cloud = document.querySelector('.cloud');
    let div = document.createElement('div');
    let left = Math.floor(Math.random() * 310);
    let width = Math.random() * 5;
    let height = Math.random() * 30;
    let duration = Math.random() * 0.5;

    div.classList.add('drop');
    cloud.appendChild(div);
    div.style.left = left + 'px';
    div.style.width = 0.5 + width + 'px';
    div.style.height = 0.5 + height + 'px';
    div.style.animationDuration = 1 + duration + 's';

    setTimeout(() => {
        cloud.removeChild(div);
    },2000);
}

setInterval(() => {
    rain();
},20);