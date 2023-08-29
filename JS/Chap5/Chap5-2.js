const tarea = document.querySelector('textarea');
const fipt = document.querySelector('#findtxt'); //idで探す場合は先頭に#
const repipt = document.querySelector('#reptxt');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  const findtxt = fipt.value;
  const reptxt = repipt.value;
  let tagtxt = tarea.value;
  tagtxt = tagtxt.replaceAll(findtxt, reptxt); //変数tagtxt 入れろ 変数tagtxt すべて置換せよ 変数findtxtを検索して 変数reptxtに置換
  const newelem = document.createElement('p'); //新規作成 変数newelem　入れろ Documentオブジェクト 要素を作成しろ 文字列「p」
  newelem.innerText = tagtxt;
  document.body.appendChild(newelem); //Documentオブジェクト bodyプロパティ 末尾に子要素を追加 変数newelem
});