const keyword = document.querySelector('input');
const btn = document.querySelector('button');
const table = document.querySelector('table');
const callApi = async () => {
  const url = new URL('https://www.googleapis.com/books/v1/volumes');
  url.searchParams.set('q', keyword.value);
  const res = await fetch(url);
  const books = await res.json();
  //ここからchap6-2と違うところ。今回はWebページに引っ張ってきたAPIの内容を表示させる
  for (const book of books.items) { //変数booksのitemプロパティに所属する要素を、新規作成した変数bookに順次入れる間、以下を繰り返せ
    const b = book.volumeInfo; //変数bookのvolumeInfoプロパティの値を新規作成した変数bに入れろ
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.innerText = b.title;
    td2.innerText = b.publisher;
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  }
};
btn.addEventListener('click', callApi);