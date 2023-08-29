const table = document.querySelector('table');
const authipt = document.querySelector('#auth');
const bookipt = document.querySelector('#book');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  if(authipt.value && bookipt.value){
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.innerText = authipt.value;
    td2.innerText = bookipt.value;
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  }
});
// if文を入れることで両方に入力のない場合は追加されない


// Uncaught TypeError: Cannot read properties of null(reading 'innerText')
// ⇒querySelectorメソッドが要素を見つけれられなかった場合にnullを返し、nullにはElementオブジェクトが持つプロパティやメソッドがないので処理エラーが起こる

// Uncaught TypeError: ＊＊＊ is not a function
// →型を間違えてメソッドを呼び出した場合に起きるエラー