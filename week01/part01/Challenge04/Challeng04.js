// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

//calculate Tip
const calculateTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2

// print result
const printResult = (bill) => {
    const tip = calculateTip(bill)
    const total = bill + tip
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`)
}

// test with 275, 40, 430
const bills = [275, 40, 430]
bills.forEach(bill => {
    printResult(bill)
});