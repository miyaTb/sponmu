import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/NotFound.css';
import ActionButton from '../components/ActionButton';
import notfoundImage from '../assets/notfound.png';

function NotFound() {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    const handleBackToPrevious = () => {
        navigate(-1);
    };

    return (
        <div className="not-found">
            <div className="not-found__left">
                <img src={notfoundImage} alt="404 Not Found" className="not-found__image" />
            </div>
            <div className="not-found__right">
                <h1 className="not-found__title">NOT FOUND</h1>
                <h2 className="not-found__subtitle">ご指定のページが見つかりません</h2>
                <p className="not-found__message">
                    ページが見つかりません<br />
                    お探しのページは存在しません。
                </p>
                <div className="not-found__actions">
                    <ActionButton variant="gray" onClick={handleBackToPrevious} >
                        前のページに戻る
                    </ActionButton>
                    <ActionButton onClick={handleBackToHome}>
                        トップページに戻る
                    </ActionButton>
                </div>
            </div>
        </div>
    );
}

export default NotFound;