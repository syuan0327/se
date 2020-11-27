// Initialize Firebase
var config = {
    apiKey: "AIzaSyBkFpYYXoyExGPYDW7wq1bvQNJMuX6Sz_c",
    authDomain: "se109-d25e7.firebaseapp.com",
    databaseURL: "https://se109-d25e7.firebaseio.com",
    projectId: "se109-d25e7",
    storageBucket: "se109-d25e7.appspot.com",
    messagingSenderId: "714507152132",

};
firebase.initializeApp(config);

// var db = firebase.database();

// db.ref("/").push({
//     index : "0",
//     title : "1124",
//     content : "hello"})

// .then(function () {
//     alert("建立成功");
// }).catch(function () {
//     alert("伺服器發生錯誤，請稍後再試");
// });