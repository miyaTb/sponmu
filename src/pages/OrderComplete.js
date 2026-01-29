import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/OrderComplete.css';

const OrderComplete = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="order-complete">
            <div className="order-complete__container">
                <div className="order-complete__image">
                    {/* お礼のイラスト画像 */}
                </div>
                <p className="order-complete__message">
                    ご注文確認のメールをお客様のメールアドレスに送りましたので、ご確認ください。
                </p>
                <button 
                    className="order-complete__button"
                    onClick={handleBackToHome}
                >
                    ホームへ戻る
                </button>
            </div>
        </div>
    );
};

export default OrderComplete;