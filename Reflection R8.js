function make_withdraw(balance, password) {
    const pw = password;
    let attempts = 3;
    function withdraw(amount, pw1) {
        if (attempts <= 0) {
            return "Account disabled";
        } else if (pw1 === pw) {
            if (balance >= amount) {
                balance = balance - amount;
                attempts = 3;
                return balance;
            } else {
                attempts = 3;
                return "Insufficient funds";
            }
        } else {
            attempts = attempts - 1;
            return "Wrong password; no withdraw";
        }
    }
    return withdraw;
}

const acc = make_withdraw(100, "my_password");
acc(30, "his_passcode"); // returns "Wrong password; no withdraw"
acc(30, "my_password"); // returns 70
acc(10, "sesame"); // returns "Wrong password; no withdraw"
acc(15, "canola"); // returns "Wrong password; no withdraw"
acc(25, "olive"); // returns "Wrong password; no withdraw"
acc(30, "my_password"); // returns "Account disabled"
acc(30, "his_passcode"); // returns "Account disabled"
