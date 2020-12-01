//此檔案負責人:陳士茵
var leadsRef = firebase.database().ref();

//遍歷資料庫每一筆紀錄
leadsRef.once("value", snap => {
    //令str計數資料庫中的紀錄數量
    for (var i in snap.val()) {
        var str = snap.val()[i].index;
    }
    //alert(str)

    //令str的數值+1，成為新貼文的編號

    //舊的檔案未處理str為undefined狀況，當貼文數為0會無法新增 by熙堯
    if(str==undefined)var index=1;
    else index = ++str;

    $("#send").click(function () {
        //取得title和content的數值
        var title = $("#title").val();
        var content = $("#content").val();

        //防範標題內文為空的貼文
        if (title == "") { alert("標題不可為空") } 
        if (content == "") { alert("內文不可為空") } 
        //標題和內文都有內容則送入資料庫
        if (title && content) {
            leadsRef.push({
                "index": index,
                "title": title,
                "content": content,
            })
            alert("新增成功")
            location.href = "index.html";
        }

    })
})
