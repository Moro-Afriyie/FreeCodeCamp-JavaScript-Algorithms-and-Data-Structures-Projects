function checkCashRegister(price, cash, cid) {
    // multiplied the unit by 100 to make it easier to work with whole numbers
    const currencyUnit = {
            "PENNY": 1,
            "NICKEL": 5,
            "DIME": 10,
            "QUARTER": 25,
            "ONE": 100,
            "FIVE": 500,
            "TEN": 1000,
            "TWENTY": 2000,
            "ONE HUNDRED": 10000
        }
        // multiplied everything by 100 to work with whole numbers
        // calculate  the change(difference between the cash and price of the product)
    let change = cash * 100 - price * 100;
    let changeCheck = change; // save a copy of the change
    let changeArr = [];
    let status = '';

    let cidSum = 0; // stores the sum of all the money in cid
    // filter the cid array so to remove all the currency with zeros
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();

    filteredCid.forEach(elem => {
        let curr = elem[0]; // get the currency denomination
        let currSum = elem[1] * 100; // get the value of the currency
        cidSum += currSum;
        let amount = 0;
        while (change >= currencyUnit[curr] && currSum > 0) {
            amount += currencyUnit[curr];
            change -= currencyUnit[curr];
            currSum -= currencyUnit[curr];
        }
        if (amount !== 0) {
            changeArr.push([curr, amount / 100]);
        }
    });

    if (change > 0) {
        status = 'INSUFFICIENT_FUNDS';
        changeArr = [];
    } else if (change == 0 && changeCheck == cidSum) {
        status = 'CLOSED';
        changeArr = cid;
    } else {
        status = 'OPEN';
    }
    return { 'status': status, 'change': changeArr };
}
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));