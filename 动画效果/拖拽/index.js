const el = document.querySelector('.card');
el.onmousedown = (e) => {
    // e.pageX 获取鼠标点击位置 left
    // offsetLeft 获取元素 left
    const x = e.pageX - el.offsetLeft;
    const y = e.pageY - el.offsetTop;
    console.log(x);
    window.onmousemove = (e) => {
        const left = e.pageX - x;
        const top = e.pageY - y;
        el.style.left = left + 'px';
        el.style.top = top + 'px';
    }
    window.onmouseup = () => {
        window.onmousemove = null;
        window.onmouseup = null;
    }
}