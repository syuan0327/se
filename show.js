var leadsRef = firebase.database().ref();引用firebase

//number:貼文編號
//title:貼文標題
for(var i in snap.val()) {
    $('#article').append( 
        `<label>編號:${snap.val()[i].number}</label><br> 
        <label>標題:${snap.val()[i].title}</label><br>
    )
}})
