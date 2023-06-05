let toshiID = document.querySelector('#print');
toshiID.addEventListener('click', sendRequest);

function sendRequest() {
// URL を設定
  let q = document.querySelector('input[name="toshi"]');
  let ll = parseInt(q.value);
let u = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+key+'.json';

// 通信開始
axios.get(url)
.then(showResult)
.catch(showError)
.then(finish);
}

function showResult(resp) {
// サーバから送られてきたデータを出力
let data = resp.data;

// data が文字列型なら，オブジェクトに変換する
if (typeof data === 'string') {
data = JSON.parse(data);
}
  

  let m = document.querySelector('p#kekka');
  m.textContent = data.name+'の最高気温は'+data.main.temp_max+'°です。最低気温は'+data.main.temp_min+'°です。'

}
// 通信エラーが発生した時の処理
function showError(err) {
console.log(err);
  let era = document.querySelector('p#kekka');
  era.textContent = '入力された都市IDは存在しない都市ID。別のIDを入力してください。'
} 

// 通信の最後にいつも実行する処理
function finish() {
console.log('Ajax 通信が終わりました');
}