const keyword = document.querySelector('input'); //→文字列「input」をセレクタとしてドキュメントから探し出し、見つけた要素を新規作成した変数keywordに入れろ
const btn = document.querySelector('button'); //→文字列「button」をセレクタとしてドキュメントから探し出し、見つけた要素を新規作成した変数btnに入れろ
const callApi = async () => { //引数を受け取らない以下の内容の非同期関数を作って、新規作成した変数callApiに入れろ
  const url = new URL('https://www.googleapis.com/books/v1/volumes'); //文字列https://（中略）/volumesを渡してURLオブジェクトの新しい実体を作り新規作成した変数urlに入れろ
  url.searchParams.set('q', keyword.value); //変数urlの検索パラメーターに文字列qと変数keywordのvalueプロパティをセットしろ
  const res = await fetch(url); //変数urlから結果を取ってくるまで待って、新規作成したresに入れろ  この行はずっと左端に「fetch is not defined; please fix or add /*global fetch*/」って警告文でているけどコンソールにエラーなく、一応問題なく動いているみたい…？
  const books = await res.json(); //変数resをJSオブジェクトに変換するまで待って、新規作成した変数booksに入れろ
  console.log(books); //変数booksをコンソールに表示しろ
};
btn.addEventListener('click', callApi); //変数btnに対し、変数callApiをイベントタイプ「click」のイベントリスナーとして設定せよ

// Google Books APIのデータを取得する。ボタンを押しても画面上変化はないが、コンソール上はデータを持って来れていることが確認できる
// Google Books APIで書籍を検索する時に使用するURLが変数urlで指定したURLの最後に「?q=キーワード」のもので、最後の部分をserchParamsプロパティのsetメソッドで作成している
