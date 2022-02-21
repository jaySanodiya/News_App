function storeSearchterm(term, parent){
    term.map((article)=>{
        let h1 = document.createElement("h1");
        h1.innerText = article.title;
        let img = document.createElement("img");
        img.src = article.urlToImage;
        let h3 = document.createElement("h3");
        h3.innerText= "Published At : " + article.publishedAt.slice(0,-1).split("T");
        let d1 = document.createElement("div");
        d1.id = "cont";
        let p = document.createElement("p");
        p.innerText= article.description;
        let url = document.createElement("a");
        let para2 = document.createElement("p");
        para2.innerText =article.content;
        url.innerText= "Link";
        url.href = article.url;
        let d2 = document.createElement("div");
        d1.append(h1,img,h3,p,para2,url);
        let parent = document.querySelector("#main");
        parent.append(d1);
    })


}

export default storeSearchterm;