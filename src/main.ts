import axios from "axios";

const pro_dtm: HTMLParagraphElement = document.querySelector(".pro_dtm")!;
const Products_price: HTMLParagraphElement = document.querySelector(".Products_price")!;
const table:HTMLDListElement = document.querySelector(".table")!;

let responseData:any = null;

const url  = "https://course-api.com/react-store-products";


async function ForData() {
  try{
    const response = await axios.get(url);
    responseData = response.data;
    Count_pro(responseData);
   console.log(responseData);

  }catch(error){
    console.log("Error fetching:", error.message);
  }
}

function Count_pro(data:any){
  table.innerHTML = "";
  data.forEach((element: any, i:number) => {
const bun_div:HTMLDivElement = document.createElement("div");
const img:HTMLImageElement = document.createElement("img");
const span:HTMLSpanElement = document.createElement("span");
const h3:HTMLParagraphElement = document.createElement("h3");
const some_44:HTMLParagraphElement = document.createElement("h3");
const description:HTMLParagraphElement = document.createElement("p");

Products_price.innerText = `${i}Products Found`;
description.innerText=`${element.description}`;
description.className="description";
some_44.className = "summa";
h3.innerText = `${element.name}`;
h3.className = "useName";
some_44.innerText = `$${element.price}`;
bun_div.className = "Pro_or";
img.src = `${element.image}`;
img.className = "color1";
span.className = "span1";
table.className ="sow";
table.appendChild(bun_div);
bun_div.appendChild(img);
bun_div.appendChild(span);
span.appendChild(h3);
span.appendChild(some_44);
span.appendChild(description);

  });
}

pro_dtm.addEventListener("click", () => {
  if (responseData) {
    Count_pro(responseData);
  }else {
    ForData();
  }
});
ForData();
