var leadsRef = firebase.database().ref();


leadsRef.once("value", snap => { 
for(var i in snap.val()){
var str = snap.val()[i].index;
}
var index=++str;
$( "#send" ).click(function() {

    var title = $("#title").val();
    var content = $("#content").val();
    
    if(title==""){alert("標題不可為空")}
    if(content==""){alert("內文不可為空")}
    
    if(title && content)
    {
    leadsRef.push({ 
    "index" : index,
    "title" : title,
    "content" : content,
    })
    location.href="index.html";
    }
    
    })
})


