import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/OrderComplete.css';
import thankyouImage from '../assets/thankyou.png';
import ActionButton from '../components/ActionButton';


const OrderComplete = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="order-complete">
            <div className="order-complete__container">
                <h1 className="order-complete__title">THANK YOU!</h1>
                <h2 className="order-complete__subtitle">ご注文ありがとうございます！</h2>
                <div className="order-complete__image">
                    <img src={thankyouImage} alt="ご注文ありがとうございます"></img>
                </div>
                <ActionButton onClick={handleBackToHome}>
                トップページに戻る
                </ActionButton>
                <p className="order-complete__message">
                    ご注文確認のメールをお客様のメールアドレスに送りましたので、ご確認ください。
                </p>
            </div>
        </div>
    );
};

export default OrderComplete;