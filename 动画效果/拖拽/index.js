// const el = document.getElementsByClassName('card')[0];
// console.log(el);
// el.addEventListener('drag', () => {
//     console.log('111');
//     const offSet = el.offsetTop;
//     console.log(offSet);
// })
const el = document.querySelector('.card');
console.log(el);
el.onmousedown = (e) => {
    console.log('down');
    let x = e.pageX - el.offsetLeft;
    let y = e.pageY - el.offsetTop;
    window.onmousemove = (e) => {
        const cx = e.pageX - x;
        const cy = e.pageY - y;
        el.style.left = cx + 'px';
        el.style.top = cy + 'px';
    }
    window.onmouseup = () => {
        console.log('up');
        window.onmousemove = null;
        window.onmouseup = null;
    }
}