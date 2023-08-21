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

//テンプレート文字列を使用しない場合（ES2015以前の環境で書く場合）
let createMail = (recv, bill) => {
  let msg = recv + '様\n'
+ 'PT企画の斎藤です。\n'
+ '今月の請求額は' + bill + '円です。'; //ここ部分のインデントも空白として反映されるため不要の場合は上の行のようにインデント削除する。
  console.log(msg);
};
createMail('山本', 40000);

//関数の実行結果の値を返すreturn文
let addCharge = (bill) => { //新規作成 変数addCharange 入れろ 引数bill 関数作成 以下の内容
  return bill * 1.07; //呼び出し元に戻せ 引数bill 掛ける 数値1.07
}; //ブロック終了
console.log(addCharge(40000));


//一人分のデータをオブジェクトに入れる
let data = {name:'山本', bill:40000, crg:true}; //新規作成 変数data 入れろ オブジェクト開始 「name」と文字列「山本」 「bill」と数値40000 「crg」と真偽値ture オブジェクト終了
console.log(data['name']);
console.log(data['bill']);
// ⇒オブジェクト{プロパティ「name」と文字列「山本」,プロパティ「bill」と数値40000,プロパティ「crg」と真偽値tureを変数dataに入れろ
// ⇒変数dataのプロパティ「name」をコンソールに表示しろ
// ⇒変数dataのプロパティ「bill」をコンソールに表示しろ

//複数人のデータを配列にまとめる
let data = [
  { name:'山本', bill:40000, crg:true},
  { name:'吉田', bill:25000, crg:false}  
];
console.log(data[1]['name']);
console.log(data[1]['bill']);