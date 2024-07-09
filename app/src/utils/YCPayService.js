
let ycPayInstance = null;

export const initializeYCPay = (pubKey, isSandbox) => {
    if (!ycPayInstance) {
        const script = document.createElement('script');
        script.src = 'https://youcanpay.com/js/ycpay.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            ycPayInstance = new window.YCPay(pubKey, {
                formContainer: '#payment-container',
                locale: 'fr',
                isSandbox: isSandbox,
                errorContainer: '#error-container',
            });

            ycPayInstance.renderCreditCardForm();
        };
    }
};

export const executePayment = (tokenId, successCallback, errorCallback) => {
    if (ycPayInstance) {
        ycPayInstance.pay(tokenId)
            .then(successCallback)
            .catch(errorCallback);
    } else {
        console.error("YCPay is not initialized yet.");
    }
};
