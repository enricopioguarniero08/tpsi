function loadNews(){
    const xhr = new XMLHttpRequest();

    xhr.open("get" , "news.txt");

    xhr.onload = function (){
        if (xhr.readyState === xhr.DONE){
            if (xhr.status === 200){
                document.getElementById("news").innerHTML = xhr.responseText
            }
        }
   
    }
    xhr.send(null);
}


