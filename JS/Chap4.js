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

//複数の関数やデータを組み合わせて使用
// 1つのファイルに関数定義、データ、関数呼び出しを書くと、プログラムが長くなり、全体が把握しにくくなる
// ⇒一般的にはファイルを複数に分割し、HTMLファイルに読み込んで利用する（Chap5でやる）

//複数の関数を組み合わせる
//メールを作る関数
let createMail = (recv, bill) => {
  let msg = `${recv}様
PT企画の斎藤です。
今月の請求額は${bill}円です。`;
  console.log(msg);
};
//手数料を追加する関数
let addChange = (bill) => {
  return bill * 1.07;
};
//送付先データ
let data = [
  { name:'山本', bill:40000, crg:true},
  { name:'吉田', bill:25000, crg:false}  
];
//メール作成実行
for(let rec of data) {
  let bill = rec['bill']
  if(rec['crg']) {
    bill = addChange(bill);
  }
  createMail(rec['name'],bill);
}
// ⇒変数dataに所属する要素を、新規作成した変数recに順次入れる間、以下を繰り返せ
// ⇒{変数recのプロパティ「bill」を、新規作成した変数billに入れろ
// 　もしも変数recのプロパティ「crg」が真なら以下を実行せよ
// 　{変数billを指定して手数料を追加し、変数billを入れろ}
// 　変数recのプロパティ「name」と変数billを指定してメールを作成しろ
//  }


// 実引数と仮引数の数があってなくてもJSはエラー吐かない。が、引数のデフォルト値は設定しないとundefined表記になる
let createMail = (recv, bill = 0) => {
  let msg = `${recv}様
PT企画の斎藤です。
今月の請求額は${bill}円です。`;
  console.log(msg);
};

// 変数にはスコープがある。letとconstで作成した変数はブロックスコープといい、波括弧で囲まれたブロックの中で作成された場合にはそのブロック内でしか参照できない
// メリット：プログラムを修正するとき、変数を作り直したり値を書き換えたりしても影響範囲が少ないこと。うっかり同じ名前の変数を作ってしまってもブロックが別であれば問題が発生しないこと
if(ture) {
  let caption = '谷口';
}
console.log(caption);
// ⇒「Uncaught ReferenceError: caption is not defined」エラーになる
// varで定義すれば関数スコープのため、同じ関数の中であればブロック外でも突き抜けて参照できる
// ※varは変数の再宣言でエラーが発生せず、後で作成した方の変数のみが残るので、複数人で1つのプログラムを作っている時にある人が作成した変数が他の人に上書きされてしまう期限があるためあまり使用が推奨されていない
// さらに可能ならletよりconstを使用する。letで作った変数には値を再代入できるが、constで作った変数は再代入が禁止されている。そのため、constはプログラムの中で書き換えできない変数であることを示すために使用される。
// ただ、constで宣言した変数にオブジェクトを代入した後に、オブジェクトのプロパティなどを書き換えてもエラーは発生しない
const data = {name: '山本'};
data['name'] = '佐藤';
console.log(data['name']);
// ⇒佐藤
// プログラム上、支障がない限りは基本的にconstで作るでよいらしい
// 支障が出るのは繰り返しの中で更新していくカウンターとからしい

// Uncaught SyntaxError: Unexpected indentifier 未捕捉の 文法エラー 予期しない 識別子
// 識別子は変数や関数、引数などの名前を指す

// 残余引数
// ...をつけることで残余引数になり、余分な引数は無視されず配列に入れられる
let callNames = (...names) => {
  for(let name of names) {
    console.log(name);
  }
};
callNames('山本', '吉田', '佐藤', '鈴木');

// 問1：createMail関数の文面を変更する
let createMail = (recv) => {
  console.log(recv + '様');
  console.log('はじめまして。')
};
createMail('山本');

let createMail = (recv) => {
  let msg = `${recv}様
はじめまして。`;
  console.log(msg);
};
createMail('山本');

// 問2：請求額がマイナスの時は0を返す
let addChange = (bill) => {
  if(bill <= 0) {
    return bill = 0;
  } else {
    return bill * 1.07;
  }
};
console.log(addChange(-1000));

// ⇒return使用しているのでelse不要だった↓
let addChange = (bill) => {
  if(bill <= 0) {
    return bill = 0;
  }
  return bill * 1.07;
};