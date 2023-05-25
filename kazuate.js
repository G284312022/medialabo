// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let sei = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  kaisu = kaisu + 1;

  let su = document.querySelector('span#kaisu');
  su = kaisu;
  document.getElementById('kaisu').textContent = su;

  let an = document.querySelector('span#answer');
  an = yoso;
  document.getElementById('answer').textContent = an;

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

  kaisup=(kaisu+1);
  console.log(kaisup+"回目の予想:"+yoso);
  if(kaisu < 3){
  if(kotae === yoso){
    console.log("正解です。おめでとう。");
    kaisu = 3;
  } 
  if(kotae < yoso){
    console.log("まちがい、答えはもっと小さいですよ");
  }
  if(kotae > yoso){
    console.log("まちがい、答えはもっと大きいですよ");
  }
}else{
    console.log("答えは"+kotae+"でした。すでにゲームは終わっています。");
}
kaisu = kaisu + 1;
document.getElementById('result').textContent = re;
}
