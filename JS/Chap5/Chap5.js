const ipt = document.querySelector('input');
const elem = document.querySelector('p');
elem.innerText = ipt.value;
// ⇒この記述だとクリックしても何も起きないし、入力フォーム下の「結果表示」の文字も消えてしまう
// →読み込まれた瞬間に実行されるため、ipt.valueには何も入っていないため