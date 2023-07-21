let products = JSON.parse(localStorage.getItem("products")) || [];

const display=(data)=>{

    document.getElementById("product-page").innerHTML="";

    data.map((element)=>{

        let img = document.createElement("img");
        img.src = element.img;
        img.setAttribute("id", "p-img");

        let title = document.createElement("h3");
        title.innerHTML= element.title;
        title.setAttribute("id", "titname")

        let price = document.createElement("h5");
        price.innerHTML= element.price;
        price.setAttribute("id", "rupiya")

        let cat = document.createElement("p");
        cat.innerHTML= element.cat;
        cat.setAttribute("id", "catti")

        let btn = document.createElement("button");
        btn.innerHTML= "Add To Cart"
        btn.setAttribute("id","addcart");

        let div = document.createElement("div");
        div.setAttribute("id","text")

        div.append(img, title, price, cat, btn);
        document.getElementById("product-page").append(div);

    })

}

const productdata=(e)=>{
    e.preventDefault();

    let product = {
        img : document.getElementById("img").value,
        title : document.getElementById("title").value,
        price : document.getElementById("price").value,
        cat : document.getElementById("cat").value,
    }
    products.push(product);
    console.log(products)
    localStorage.setItem("products",JSON.stringify(products));
    display(products);
}
display(products);


document.querySelector("form").addEventListener("submit",productdata);