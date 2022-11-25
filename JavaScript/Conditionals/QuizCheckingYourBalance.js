var balance = -325.00;
var checkBalance = true;
var isActive = true;

if (checkBalance) {

    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");

    } else if (isActive === true && balance === 0) {
        console.log("Your account is empty");

    } else if (isActive === true && balance < 0) {
        console.log("Your balance is negative. Please contact bank");

    } else if (isActive === false) {
        console.log("Your account is no longer active");

    }

} else {
    console.log("Thank you. Have a nice day!");
}