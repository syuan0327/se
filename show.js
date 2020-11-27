var leadsRef = firebase.database().ref();引用firebase

for(var i = 1;i < 10; i++) {
    $('#article').append( 
        `<label>編號:${snap.val()[i].number}</label><br> 
        <label>標題:${snap.val()[i].title}</label><br>
    )
}})
