// 条件分岐
let moji = prompt('入力せよ'); //新規作成 変数moji 入れろ 入力させる 文字列「入力せよ」
// ⇒文字列「入力せよ」を表示してユーザーに入力させた結果を、新規作成した変数mojiに入れろ。
console.log(isNaN(moji)); //コンソール 表示しろ 数値に変換不可 変数moji
// ⇒変数mojiは数値に変換不可かをコンソールに表示しろ
let suuji = prompt('入力せよ'); //新規作成 変数suuji 入れろ 入力させる 文字列「入力せよ」
if(isNaN(suuji)) { //もしも 数値に変換不可 変数suuji 真なら以下を実行せよ
  console.log('数字ではない'); //コンソール 表示しろ 文字列「数字ではない」
}
// ⇒文字列「入力せよ」を表示してユーザーに入力させた結果を新規作成した変数suujiに入れて、
// ⇒もしも「変数suujiは数値に変換不可」が真なら以下を実行
// ⇒文字列「数字ではない」をコンソールに表示

let input = prompt('入力せよ'); //新規作成 変数input 入れろ 入力させる 文字列「入力せよ」
if(!isNaN(input)) { //もしも ではない 数値に変換不可 変数input 真なら以下を実行せよ
  console.log(parseInt(input) + 80); //コンソール 表示しろ 整数化 変数input　足す 数値80
}
// ⇒文字列「入力せよ」を表示してユーザーに入力させた結果を新規作成した変数inputに入れて、
// ⇒もしも「変数inputは数値に変換不可ではない」が真なら以下を実行
// ⇒変数inputを整数化して数値80を足した結果をコンソールに表示しろ
// これだと間違って整数以外を入力してもエラーが出ない⇒利用者を驚かさないようになっている

let kazu = prompt('入力せよ'); //新規作成 変数kazu 入れろ 入力させる 文字列「入力せよ」
if(!isNaN(kazu)) { //もしも ではない 数値に変換不可 変数kazu 真なら以下を実行せよ
  console.log(parseInt(kazu) + 80); //コンソール 表示しろ 整数化 変数kazu　足す 数値80
} else { //そうでなければ以下を実行せよ
  console.log('数字ではない'); //コンソール 表示しろ 文字列「数字ではない」
} //ブロック終了
// ⇒文字列「入力せよ」を表示してユーザーに入力させた結果を新規作成した変数kazuに入れて、
// ⇒もしも「変数kazuは数値に変換不可ではない」が真なら以下を実行
// ⇒変数kazuを整数化して数値80を足した結果をコンソールに表示しろ
// ⇒そうでなければ以下を実行せよ
// ⇒文字列「数字ではない」をコンソールに表示しろ

console.log(4 < 5);
// 結果はtrue
console.log(6 < 5);
// 結果はfalse

// 厳密な比較（＝＝＝と！＝＝）は、型の自動変換をしないで比較する。基本的には厳密な比較を使用する。
// ⇒==だと変数の値をundefinedやNaNと比較したい場合、意図した通りに判定されないケースが多いため
console.log(123 == '123');
// 結果はtrue
console.log(123 === '123');
// 結果はfalse
console.log(123 != '123');
// 結果はfalse
console.log(123 !== '123');
// 結果はtrue

let text = prompt('年齢は？'); //新規作成 変数text 入れろ 入力させる 文字列「年齢は？」
let age = parseInt(text); //新規作成 変数age 入れろ 整数化 変数text
if(age < 18) { //もしも 変数age 小さい 数値18 真なら以下を実行せよ
  console.log('未成年'); //コンソール 表示しろ 文字列「未成年」
} //ブロック終了
// ⇒文字列「年齢は？」を表示してユーザーに入力させた結果を新規作成した変数textに入れ、
// ⇒変数textを整数化して新規作成した変数ageに入れる
// ⇒もしも「変数ageは数値18より小さい」が真なら以下を実行
// ⇒文字列「未成年」をコンソールに表示

//else if文
let nyuuryoku = prompt('年齢は？');
let toshi = parseInt(nyuuryoku);
if(toshi < 18) { //もしも　変数toshi 小さい 数値18 真なら以下を実行せよ
  console.log('未成年');
} else if(toshi < 65) { //そうではなく もしも 変数toshi　小さい 数値65 真なら以下を実行せよ
  console.log('成人');
} else { //そうでなければ以下を実行せよ
  console.log('高齢者');
} //ブロック終了 
// ⇒17以下は「未成年」、64以下は「成人」、65以上は「高齢者」と表示する

// 上記else if をifにした場合はif文が2つになってしまい、複数のブロックが実行される可能性が出てくる。
// その状態で実行し、18未満の数値を入力すると「toshi < 18」と「toshi <65」どちらも満たすため「未成年」と「成人」どちら表示されてしまう

let suujimoji = prompt('年齢は？');
if( ! isNaN(suujimoji)) { //もしも ではない 数値に変換不可 変数suujimoji 真なら以下を実行せよ
  let nenrei = parseInt(suujimoji);
  if(nenrei < 18) {
    console.log('未成年');
  }
}

// 論理演算子
if(age >= 6 && age <= 15) {
  console.log('義務教育の対象');
}
// ⇒もしも「変数ageが数値6以上、かつ変数ageが数値15以下」が真なら実行せよ

if(age <= 5 || age >= 65) {
  console.log('幼児と高齢者');
}
// ⇒もしも「変数ageが5以下、または変数ageが65以上」が真なら実行せよ

if(! isNaN(moji)) {
  console.log('数値に変換可能');
}
// ⇒もしも「変数mojiは数値に変更不可ではない」が真なら実行せよ

// ※論理演算子の優先順位は！＞＆＆＞｜｜の順

let kazumoji = prompt('年齢は？');
if(! isNaN(kazumoji)) {
  let nennrei = parseInt(kazumoji);
  if(nennrei < 18) {
    console.log('未成年');
    if(nennrei >= 6 && nennrei <= 15) {
      console.log('(義務教育)');
    }
  } else if(nennrei < 65) {
  console.log('成人');
  } else {
    console.log('高齢者');
  }
}
// ⇒18以下かつ6以上15以下であれば「未成年」と「（義務教育）」両方表示される

// 上記だと入力された文字列が数値に変換不可の場合、それ以降の部分は実行する必要がない。
// ⇒！演算子を使って「数値に変換不可」の時にプログラムを中断すれば、インデントを一階減らすことができる

let checkAge = () => {
  let moji = prompt('年齢は？');
  if(isNaN(moji)) {
    return;
  }
  let age = parseInt(moji);
  if(age < 18) {
    console.log('未成年');
    if(age >= 6 && age <= 15) {
      console.log('(義務教育)');
    }
  } else if(age < 65) {
  console.log('成人');
  } else {
    console.log('高齢者');
  }
};

// 「Uncaught SyntaxError: Unexpected token }」 未捕捉の 文法エラー 予期しない 字句 } ⇒括弧閉じすぎている時に出るエラー
// 「Uncaught SyntaxError: Unexpected end of input」 未捕捉の 文法エラー 予期しない 終端 の 入力 ⇒括弧閉じ忘れた時に出るエラー
// 「Uncaught SyntaxError: Unexpected token {」 未捕捉の 文法エラー 予期しない 字句 {　⇒else if を elseifと書いたときに出るエラー

let value = parseInt('abc');
console.log(value * 10);
// ⇒「NaN」 非数 エラーではない。エラーで止まらないので注意が必要。

//練習問題
// 問1 6歳未満なら「幼児」と表示するプログラムを作る
let toiichi = prompt('年齢は？');
let toiage = parseInt(toiichi);
if(toiage < 6) {
  console.log('幼児');
}

// 問2 以下のプログラムの問題点を探す
let toini = prompt( '年齢は？' );
let toiniAge = parseInt( toini );
if( toiniAge <= 5 && toiniAge >= 65 ) {
  console.log( '幼児と高齢者' );
}
// ⇒条件がtoiniAge >= 5 && toiniAge <= 65でないと動かない。5歳以下と65歳以上は同時に満たせない。