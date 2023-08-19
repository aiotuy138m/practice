// 繰り返し文
let fund = 50000; //新規作成 変数fund 入れろ 数値50000
while(fund >= 0) { //真であるかぎり 変数fund 以下 数値0 以下を繰り返せ
  console.log(fund); //コンソール 表示しろ 変数fund
  fund = fund -5080; //変数fund 入れろ 変数fund 引く 数値5080
  // 上記はfund -= 5080でも可
}
// ⇒fundが0になるまで-5080を繰り返す
// 実行すると最後に-800が出るが、これはプログラムの実行結果ではない。-800になってfund >=0がfalseになるから繰り返し終了

//for文
for(let cnt = 0; cnt < 10; cnt++) { //…の間 新規作成 変数cunt 入れろ 数値0 変数cnt 小なり 数値10 変数cnt 1増 以下を繰り返せ
  console.log('ハロー');
}
// ⇒数値0を、新規作成した変数cntに入れ、「変数cntが10より小さい」が真の間、以下を繰り返せ
// コンソール上では同じ文字列はまとめられて回数が表示される「10 ハロー」

for(let cnt = 0; cnt < 10; cnt++) {
  console.log(cnt + '回目のハロー！');
}
// ⇒変数0を、新規作成した変数cntに入れ、「変数cntが10より小さい」が真の間、以下を繰り返せ
// ⇒{変数cntと文字列「回目のハロー！」を連結した結果をコンソールに表示しろ}変数cntを1増やす

// 1〜10ではなく、10〜1で逆順で繰り返す
for(let cnt = 10; cnt > 0; cnt--) {
  console.log(cnt + '回目のハロー！');
}

// break文は繰り返し中断、continue文はブロック内のそれ以降の文をスキップする時に使用
//多重ループ

for(let cnt1 = 1; cnt1 < 10; cnt1++) { //…の間 新規作成 変数cnt1 入れろ 数値1 変数cnt1 小さい 数値10 変数cnt1 1増 以下を繰り返せ
  for(let cnt2 = 1; cnt2 < 10; cnt2++) { //…の間 新規作成 変数cnt2 入れろ 数値1 変数cnt2 小さい 数値10 変数cnt2 1増 以下を繰り返せ
    console.log(cnt1 * cnt2); //コンソール 表示しろ 変数cnt1 掛ける 変数cnt2
  }
}

//JavaScriptは単語の区切りで自由に改行できる。
for(let cnt1 = 1; cnt1 < 10; cnt1++) { //…の間 新規作成 変数cnt1 入れろ 数値1 変数cnt1 小さい 数値10 変数cnt1 1増 以下を繰り返せ
  for(let cnt2 = 1; cnt2 < 10; cnt2++) { //…の間 新規作成 変数cnt2 入れろ 数値1 変数cnt2 小さい 数値10 変数cnt2 1増 以下を繰り返せ
    console.log(cnt1 + '×' + cnt2 //文中に改行あってその中にコメントあり？⇒ありっぽい
    + '=' + cnt1 * cnt2); //コンソール 表示しろ 変数cnt1 ①連結 文字列「×」 ②連結 変数cnt2 ③連結 文字列「＝」 ④連結 変数cnt1 掛ける 変数cnt2
  }
}

//配列に複数のデータを記憶する
let wdays = ['月', '火', '水', '木', '金'];
console.log(wdays[1]);
// ⇒配列は0から数えるから2番目の「火」が出力される

// 書き換え
let wdays = ['月', '火', '水', '木', '金'];
wdays[1] = '炎';
console.log(wdays);
// ⇒「火」が「炎」に書き変わって出力される

let wdays = ['月', '火', '水', '木', '金'];
for(let day of wdays) {
  console.log(day + "曜日");
}
// for(let変数of配列)と記載する。

// 配列が使えない時はインデックスを指定してfor文を使用する
let wdays = ['月', '火', '水', '木', '金'];
for(let cnt = 0; cnt < wdays.length; cnt++) { //…の間 新規作成 変数cnt 入れろ 数値0 変数cnt 小さい 変数wdays lengthプロパティ 変数cnt 1増 以下を繰り返せ
  console.log(wdays[cnt] + "曜日"); //コンソール 表示しろ 変数wdays 変数cnt 連結 文字列「曜日」
}

// 上記書き方は複雑にはなるがfor文が変数cntに入れる数値を他の目的でも使えるというメリットがある。

let team = ['A', 'B', 'C', 'D', 'E'];
for(let t1 of team) {
  for(let t2 of team) {
    if(t1 !== t2) {
      console.log(t1 + 'vs' + t2);
    }
  }
}
// ⇒上記ではAvsAなど同じチーム同士の対戦は省けるが、AvsBとBvsAなどの同じ意味合いの試合は省けない。
// 同じものを省くには、Aと対戦するのはB,C,D,EでBと対戦するのはC,D,Eと、対戦するチームが1つずつ少なくなっている

let team = ['A', 'B', 'C', 'D', 'E'];
let opps = ['A', 'B', 'C', 'D', 'E'];
for(let t1 of team) {
  opps.shift(); //変数opps 先頭削除
  for(let t2 of opps) { //…の間 新規作成 変数t2 所属する 変数opps 以下を繰り返せ
    console.log(t1 + 'vs' + t2);
  }
}
// ⇒外側のfor文で繰り返すたび先頭が削除されていきB,C,D,E→C,D,E→D,Eと減っていく


// 練習問題
// 問1：東西南北を表示するプログラムを書く
let dir = ['東', '西', '南', '北'];
for(let d of dir) {
  console.log(d);
}

// 問2：曜日を逆順に表示するプログラムを書く
let wdays = ['月', '火', '水', '木', '金'];
for(let cnt = wdays.length -1; cnt >= 0; cnt--) {
  console.log(wdays[cnt] + "曜日");
}