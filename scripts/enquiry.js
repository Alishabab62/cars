const productModel = document.getElementById("product-model");
const payBtn = document.getElementById("pay-btn");

let selectedProduct;
let productQuantity;
productModel.addEventListener("change",()=>{
    selectedProduct = productModel.selectedIndex;
});

payBtn.addEventListener("click", (e) => {
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

  // Function to check if the postcode matches the state
  function isPostCodeValid(state, postCode) {
    if (
      (state === "VIC" && (postCode.startsWith("3") || postCode.startsWith("8"))) ||
      (state === "NSW" && (postCode.startsWith("1") || postCode.startsWith("2"))) ||
      (state === "QLD" && (postCode.startsWith("4") || postCode.startsWith("9"))) ||
      (state === "NT" && postCode.startsWith("0")) ||
      (state === "WA" && postCode.startsWith("6")) ||
      (state === "SA" && postCode.startsWith("5")) ||
      (state === "TAS" && postCode.startsWith("7")) ||
      (state === "ACT" && postCode.startsWith("0"))
    ) {
      return true;
    }
    return false;
  }

  let userDetails = {
    fName,
    lName,
    email,
    phone,
    quantity,
    street,
    suburb,
    state,
    postCode,
  };

  if (
    selectedProduct == undefined &&
    quantity <= 0 &&
    fName == "" &&
    lName == "" &&
    email == "" &&
    phone == "" &&
    street == "" &&
    suburb == "" &&
    state == "" &&
    postCode == ""
  ) {
    alert("Please fill in all required fields")
  }
   else if(!isPostCodeValid(state, postCode)) {
    alert("Check the state and postcode combination.");
  }
  else{
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    const id = productModel[selectedProduct].getAttribute("id");
    localStorage.setItem("productId", id);
    window.location.href = "./payment.html";
  }
});

