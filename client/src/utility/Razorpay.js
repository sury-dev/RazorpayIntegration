import axios from 'axios';
class Razor {
    async processPayment(...data) {
        const [
            amount = 1,
            currency = 'INR',
            name = 'Northern Delight',
            description = 'Razorpay Payment',
            callback_url = 'http://localhost:9000/api/pay/paymentVerification',
            // callback_url = '/',
            c_name = 'Anonymous',
            c_email = 'noemail@example.com',
            c_contact = '9999999999',
            theme = '#ffffff',
            key_url = 'http://localhost:9000/api/pay/getKey',
            order_url = 'http://localhost:9000/api/pay/processPayment',
        ] = data;

        const keyData = await axios.get(key_url);
        const key = keyData?.data?.data?.key_id;

        const response = await axios.post(order_url, { amount })
        const order = response.data.data;

        const options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount : Number(amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            name, // This is the company name
            description, // This is the description of the payment
            order_id: order.id, // This is the order_id created in the backend
            callback_url, // Your success URL
            prefill: {
                name: c_name,
                email: c_email,
                contact: c_contact
            },
            theme: {
                color: theme
            },
        };
        console.log('Options:', options);


        const rzp = new Razorpay(options);
        rzp.open();
    }
}

const razor = new Razor();

export default razor;

export const { processPayment } = razor;