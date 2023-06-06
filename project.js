let b = document.querySelector('button#btn');
b.addEventListener('click', thushin);

function thushin() {
    let s =document.querySelector('select#project');
    let idx =s.selectedIndex;
    let os =s.querySelectorAll('option');
    let o =os.item(idx);
// URL を設定
    let l =o.value;
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+l+'.json';
    console.log(url); 
// 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

function showResult(resp) {
// サーバから送られてきたデータを出力
let data = resp.data;

// data が文字列型なら，オブジェクトに変換する
if (typeof data === 'string') {
data = JSON.parse(data);
}
console.log(data.name);
console.log(data.main.temp_max);
console.log(data.main.temp_min);
 let k = document.querySelector('span#p');
 k.textContent = ("都市名:"+data.name);
 let k2 = document.querySelector('span#p2');
 k2.textContent = ("最高気温:"+data.main.temp_max);
 let k3 = document.querySelector('span#p3');
 k3.textContent = ("最低気温:"+data.main.temp_min);
 let k4 = document.querySelector('span#p4');
 k4.textContent = ("緯度:"+data.coord.lon);
 let k5 = document.querySelector('span#p5');
 k5.textContent = ("経度:"+data.coord.lat);
 let k6 = document.querySelector('span#p6'); 
 k6.textContent =("天気:"+data.weather[0].description);
 let k7 = document.querySelector('span#p7');
 k7.textContent = ("湿度:"+data.main.humidity);
 let k8 =document.querySelector('span#p8');
 k8.textContent =("風速:"+data.wind.speed);
 let k9 = document.querySelector('span#p9');
 k9.textContent=("風向:"+data.wind.deg);

}
let e =
// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
} 

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}