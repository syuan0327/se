//參考資料:https://ithelp.ithome.com.tw/articles/10205961

//取得資料庫根目錄，放入變數leadsRef
var leadsRef = firebase.database().ref();

//使用.once讀取每一筆資料
leadsRef.once("value", snap => {
    //使用for in loop 走訪每一筆
    for(var i in snap.val()) {
        //在首頁id為article的標籤置入...
        $('#article').append( 
            //從資料庫讀取每一筆index，title，content的值，並呈現在頁面上
            `<label>編號:${snap.val()[i].index}</label><br> 
            <label>標題:${snap.val()[i].ttle}</label><br>
            <label>內文:<br>${snap.val()[i].content}</label><br><br>`
        )
    }
})
