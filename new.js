var leadsRef = firebase.database().ref();

//遍歷資料庫每一筆紀錄
leadsRef.once("value", snap => {
    //令str計數資料庫中的紀錄數量
    for (var i in snap.val()) {
        var str = snap.val()[i].index;
    }
    //令str的數值+1，成為新貼文的編號
    var index = ++str;

    $("#send").click(function () {
        //取得title和content的數值
        var title = $("#title").val();
        var content = $("#content").val();

        //防範標題內文為空的貼文
        if (title == "") { alert("Please enter the title.") }  // 標題不可為空
        if (content == "") { alert("Please enter your text.") }  // 內文不可為空
        //標題和內文都有內容則送入資料庫
        if (title && content) {
            leadsRef.push({
                "index": index,
                "title": title,
                "content": content,
            })
            //重新導回首頁
            location.href = "index.html";
        }

    })
})
