// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
// ボタンを押した後の処理をする関数 hantei() の定義
let x = document.querySelector('#prtnt');
x.addEventListener('clik',hantei);
function hantei() {
  let a =document.querySelector('input[name="y"]');
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = a.value;
  kaisu = kaisu + 1;

  let su = document.querySelector('span#kaisu');
  su.textContent = kaisu;

  let an = document.querySelector('span#answer');
  an.textContent = yoso;

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  
  let aa = document.querySelector('p#result');
  if(kaisu < 3){
    if(kotae === yoso){
      aa.textContent  ("正解です。おめでとう。");
      kaisu = 3;
    } if(kotae < yoso){
      aa.textContent = ("まちがい、答えはもっと小さいですよ");
    }if(kotae > yoso){
      aa.textContent ("まちがい、答えはもっと大きいですよ");
    }
  }else{
    aa.textContent = ("答えは"+kotae+"でした。すでにゲームは終わっています。");
  }
  
}
