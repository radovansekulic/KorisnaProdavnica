import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const email = useRef(null);

    const handleClick = async () => {
        const formData = new FormData();
        formData.append('email', email.current.value);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/email', formData);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Greška prilikom slanja zahtjeva:', error);
        }
        setIsOpen(false);
        localStorage.setItem('popupClosed', 'true');
        closePopup();
    }

    useEffect(() => {
        const isPopupClosed = localStorage.getItem('popupClosed');
        if (!isPopupClosed) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 4000); // Prikaz popupa nakon 4 sekunde

            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setIsOpen(false);
        localStorage.setItem('popupClosed', 'true');
    };

    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
                        <h2 className="text-2xl font-bold mb-4">NEWSLETTER</h2>
                        <p className="mb-4">Budite prvi koji će saznati o najnovijim trendovima i ekskluzivnim ponudama</p>
                        <div className="flex items-center left-[-10px] mb-10">
                            <input type="mail" ref={email} name="email" className="rounded-md bg-white border focus:outline-none w-full h-[54px] px-4 py-2" placeholder="Email Adresa" />
                            <button onClick={handleClick} className="rounded-lg py-2 px-5 h-[54px] text-2xl bg-rose-500 ms-[-10px] text-white">→</button>
                        </div>
                        <button
                            className="float-right bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={closePopup}>
                            Zatvori
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
