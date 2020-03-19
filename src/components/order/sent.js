import React from 'react'

class OrderSent extends React.Component {
    render () {
        return (
            <div class="web__line">
                <div class="web__container">
                    <h1>Order sent</h1>
                    <div class="in-user-text">
                        <p> Order number 1579302653 has been sent, thank you for your purchase. We will contact you about next order status. <br /><br /> <a href="http://127.0.0.1:8000/order-detail/pPz1xA70wRvztx37MeWnxvMyynI3fqBA9VKwOJzgfF6ScDXcT7">Track</a> the status of your order. <br />  <br />  <br /> </p>
                    </div>
                    <div class="in-action">
                        <div class="in-action__left">
                            <a href="http://127.0.0.1:8000/" class="btn in-action__btn">
                            Back to store
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderSent;
