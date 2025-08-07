import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './css/CartForm.css';

const CartForm = () => {
    const navigate = useNavigate();
    // 統合されたフォーム状態
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        furigana: '',
        building: '',
        phone: '',
        deliveryDate: '',
        zipcode: '',
        prefecture: '',
        city: '',
        town: '',
        paymentMethod: ''
    });
    
    // UI状態
    const [uiState, setUiState] = useState({
        showPaymentOptions: false,
        isSubmitting: false
    });
    
    // エラー状態
    const [errors, setErrors] = useState({
        form: {},
        zipcode: ''
    });
    
    // クーポン状態
    const [coupon, setCoupon] = useState({
        code: '',
        discount: 0
    });

    const prefectures = [
        '', '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
        '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
        '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県',
        '岐阜県', '静岡県', '愛知県', '三重県',
        '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
        '鳥取県', '島根県', '岡山県', '広島県', '山口県',
        '徳島県', '香川県', '愛媛県', '高知県',
        '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
    ];

    const handleZipSearch = async () => {
        const cleanZip = formData.zipcode.replace('-', '').trim();
        if (!/^[0-9]{7}$/.test(cleanZip)) {
            setErrors(prev => ({ ...prev, zipcode: '7桁の郵便番号を入力してください' }));
            return;
        }

        try {
            const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cleanZip}`);
            const data = await res.json();
            
            if (data.results) {
                const { address1, address2, address3 } = data.results[0];
                setFormData(prev => ({
                    ...prev,
                    prefecture: address1,
                    city: address2,
                    town: address3
                }));
                setErrors(prev => ({ ...prev, zipcode: '' }));
            } else {
                setErrors(prev => ({ ...prev, zipcode: '住所が見つかりませんでした' }));
                setFormData(prev => ({
                    ...prev,
                    prefecture: '',
                    city: '',
                    town: ''
                }));
            }
        } catch {
            setErrors(prev => ({ ...prev, zipcode: '通信エラーが発生しました' }));
            setFormData(prev => ({
                ...prev,
                prefecture: '',
                city: '',
                town: ''
            }));
        }
    };

    const handlePaymentToggle = () => {
        setUiState(prev => ({ ...prev, showPaymentOptions: !prev.showPaymentOptions }));
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors.form[field]) {
            setErrors(prev => ({ 
                ...prev, 
                form: { ...prev.form, [field]: '' }
            }));
        }
        // 支払い方法選択時はアコーディオンを閉じる
        if (field === 'paymentMethod') {
            setUiState(prev => ({ ...prev, showPaymentOptions: false }));
        }
    };

    const validateForm = () => {
        const formErrors = {};
        
        // メールアドレス
        if (!formData.email) {
            formErrors.email = 'メールアドレスは必須です';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = '有効なメールアドレスを入力してください';
        }
        
        // 基本情報
        if (!formData.name) formErrors.name = 'お名前は必須です';
        if (!formData.furigana) formErrors.furigana = 'フリガナは必須です';
        if (!formData.phone) formErrors.phone = '電話番号は必須です';
        
        // 住所情報
        if (!formData.zipcode) formErrors.zipcode = '郵便番号は必須です';
        if (!formData.prefecture) formErrors.prefecture = '都道府県を選択してください';
        if (!formData.city) formErrors.city = '市区町村・番地は必須です';
        
        // 支払い方法
        if (!formData.paymentMethod) formErrors.payment = 'お支払い方法を選択してください';
        
        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(prev => ({ ...prev, form: formErrors }));
            return;
        }
        
        setUiState(prev => ({ ...prev, isSubmitting: true }));
        
        try {
            const orderData = {
                ...formData,
                couponCode: coupon.code || null,
                discount: coupon.discount
            };
            
            console.log('注文データ:', orderData);
            
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // 注文確定ページに移動
            navigate('/order/complete');
            
        } catch (error) {
            console.error('注文処理エラー:', error);
            alert('注文処理中にエラーが発生しました。もう一度お試しください。');
        } finally {
            setUiState(prev => ({ ...prev, isSubmitting: false }));
        }
    };

    const handleCouponApply = () => {
        const code = coupon.code.toLowerCase();
        let newDiscount = 0;
        let message = '';
        
        if (code === 'welcome10') {
            newDiscount = 100;
            message = 'クーポンが適用されました！100円割引';
        } else if (code === 'first20') {
            newDiscount = 200;
            message = 'クーポンが適用されました！200円割引';
        } else {
            message = '無効なクーポンコードです';
        }
        
        setCoupon(prev => ({ ...prev, discount: newDiscount }));
        alert(message);
    };

    const { cartItems, calculateSubtotal, calculateTotal } = useCart();
    const subtotal = calculateSubtotal();
    const shipping = 300;
    const total = subtotal + shipping - coupon.discount;

    return (
        <div className="cart-form">
            <h1 className="cart-form__title">CART</h1>
            <p className="cart-form__subtitle">購入</p>
            <div className="cart-form__main">
                <form className="cart-form__form" onSubmit={handleSubmit}>
            <label className="cart-form__label">メールアドレス
                <input 
                    className="cart-form__input" 
                    type="email" 
                    placeholder="example@example.com" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                />
                {errors.form.email && <span className="cart-form__error">{errors.form.email}</span>}
            </label>

            <fieldset className="cart-form__fieldset">
                <legend className="cart-form__legend">購入者</legend>

                <label className="cart-form__label">お名前
                <input 
                    className="cart-form__input" 
                    type="text" 
                    placeholder="姓名を入力してください" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                />
                {errors.form.name && <span className="cart-form__error">{errors.form.name}</span>}
                </label>
                <label className="cart-form__label">フリガナ
                <input 
                    className="cart-form__input" 
                    type="text" 
                    placeholder="カタカナで入力してください" 
                    value={formData.furigana}
                    onChange={(e) => handleInputChange('furigana', e.target.value)}
                />
                {errors.form.furigana && <span className="cart-form__error">{errors.form.furigana}</span>}
                </label>

                <label className="cart-form__label">郵便番号
                <div className="cart-form__zipcode-group">
                    <input
                    className="cart-form__input cart-form__input--zipcode"
                    type="text"
                    placeholder="123-4567"
                    value={formData.zipcode}
                    onChange={(e) => handleInputChange('zipcode', e.target.value)}
                    />
                    <button
                    className="cart-form__button cart-form__button--search"
                    type="button"
                    onClick={handleZipSearch}
                    >検索</button>
                </div>
                {errors.zipcode && <span className="cart-form__error">{errors.zipcode}</span>}
                {errors.form.zipcode && <span className="cart-form__error">{errors.form.zipcode}</span>}
                </label>

                <label className="cart-form__label">都道府県
                <select
                    className={`cart-form__select ${!formData.prefecture ? 'cart-form__select--placeholder' : ''}`}
                    value={formData.prefecture}
                    onChange={(e) => handleInputChange('prefecture', e.target.value)}
                >
                    {prefectures.map((pref, i) => (
                    <option key={i} value={pref}>{pref || '都道府県を選択してください'}</option>
                    ))}
                </select>
                {errors.form.prefecture && <span className="cart-form__error">{errors.form.prefecture}</span>}
                </label>

                <label className="cart-form__label">市区町村・番地
                <input
                    className="cart-form__input"
                    value={formData.city + formData.town}
                    onChange={(e) => {
                    handleInputChange('city', e.target.value);
                    handleInputChange('town', '');
                    }}
                />
                {errors.form.city && <span className="cart-form__error">{errors.form.city}</span>}
                </label>

                <label className="cart-form__label">建物名・部屋
                <input 
                    className="cart-form__input" 
                    type="text" 
                    placeholder="マンション名・部屋番号" 
                    value={formData.building}
                    onChange={(e) => handleInputChange('building', e.target.value)}
                />
                </label>
                <label className="cart-form__label">電話番号
                <input 
                    className="cart-form__input" 
                    type="text" 
                    placeholder="090-1234-5678" 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                />
                {errors.form.phone && <span className="cart-form__error">{errors.form.phone}</span>}
                </label>
            </fieldset>

            <label className="cart-form__label">配送希望日
                <select 
                    className={`cart-form__select ${!formData.deliveryDate ? 'cart-form__select--placeholder' : ''}`}
                    value={formData.deliveryDate}
                    onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                >
                <option value="">希望日を選択してください</option>
                <option value="tomorrow">明日</option>
                <option value="2days">2日後</option>
                <option value="3days">3日後</option>
                <option value="week">1週間後</option>
                </select>
            </label>

            <fieldset className="cart-form__fieldset">
                <legend className="cart-form__legend">お支払い情報の入力</legend>
                
                <div className="cart-form__payment-fieldset">
                    <button 
                        type="button"
                        className={`cart-form__payment-toggle ${uiState.showPaymentOptions ? 'open' : ''}`}
                        onClick={handlePaymentToggle}
                    >
                        <span>{formData.paymentMethod || 'お支払い方法を選択'}</span>
                    </button>

                {uiState.showPaymentOptions && (
                <div className="cart-form__payment-options">
                    <label className="cart-form__radio">
                    <input
                        type="radio"
                        name="payment"
                        checked={formData.paymentMethod === 'コンビニ振込'}
                        onChange={() => handleInputChange('paymentMethod', 'コンビニ振込')}
                    /> コンビニ振込
                    </label>
                    <label className="cart-form__radio">
                    <input
                        type="radio"
                        name="payment"
                        checked={formData.paymentMethod === 'クレジットカード'}
                        onChange={() => handleInputChange('paymentMethod', 'クレジットカード')}
                    /> クレジットカード
                    </label>
                </div>
                )}
                    {errors.form.payment && <span className="cart-form__error">{errors.form.payment}</span>}
                </div>
            </fieldset>

            <button 
                className="cart-form__submit" 
                type="submit"
                disabled={uiState.isSubmitting}
            >
                {uiState.isSubmitting ? '処理中...' : '注文を確定する'}
            </button>
                </form>
                
                <div className="cart-form__sidebar">
            <div className="cart-form__item-list">
            {cartItems.map((item) => (
                <div key={item.id} className="cart-form__item">
                <div className="cart-form__item-content">
                    <div className="cart-form__item-image" />
                    <div className="cart-form__item-details">
                        <p className="cart-form__item-name">{item.name}</p>
                        <p className="cart-form__item-price">¥{item.taxIncludedPrice.toLocaleString()}(税込) x {item.quantity}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>

            <div className="cart-form__coupon">
            <input 
                className="cart-form__input" 
                type="text" 
                placeholder="クーポンコード" 
                value={coupon.code}
                onChange={(e) => setCoupon(prev => ({ ...prev, code: e.target.value }))}
            />
            <button 
                className="cart-form__button" 
                type="button"
                onClick={handleCouponApply}
            >
                適用
            </button>
            </div>

            <div className="cart-form__summary">
            <p>小計金額　¥{subtotal.toLocaleString()}</p>
            <p>配送料　　¥{shipping.toLocaleString()}</p>
            {coupon.discount > 0 && <p>割引　　　-¥{coupon.discount.toLocaleString()}</p>}
            <div className="cart-form__total-row">
                <span className="cart-form__total-label">合計</span>
                <span className="cart-form__total-amount">¥{total.toLocaleString()}（税込）</span>
            </div>
            <p className="cart-form__note">（内消費税：¥{Math.floor(total * 0.1).toLocaleString()}円）</p>
            </div>
                </div>
            </div>
        </div>
    );
};

export default CartForm;
