import axios from "axios"
import   "./main.css";
import  "./index2";

const table:HTMLDListElement = document.querySelector(".table")!;
const category:NodeListOf<HTMLDivElement> = document.querySelectorAll(".category")!;
const Products_price:HTMLParagraphElement = document.querySelector(".Products_price")!;

const url  = "https://course-api.com/react-store-products";

async function fetchSAm() {
try {
	const response = await axios.get(url);
	renderData(response.data);
	blob(response.data);
	console.log(response.data)
} catch (error) {
	console.error("Error fetching:" , error.message);
}
}

function renderData(data:any ) {
data.forEach((element:any, i:number) => {
const bun_div:HTMLDivElement = document.createElement("div");
const img:HTMLImageElement = document.createElement("img");
const span:HTMLSpanElement = document.createElement("span");
const h3:HTMLParagraphElement = document.createElement("h3");
const some_44:HTMLParagraphElement = document.createElement("h3");
Products_price.innerText = `${i} Products Found`;

some_44.className = "some_44";
h3.innerText = `${element.name}`;
h3.className = "h3";
some_44.innerText =`$${element.price}`;
bun_div.className = "imageUrl";
img.src = `${element.image}`;
img.className = "img";
table.className = "table";
span.className = "span";
table.appendChild(bun_div);
bun_div.appendChild(img);
bun_div.appendChild(span);
span.appendChild(h3);
span.appendChild(some_44);
});
}
console.log(category);

function fer() {
	for(let i = 0; i < 40; i++){
		const bun_div: HTMLDivElement = document.createElement("div");
		bun_div.className = "loader imageUrl";
		table.appendChild(bun_div);
	}
}
const pro_tm: HTMLParagraphElement = document.querySelector(".pro_tm")!;
pro_tm.addEventListener("click", () => {
	table.innerHTML = "";
	fetchSAm();
});

setTimeout(() => {
	table.innerHTML = "";
	fetchSAm();
}, 1000);

let a: string[] = ["Office", "Living Room", "Kitchen", "Bedroom","Dining", "Kids"];

function  blob(data:any) {
	book(data);
	category.forEach((okay:any, i) => {
		okay.addEventListener("click",() => {
			table.innerHTML = "";
			console.log(okay, i);
const selectedCategory = okay.textContent.trim().toLowerCase();

data.forEach((cat:any) => {

	if(cat.category.toLowerCase() === selectedCategory || selectedCategory === "all"){
const bun_div:HTMLDivElement = document.createElement("div");
const img:HTMLImageElement = document.createElement("img");
const span:HTMLSpanElement = document.createElement("span");
const h3:HTMLParagraphElement = document.createElement("h3");
const some_44:HTMLParagraphElement = document.createElement("h3");

some_44.className = "some_44";
h3.innerText = `${cat.name}`;
h3.className = "h3";
some_44.innerText = `$${cat.price}`;
bun_div.className = "imageUrl";
img.src = `${cat.image}`;
img.className = "img";
table.className = "table";
span.className = "span";
table.appendChild(bun_div);
bun_div.appendChild(img);
bun_div.appendChild(span);
span.appendChild(h3);
span.appendChild(some_44);
}
});

okay.classList.toggle("bobble");

category.forEach((element, index) => {
	if(i !== index ) {
		element.classList.remove("bobble");
	}
});
		});
	});
}

const hello:HTMLInputElement = document.querySelector(".digv1")!;
const ppr:HTMLParagraphElement = document.querySelector("#selectedPrice")!;
hello.addEventListener("input", tola);
let pro_pro:any;

function tola() {
	pro_pro = hello.value;
	ppr.textContent = `selected Price: $${pro_pro}`;

}

console.log(pro_pro);


function book(data:any) {
data.forEach((a: {name:any; price:any; image:any;}) => {
	if(a.price <= pro_pro){
		const bun_div:HTMLDivElement = document.createElement("div");
		const img:HTMLImageElement = document.createElement("img");
		const span:HTMLSpanElement = document.createElement("span");
		const h3:HTMLParagraphElement = document.createElement("h3");
		const some_44:HTMLParagraphElement = document.createElement("h3");


		some_44.className = "some_44";
		h3.innerText = `${a.name}`;
		h3.className = "h3";
		some_44.innerText = `$${a.price}`;
		bun_div.className = "imageUrl";
		img.src = `${a.image}`;
		img.className = "img";
		table.className = "table";
		span.className = "span";
		table.appendChild(bun_div);
		bun_div.appendChild(img);
		bun_div.appendChild(span);
		span.appendChild(h3);
		span.appendChild(some_44);

	}
});
}
