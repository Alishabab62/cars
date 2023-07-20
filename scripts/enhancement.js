
//enquiry page enhancement

const productModel = document.getElementById("product-model");
const payBtn = document.getElementById("pay-btn");

let selectedProduct;
let productQuantity;
productModel.addEventListener("change",()=>{
    selectedProduct = productModel.selectedIndex;
});
payBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const fName = document.getElementById("fname").value;
    const lName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const quantity = document.getElementById("quantity").value;
    const street = document.getElementById("street").value;
    const suburb = document.getElementById("suburb").value;
    const stateOptions = document.getElementById("state");
    const stateIndex = stateOptions.selectedIndex;
    const state = stateOptions[stateIndex].value;
    const postCode = document.getElementById("postcode").value;
    const street1 = document.getElementById("street1").value;
    const suburb1 = document.getElementById("suburb1").value;
    const stateOptions1 = document.getElementById("state1");
    const stateIndex1 = stateOptions1.selectedIndex;
    const state1 = stateOptions1[stateIndex1].value;
    const postCode1 = document.getElementById("postcode").value;
    const inputCheck = deliveryCheckbox.checked;
    let userDetails ={};
    if(deliveryCheckbox.checked){
         userDetails = {
            fName,
            lName,
            email,
            phone,
            quantity,
            street,
            suburb,
            state,
            postCode,
            street1,
            suburb1,
            state1,
            postCode1,
            inputCheck
        }
    }
    else{
         userDetails = {
            fName,
            lName,
            email,
            phone,
            quantity,
            street,
            suburb,
            state,
            postCode
        }
    }
   
    if(selectedProduct != undefined && quantity >0 && fName != "" && lName != "" && email != "" && phone != ""){
        localStorage.setItem("userDetails",JSON.stringify(userDetails));
        const id = productModel[selectedProduct].getAttribute("id");
        localStorage.setItem("productId",id);
        window.location.href = "./payment.html"
    }
});

    const deliveryCheckbox = document.getElementById("delivery-address");
    const deliveryAddressBlock = document.getElementById("delivery-address-input");

    deliveryCheckbox.addEventListener("change",()=>{
        if(deliveryCheckbox.checked){
            deliveryAddressBlock.style.display = "flex"
        }
    })





