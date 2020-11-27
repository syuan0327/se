var leadsRef = firebase.database().ref();

//number:貼文編號
//title:貼文標題
//text:貼文內文

for(var i in snap.val()) {
    $('#article').append( 
        `<label>編號:${snap.val()[i].number}</label><br> 
        <label>標題:${snap.val()[i].title}</label><br>
        <label>內文:<br>${snap.val()[i].text}</label><br><br>
    )
}})
