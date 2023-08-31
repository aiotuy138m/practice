setTimeout(() => {
  console.log('3秒後にメッセージ表示');
}, 3000); //ミリ秒単位
console.log('完了を待たずにメッセージ表示');

//setTimeout関数は非同期処理のため、先にしたの処理が処理される