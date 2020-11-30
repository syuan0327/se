//參考資料:https://ithelp.ithome.com.tw/articles/10205961
//整合變數

//取得資料庫根目錄，放入變數leadsRef
var leadsRef = firebase.database().ref();

var counter=0;
//使用.once讀取每一筆資料
leadsRef.once("value", snap => {
    //使用for in loop 走訪每一筆
    for(var i in snap.val()) {
    ++counter;
    //alert(counter)
    }

    //最新的貼文置頂
    for(;counter>=1;--counter) {
        for(var i in snap.val()) {
        //在首頁id為article的標籤置入貼文...
        if(snap.val()[i].index==counter)
        {
            $('#article').append( 
            //從資料庫讀取每一筆index、title、content的值，並呈現在頁面上
            `<label>編號:${snap.val()[i].index}</label><br> 
            <label>標題:${snap.val()[i].title}</label><br>
            <label>內文:<br>${snap.val()[i].content}</label><br><br>`
            )
        }
    }
}
})

