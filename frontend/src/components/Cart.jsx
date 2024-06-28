import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Cart({ product }) {

    const fullName = useRef(null);
    const phone = useRef(null);
    const adress = useRef(null);
    const email = useRef(null);

    const [isHidden, setIsHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [orderMessage, setOrderMessage] = useState('');

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const calculateTotalPrice = () => {
        let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
        totalPrice += 450;
        return totalPrice;
    };

    const handleOrder = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/order', {
                product: JSON.stringify(cartItems),
                name: fullName.current.value,
                phone: phone.current.value,
                adress: adress.current.value,
                email: email.current.value,
                price: calculateTotalPrice()
            });
            console.log('Order response:', response.data);
            // Očistite korpu nakon uspešnog slanja porudžbine
            setCartItems([]);
            setOrderMessage(response.data.message);
        } catch (error) {
            console.error('There was an error placing the order!', error);
        }
    };

    const showForm = () => {
        setIsHidden(!isHidden);
        setCartItems([...cartItems, product]);
    };

    const closeForm = () => {
        setIsHidden(!isHidden);
    }

    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    return (
        <>
            <div>
                <button onClick={showForm} className='bg-rose-500 w-full mb-20 text-white rounded-3xl cursor-pointer p-4 pe-10 flex items-center justify-center gap-2'>
                    <svg width="34" height="34" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 15L15.7201 14.2733C18.4486 14.046 19.0611 13.45 19.3635 10.7289L20 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M5 5H21" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="5" cy="19" r="2" stroke="#fff" strokeWidth="1.5" />
                        <circle cx="16" cy="19" r="2" stroke="#fff" strokeWidth="1.5" />
                        <path d="M7 19L14 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M1 1H1.966C2.91068 1 3.73414 1.62459 3.96326 2.51493L6.93852 14.0765C7.08887 14.6608 6.9602 15.2797 6.58824 15.7616L5.63213 17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    DODAJ U KORPU
                </button>
            </div>
            <div className={isHidden ? 'hidden' : ''}>
                <div className='container mx-auto px-10 md:pt-28 pt-10 border mt-20 rounded-xl bg-[#fff] fixed inset-0 z-50 md:rounded-3xl overflow-auto'>
                    <div className='md:max-w-[500px] mx-auto'>
                        <div className='flex justify-between items-center mb-10'>
                            <h1 className='text-2xl'>Forma Za Poručivanj <span>({cartItems.length})</span></h1>
                            <svg onClick={closeForm} className='cursor-pointer' width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 1L1 15M1 1L15 15" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {orderMessage && (
                            <>
                                <div className="container mx-auto rounded-md p-5 flex items-center justify-between top-5 relative z-10 bg-[#f0fdf4]">
                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 20 20" fill="#4ade80" aria-hidden="true"
                                            className="nz sb axv">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <span>{orderMessage}</span>
                                    </div>
                                </div>
                            </>
                        )}
                        <div>
                            <ul>
                                {cartItems.map((item, index) => (
                                    <li className='flex justify-between gap-5 mb-5 items-center' key={index}>
                                        <img className='w-20 rounded-xl' src={`../public/${item.images.split(" ")[0]}.jpg`} alt="IMG" />
                                        {item.name} - {item.price}
                                        <button className='border p-2 border-[#F43F5E]' onClick={() => removeFromCart(index)}>
                                            <svg width="24" height="24" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5 4.5L16.8803 14.5251C16.7219 17.0864 16.6428 18.3671 16.0008 19.2879C15.6833 19.7431 15.2747 20.1273 14.8007 20.416C13.8421 21 12.559 21 9.99274 21C7.42312 21 6.1383 21 5.17905 20.4149C4.7048 20.1257 4.296 19.7408 3.97868 19.2848C3.33688 18.3626 3.25945 17.0801 3.10461 14.5152L2.5 4.5" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M1 4.5H19M14.0557 4.5L13.3731 3.09173C12.9196 2.15626 12.6928 1.68852 12.3017 1.39681C12.215 1.3321 12.1231 1.27454 12.027 1.2247C11.5939 1 11.0741 1 10.0345 1C8.96883 1 8.43598 1 7.99568 1.23412C7.8981 1.28601 7.80498 1.3459 7.71729 1.41317C7.32164 1.7167 7.10063 2.20155 6.65861 3.17126L6.05292 4.5" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M7.5 15.5L7.5 9.5" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M12.5 15.5L12.5 9.5" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <div>
                                <p className="my-2">Ime I Prezime</p>
                                <input className="rounded-md border w-full h-[50px] px-4 py-2" ref={fullName} name="name" type="text" required />
                            </div>
                            <div>
                                <p className="my-2">Adresa I Mesto</p>
                                <input className="rounded-md border w-full h-[50px] px-4 py-2" ref={adress} name="adress" type="text" required />
                            </div>
                            <div>
                                <p className="my-2">Mobilini Talefon</p>
                                <input className="rounded-md border w-full h-[50px] px-4 py-2" ref={phone} name="phone" type="number" required />
                            </div>
                            <div className="mb-2">
                                <p className="my-2">Email (nije Obavezno)</p>
                                <input className="rounded-md border w-full h-[50px] px-4 py-2" ref={email} name="email" type="email" />
                            </div>
                            <p className="mb-5 mt-10"><b>Troškovi dostave:</b> PostExpress - 450 dinara. Svi proizvodi će biti dostavljeni na
                                vašu adresu uz navedeni iznos. 👇</p>
                            <button onClick={handleOrder} className='bg-rose-500 w-full mb-20 text-white rounded-3xl cursor-pointer p-4 pe-10 flex items-center justify-center gap-2'>
                                PORUČI {calculateTotalPrice()}
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};
