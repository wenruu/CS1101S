//Q1
function make_withdraw(balance, password) {
    const pw = password;
    let attempts = 3;
    function withdraw(amount, pw1) {
        if (attempts <= 0) {
            return "Account disabled";
        } else if (pw1 === pw) {
            attempts = 3;
            if (balance >= amount) {
                balance = balance - amount;
                return balance;
            } else {
                return "Insufficient funds";
            }
        } else {
            attempts = attempts - 1;
            return "Wrong password; no withdraw";
        }
    }
    return withdraw;
}
const acc = make_withdraw(10, "abc");
acc(10, "abcd"); // returns "wrong password, no withdraw"
acc(10, "abcd"); // returns "wrong password, no withdraw"
acc(10, "abcd"); // returns "wrong password, no withdraw"
acc(10, "abc"); // returns "account disabled" even though correct pw

//Q2 draw environment diagram
let commission = 25; // my commission in dollars
    // return a calculator for total price
    // total price = (commission + cost) * (1 + tax_rate)
    function make_price_calculator(tax_rate) {
        function calculator(cost) {
            return (commission + cost) * (1 + tax_rate);
        }
        return calculator;
}
const calc = make_price_calculator(0.07);
commission = 125;
calc(75);

// returns (125 + 75) * (1 + 0.07)

//Q3 draw environment diagram
function curry(f) {
    return x => y => f(x, y);
}
(curry(math_pow))(3)(4);
// returns math_pow(3, 4)

