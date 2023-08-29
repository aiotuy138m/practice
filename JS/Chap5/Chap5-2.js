const tarea = document.querySelector('textarea');
const fipt = document.querySelector('#findtxt'); //idで探す場合は先頭に#
const repipt = document.querySelector('#reptxt');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  const findtxt = fipt.value;
  const reptxt = repipt.value;
  let tagtxt = tarea.value;
  tagtxt = tagtxt.replaceAll(findtxt, reptxt);
  const newelem = document.createElement('p');
  newelem.innerText = tagtxt;
  document.body.appendChild(newelem);
});