import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function OrderSent() {
    const orderItems = useSelector( state => state.inCart.items )
    const orderPayment = useSelector( state => state.orderPayment.data )
    const orderShipping = useSelector( state => state.orderShipping.data )
    const orderDataForm = useSelector( state => state.form )

    return (
        <div class="web__line">
            <div class="web__container">
                <h1>Order sent</h1>
                <div class="in-user-text">
                    <p> Order number 1579302653 has been sent, thank you for your purchase. We will contact you about next order status. <br /><br /> <a href="http://127.0.0.1:8000/order-detail/pPz1xA70wRvztx37MeWnxvMyynI3fqBA9VKwOJzgfF6ScDXcT7">Track</a> the status of your order. <br />  <br />  <br /> </p>
                    <p><strong>Cart</strong><br />
                        {JSON.stringify(orderItems)}</p>
                    <p><strong>Shipping</strong><br />
                        {JSON.stringify(orderShipping)}</p>
                    <p><strong>Payment</strong><br />
                        {JSON.stringify(orderPayment)}</p>
                    <p><strong>Form</strong><br />
                        {JSON.stringify(orderDataForm)}</p>

                </div>
                <div class="in-action">
                    <div class="in-action__left">
                        <Link to="/" class="btn in-action__btn">
                            Back to store
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSent;
