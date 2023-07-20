const productFeatures = [{
    id:1,
    fuelType:"Diesel",
    model:"Model1",
    transmissionMode:"Automatic",
    engine:"3.0-liter inline-6 turbocharged diesel engine",
    powerTorque:"330 lb-ft",
    price:55000,
    pros:["A","B","C"],
    cons:["A","B","C"],
    description:"The BMW X5 is a luxury midsize SUV that combines performance, comfort, and advanced features. With its sleek and muscular design, the X5 offers a strong presence on the road. The interior is spacious and well-appointed, providing a luxurious and comfortable driving experience for both the driver and passengers."
},{
    id:2,
    fuelType:"Diesel",
    model:"Model2",
    transmissionMode:"Automatic",
    engine:"3.0-liter inline-6 turbocharged diesel engine",
    powerTorque:"330 lb-ft",
    price:57000,
    pros:["A","B","C"],
    cons:["A","B","C"],
    description:"The BMW X5 is a luxury midsize SUV that combines performance, comfort, and advanced features. With its sleek and muscular design, the X5 offers a strong presence on the road. The interior is spacious and well-appointed, providing a luxurious and comfortable driving experience for both the driver and passengers."
},{
    id:3,
    fuelType:"Diesel",
    model:"Model3",
    transmissionMode:"Automatic",
    engine:"3.0-liter inline-6 turbocharged diesel engine",
    powerTorque:"330 lb-ft",
    price:59000,
    pros:["A","B","C"],
    cons:["A","B","C"],
    description:"The BMW X5 is a luxury midsize SUV that combines performance, comfort, and advanced features. With its sleek and muscular design, the X5 offers a strong presence on the road. The interior is spacious and well-appointed, providing a luxurious and comfortable driving experience for both the driver and passengers."
}]

localStorage.setItem("pro",JSON.stringify(productFeatures));

const product = JSON.parse(localStorage.getItem("pro"));

const fuel = document.getElementById("fuel-type");
const transmission = document.getElementById("fuel-transmission");
const carEngine = document.getElementById("engine");
const carPower = document.getElementById("power");
const pros = document.getElementById("pros");
const cons = document.getElementById("cons");
const productDescription = document.getElementById("product-description");
const price = document.getElementById("price");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");


const productId = document.getElementsByClassName("product-image")[0];

productId.addEventListener("click", (e) => {
    let id = e.target.getAttribute("id");
    const productUI = product.filter((product) => product.id == id);
    fuel.innerText = productUI[0].fuelType;
    transmission.innerText = productUI[0].transmissionMode;
    carEngine.innerText = productUI[0].engine;
    carPower.innerText = productUI[0].powerTorque;
    productDescription.innerText = productUI[0].description;
    price.innerText = productUI[0].price
    price1.innerText = productUI[0].price
    price2.innerText = productUI[0].price

    pros.innerHTML = "";
    productUI[0].pros.map((data)=>{
        const listNode = document.createElement("li");
        listNode.innerText = data;
        pros.appendChild(listNode);
    })
    cons.innerHTML = "";
    productUI[0].cons.map((data)=>{
        const listNode = document.createElement("li");
        listNode.innerText = data;
        cons.appendChild(listNode);
    })
});



