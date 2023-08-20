//関数
let createMail = () => { //新規作成 変数createMail 入れろ 引数なし 関数作成 以下の内容
  console.log('PT企画の斎藤です。');
  console.log('請求書を送ります。');
}; //代入する文のため、最後に「;」つける
// ⇒この時点で実行しても何も起きない（呼び出さないと何も実行されない）
createMail(); //呼び出し文
// ⇒ここまで一緒に実行すれば、コンソールに定義した２文が表示される

//引数有
let createMail = (recv) => { //新規作成 変数createMail 入れろ 引数recv 関数作成 以下の内容
  console.log(recv + '様');
  console.log('PT企画の斎藤です。');
  console.log('請求書を送ります。');
};
createMail('山本'); //呼び出し文（引数：文字列「山本」）
createMail('吉田');

//ES5ではfuncton文とfunction式で関数を作っていた。ES2015でも使用できるが主流が上記のアロー関数式らしい
// function文
function createMail(recv) {
  console.log(recv + '様');
  console.log('PT企画の斎藤です。');
  console.log('請求書を送ります。');
}

// function式
let createMail = function(recv) {
   console.log(recv + '様');
   console.log('PT企画の斎藤です。');
   console.log('請求書を送ります。');
}

// テンプレート文字列
// バッククォートで囲んだ範囲に書いた文字列は改行やスペースがプログラムの実行結果に反映される。
let createMail = (recv, bill) => {
  let msg = `${recv}様
PT企画の斎藤です。
  今月の請求額は${bill}円です。`; //ここ部分のインデントも空白として反映されるため不要の場合は上の行のようにインデント削除する。
  console.log(msg);
};
createMail('山本', 40000);