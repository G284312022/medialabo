// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
// ボタンを押した後の処理をする関数 hantei() の定義
let x = document.querySelector('#print');
x.addEventListener('click',hantei);
function hantei() {
  let a = document.querySelector('input[name="yoso"]');
  let yoso = parseInt(a.value);
  Number('yoso');
  kaisu = kaisu + 1;

// 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する




  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  let kati=0;
  let aa = document.querySelector('p#result');
  if(kaisu < 4 && kati !== 1){
    let an = document.querySelector('span#answer');
    an.textContent = yoso;
    let su = document.querySelector('span#kaisu');
    su.textContent = kaisu + "回目の予想";
    if(kotae === yoso){
      aa.textContent = ("正解です。おめでとう。");
      kati=1;
    }else if(kotae < yoso){
      aa.textContent = ("まちがい、答えはもっと小さいですよ");
    }else if(kotae > yoso){
      aa.textContent = ("まちがい、答えはもっと大きいですよ");
    }
  }else{
    aa.textContent = ("答えは"+kotae+"でした。すでにゲームは終わっています。");
  }
  
}
