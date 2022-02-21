async function apiCall(url) {

    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(err);
    }
    //add api call logic here


}


function appendArticles(articles, main) {
    
    //add append logic here
    articles.map((el)=>{
        let div = document.createElement("div");
        div.id = "homebaba"
        div.onclick = ()=>{
            localStorage.setItem("article",JSON.stringify(el));
            window.location.href="/news.html";
        }
        let para1 = document.createElement("p");
        para1.innerText =el.title;
        let img = document.createElement("img");
        img.src = el.urlToImage;
        let para2 = document.createElement("p");
        para2.innerText =el.content;
        div.append(para1,img,para2);
        main.append(div);
    });

}

export { apiCall, appendArticles }