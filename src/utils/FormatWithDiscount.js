import FormatMoney from "./FormatMoney";

const PriceWithDiscount = (price,discount) =>{
    
    if(discount === null) return FormatMoney(price)

    const discountValue = price/100 * discount;

    const newPrice = price - discountValue;
    return  Math.round(newPrice) + " ₽."
    
    
}

export default PriceWithDiscount