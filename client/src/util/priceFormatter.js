export default function priceFormatter(price) {
    return price.toLocaleString('en-US', {
        minimumFractionDigits: '2',
        maximumFractionDigits: '2'
    });
}