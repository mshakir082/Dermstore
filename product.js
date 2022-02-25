prodData= [
    {
    img : "https://static.thcdn.com/images/small/webp//productimg/original/12901140-9424904191542093.jpg",
    title : "miriam quevedo Black Baccara with Fresh Rose Stem Cells Hair Multiplying Shampoo (8.5 fl. oz.)",
    category : "HLTHT",
    brand : "Olaplex",
    price : "$50.00",
    review : 46
},
{
    img : "https://static.thcdn.com/images/small/webp//productimg/original/12902575-1284866433782963.jpg",
    title : "Oribe Serene Scalp Thickening Treatment Spray (4.2 fl. oz.)",
    category : "HLTHT",
    brand : "miriam quevedo",
    price : "$76.00",
    review : 74
},
{
    img : "https://static.thcdn.com/images/small/webp//productimg/original/13126467-4774880813872914.jpg",
    title : "VIRTUE Flourish Nightly Intensive Hair Growth Treatment Hair Kit 4 piece",
    category : "HLTHT",
    brand : "dpHUE",
    price : "$134.00",
    review : 2
},
{
    img : "https://static.thcdn.com/images/small/webp//productimg/original/12902382-1644931366740851.jpg",
    title : "Elon R3 Extra Strength for Thinning Hair (60 tablets) ",
    category : "HLTHT",
    brand : "dpHUE",
    price : "$29.99",
    review : 6
},
{
    img : "https://static.thcdn.com/images/small/webp//productimg/original/12902270-7864868371995567.jpg",
    title : "RevitaLash Hair Volumizing Enhancing Foam (1.9 fl. oz.) ",
    category : "HLTHT",
    brand : "R+Co",
    price : "$149.50",
    review : 6
},];
  localStorage.setItem("shampo",JSON.stringify(prodData));
var data = JSON.parse(localStorage.getItem("shampo"));

data.map(function(elem, index){
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("src", elem.img);
    img.setAttribute("style","width:100%");

    var h4Div=document.createElement("div");
    h4Div.setAttribute("class","h4Tag")
    var head = document.createElement("h4");
    head.innerText = elem.title;

    var rating = document.createElement("h4");
    rating.innerText = elem.review;

    var price = document.createElement("h4");
    price.innerText = elem.price

    h4Div.append(head,rating,price)
    var btn = document.createElement("button");
    btn.innerText = "QUICK BUY";
    btn.setAttribute("style","width:90%;height:40px; color:wight; color: white;background-color: #222222; ");
   
    
    box.append(img,  h4Div, btn);
    document.querySelector("#product").append(box);
  })