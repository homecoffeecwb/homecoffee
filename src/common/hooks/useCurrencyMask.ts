import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export const useCurrencyMask = () => {

    // Create number mask with variable thousands separator and decimal point
    const currencyMask = createNumberMask({
        prefix: 'R$ ',
        suffix: '',
        thousandsSeparatorSymbol: '.',
        decimalSymbol: ',',
        allowDecimal: true,
        decimalLimit: 2,
    });

    return currencyMask
}