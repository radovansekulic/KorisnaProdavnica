import { useRef, useState } from 'react';
import axios from 'axios';

export default function Footer() {

    const [message, setMessage] = useState('');
    const email = useRef(null);

    const handleClick = async () => {
        const formData = new FormData();
        formData.append('email', email.current.value);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/email', formData);
            console.log('Response:', response.data);
            setMessage(response.data.message);
        } catch (error) {
            console.error('Greška prilikom slanja zahtjeva:', error);
        }
    }

    return (
        <footer className="bg-gray-100 md:grid grid-cols-12 gap-10 m-5 md:px-10 px-5 py-10 rounded-lg font-[Inter]">
            <div className="mb-10 col-span-3">
                <h1 className="text-rose-500 font-bold mb-2">#KORISNAPRODAVNICA</h1>
                <p>Istražite našu široku paletu kvalitetnih proizvoda i pronađite savršeni izbor
                    za svaku priliku, sve udobno iz svoje fotelje.</p>
            </div>
            <div className="mb-10 col-span-3">
                <h1 className="mb-2 font-medium">NAVIGACIJA</h1>
                <u>
                    <p><a href="/collection">Dobrodošli na Našu Početnu Stranicu</a></p>
                    <p><a href="/collection">Pretražite Našu Celu Ponudu</a></p>
                    <p><a href="/collection">Upoznaj se sa Uslovima Korišćenja</a></p>
                </u>
            </div>
            <div className="mb-10 col-span-3">
                <h1 className="mb-2 font-medium">ZAPRATI NAS</h1>
                <p className="mb-2">Zapratite nas na društvenim mrežama za ekskluzivne sadržaje i najnovije informacije</p>
                <u className="flex gap-2">
                    <a href="/collection">Facebook</a>
                    <a href="/collection">Tiktok</a>
                    <a href="/collection">Instagram</a>
                </u>
            </div>
            {message && (
                <>
                    <div className="container mx-auto rounded-md p-5 my-5 flex items-center justify-between border borer-[#f0fdf4] bg-[#f0fdf4]">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 20 20" fill="#4ade80" aria-hidden="true"
                                className="nz sb axv">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>{message}</span>
                        </div>
                    </div>
                </>
            )}
            <div className="mb-5 col-span-3">
                <h1 className="mb-2 font-medium">NEWSLETTER</h1>
                <p className="mb-4">Budite prvi koji će saznati o najnovijim trendovima i ekskluzivnim ponudama</p>
                <div className="flex items-center left-[-10px]">
                    <input type="mail" ref={email} name="email" className="rounded-md bg-white border focus:outline-none w-full h-[54px] px-4 py-2" placeholder="Email Adresa" />
                    <button onClick={handleClick} className="rounded-lg py-2 px-5 h-[54px] text-2xl bg-rose-500 ms-[-10px] text-white">→</button>
                </div>
            </div>
        </footer>
    )
}
