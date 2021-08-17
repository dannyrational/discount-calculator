const discountCalculator = (price, discountPercentage) => {
    let discountAmount = price * (discountPercentage / 100);
    let priceWithDiscount = price - discountAmount;

    return priceWithDiscount
}

function priceDiscountOutput() {
    const inputPrice = document.querySelector('#inputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.querySelector('#inputDiscount');
    const discountValue = inputDiscount.value;

    //Price with Savings Applied
    let priceWithDiscount = discountCalculator(priceValue, discountValue);
    priceWithDiscount = priceWithDiscount.toFixed(2)

    document.querySelector('#resultPrice').innerHTML = priceWithDiscount;

    //Savings Total
    let savings = priceValue - priceWithDiscount;
    savings = savings.toFixed(2)

    document.querySelector('#resultSavings').innerHTML = savings
}