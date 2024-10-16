import { redirect, useSearchParams } from "react-router-dom";
import { Result, Button } from "antd";

const CheckoutStatusPage = () => {
    const [searchParams] = useSearchParams();
    const redirectStatus = searchParams.get('redirect_status');

    const renderResult = () => {
        switch (redirectStatus) {
            case 'succeeded':
                return (
                    <Result
                        status='success'
                        title='Payment Successful!'
                        subTitle='Thank you for your purchase! Your payment has been successfully completed.'
                    // extra={[
                    //     <Button type="primary" key='viewOrder'>

                    //     </Button>
                    // ]}
                    />
                )
            case 'failed':
                return (
                    <Result
                        status='error'
                        title='Payment Failed'
                        subTitle='We encountered an issue processing your payment. Please try again or contact the support team.'
                    />
                )
            case 'requires_action':
                return (
                    <Result
                        status='warning'
                        title='Additional Action Required'
                        subTitle='Please complete the authentication step to finalize your payment.'
                    />
                )
            default:
                return (
                    <Result
                        status='info'
                        title='Payment Status'
                        subTitle='Please check your payment details and try again.'
                    />
                )
        }
    }

    return (
        <div className="p-8 bg-white rounded-lg shadow-md">
            {renderResult()}
        </div>
    )
}

export default CheckoutStatusPage;