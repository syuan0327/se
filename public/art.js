//從./testfile/homework.html(此檔案負責人:鍾瑄)檔案分出來

function openNav() {
    document.getElementById("mySidenav").style.width = "240px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("a").style.marginLeft = "250px";
    document.getElementById("b").style.marginLeft = "250px";
    
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("a").style.marginLeft= "0";
    document.getElementById("b").style.marginLeft= "0";
  }