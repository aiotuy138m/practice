const ipt = document.querySelector('input');
const btn = document.querySelector('button');
const elem = document.querySelector('p');
btn.addEventListener('click', () => {
    elem.innerText = ipt.value;
});