
    //payment page enhancement


    const id = localStorage.getItem("productId");
    const product = JSON.parse(localStorage.getItem("pro"));
    const productUI = product.filter((product) => product.id == id);
    
    const userDetail = JSON.parse(localStorage.getItem("userDetails"));
    
    document.getElementById("customerFirstName").innerText = userDetail.fName;
    document.getElementById("customerLastName").innerText = userDetail.lName;
    document.getElementById("customerEmail").innerText = userDetail.email;
    document.getElementById("customerPhone").innerText = userDetail.phone;
    
    document.getElementById("selectedProductModel").innerText = productUI[0].model;
    document.getElementById("selectedProductQuantity").innerText = userDetail.quantity;
    document.getElementById("selectedProductPrice").innerText = productUI[0].price;
    document.getElementById("totalPrice").innerText = userDetail.quantity * productUI[0].price;
    
    
     
      const paymentForm = document.getElementById("paymentForm");
    
      paymentForm.addEventListener("submit", (e) => {
        e.preventDefault();
      
        document.getElementById("timer").style.display = "block"
    
        const formData = new FormData(paymentForm);
        const cardType = formData.get("cardType");
        const cardName = formData.get("cardName");
        const cardNumber = formData.get("cardNumber");
        const expiryDate = formData.get("expiryDate");
        const cvv = formData.get("cvv");
      
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        const productId = localStorage.getItem("productId");
        const product = JSON.parse(localStorage.getItem("pro"));
        const productUI = product.filter((product) => product.id == productId);
        const selectedProductModel = productUI[0].model;
        const selectedProductQuantity = userDetails.quantity;
        const selectedProductPrice = productUI[0].price;
        const totalPrice = selectedProductQuantity * selectedProductPrice;
        let dataToSend = {};
        if(userDetails.inputCheck){
          dataToSend = {
            cardType: cardType,
            cardName: cardName,
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvv: cvv,
            customerFirstName: userDetails.fName,
            customerLastName: userDetails.lName,
            customerEmail: userDetails.email,
            customerPhone: userDetails.phone,
            selectedProductModel: selectedProductModel,
            selectedProductQuantity: selectedProductQuantity,
            selectedProductPrice: selectedProductPrice,
            totalPrice: totalPrice,
            street:userDetails.street,
            suburb:userDetails.suburb,
            state:userDetails.state,
            postcode:userDetails.postcode,
            street1:userDetails.street1,
            suburb1:userDetails.suburb1,
            state1:userDetails.state1,
            postcode1:userDetails.postcode1,
          };
        }
        else{
          dataToSend = {
            cardType: cardType,
            cardName: cardName,
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvv: cvv,
            customerFirstName: userDetails.fName,
            customerLastName: userDetails.lName,
            customerEmail: userDetails.email,
            customerPhone: userDetails.phone,
            selectedProductModel: selectedProductModel,
            selectedProductQuantity: selectedProductQuantity,
            selectedProductPrice: selectedProductPrice,
            totalPrice: totalPrice,
            street:userDetails.street,
            suburb:userDetails.suburb,
            state:userDetails.state,
            postcode:userDetails.postcode,
          };
        }
        
      
        const url = "https://mercury.swin.edu.au/it000000/formtest.php";
        fetch(url, {
          method: "POST",
          body: JSON.stringify(dataToSend),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.text();
          })
          .then((data) => {
            console.log("Payment successful:", data);
            startTimer();
            paymentForm.reset();
          })
          .catch((error) => {
            console.error("Payment failed:", error);
          });
      });
      
    
      document.getElementById("cardName").value = `${userDetail.fName} ${userDetail.lName}`;
    
      let timerInterval;
      let secondsLeft = 60;
    
    function startTimer() {
      timerInterval = setInterval(updateTimer, 1000);
    }
    
    function stopTimer() {
      clearInterval(timerInterval);
      document.getElementById("timer").style.display = "none"
    }
    
    function updateTimer() {
      secondsLeft--;
      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").style.display = "none";
        document.getElementById("warning").textContent = "Please submit the payment form.";
        setTimeout(() => {
          window.location.href = "../index.html"
        }, 4000);
      }
      else {
        updateTimerDisplay();
        removeWarning();
      }
    }
    
    function removeWarning() {
      document.getElementById("warning").textContent = "";
    }
    
    function updateTimerDisplay() {
      document.getElementById("timer").textContent = secondsLeft;
    }
    