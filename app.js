function generateID() {
    let userFirstName = document.getElementById("firstName").value;
    let userLastName = document.getElementById('lastName').value;
    let userAge = document.getElementById('age').value;
    let userPhoneNumber = document.getElementById('phoneNumber').value;
    let userAddress = document.getElementById('address').value;
    console.log(userFirstName);
    document.getElementById("userFirstName").innerHTML = userFirstName;
    document.getElementById("userLastName").innerHTML = userLastName;
    document.getElementById("userAge").innerHTML = userAge;
    document.getElementById("userPhoneNumber").innerHTML = userPhoneNumber;
    document.getElementById("userAddress").innerHTML = userAddress;

}
