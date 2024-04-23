let http= new XMLHttpRequest();
http.open('get','products.json',true);
http.send();
http.onload=function(){
    if(this.readyState == 4 && this.status == 200 ){
        let products=JSON.parse(this.responseText);
        let output= "";
        for(let item of products){
            output+= `
            <div class="product">
            <p class="latitude">${item.latitude}</p>
            <p class="user_id">${item.user_id}</p>
            <p class="name">${item.name}</p>
            <p class="longitude">${item.longitude}</p>
            </div>
            `;

        }
        document.querySelector(".products").innerHTML=output;

    }
}