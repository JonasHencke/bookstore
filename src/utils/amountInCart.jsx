export default function amountInCart(element, array) {
    const ProductExist = array.find((item) => item.id === element.id);
    return ProductExist.amount
}