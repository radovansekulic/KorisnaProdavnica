import axios from 'axios';
import { useEffect, useState } from 'react';

import Footer from "./components/Footer";
import Header from "./components/Header";
import PromotionBar from "./components/PromotionBar";

export default function AllProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/collection')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    return (
        <>
            <PromotionBar />
            <Header />

            <section className="container mx-auto px-10 mt-10 mb-28">
                <div className='mb-10 relative'>
                    <img className='w-full h-[350px] brightness-75 object-cover rounded-2xl' src={`../public/ART.jpg`} alt="IMG" />
                    <div className='absolute top-20 md:left-20 left-10 '>
                        <h1 className='text-white md:text-xl mb-5'>POČETNA &#62; AKCIJA &#62; ZA KUĆU</h1>
                        <span className='text-2xl bg-[#E1FF3E] px-2 md:text-3xl text-[#2D2D2D]'>TOTALNA RASPRODAJA</span>
                        <p className='text-white mt-5'>Dobrodošli u Korisnu Prodavnicu <br />Vašu destinaciju za unapređenje Vašeg doma i okoline 🎁 😎</p>
                    </div>
                </div>
                <div className='flex gap-5 mb-5'>
                    <div className='flex items-center cursor-pointer gap-2'>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4H4" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 14H7" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 14L19 14" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13 4L19 4" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 4C4 3.06812 4 2.60218 4.15224 2.23463C4.35523 1.74458 4.74458 1.35523 5.23463 1.15224C5.60218 1 6.06812 1 7 1C7.93188 1 8.39782 1 8.76537 1.15224C9.25542 1.35523 9.64477 1.74458 9.84776 2.23463C10 2.60218 10 3.06812 10 4C10 4.93188 10 5.39782 9.84776 5.76537C9.64477 6.25542 9.25542 6.64477 8.76537 6.84776C8.39782 7 7.93188 7 7 7C6.06812 7 5.60218 7 5.23463 6.84776C4.74458 6.64477 4.35523 6.25542 4.15224 5.76537C4 5.39782 4 4.93188 4 4Z" stroke="#141B34" strokeWidth="1.5" />
                            <path d="M10 14C10 13.0681 10 12.6022 10.1522 12.2346C10.3552 11.7446 10.7446 11.3552 11.2346 11.1522C11.6022 11 12.0681 11 13 11C13.9319 11 14.3978 11 14.7654 11.1522C15.2554 11.3552 15.6448 11.7446 15.8478 12.2346C16 12.6022 16 13.0681 16 14C16 14.9319 16 15.3978 15.8478 15.7654C15.6448 16.2554 15.2554 16.6448 14.7654 16.8478C14.3978 17 13.9319 17 13 17C12.0681 17 11.6022 17 11.2346 16.8478C10.7446 16.6448 10.3552 16.2554 10.1522 15.7654C10 15.3978 10 14.9319 10 14Z" stroke="#141B34" strokeWidth="1.5" />
                        </svg>
                        Filter
                    </div>
                    <div className='flex items-center cursor-pointer gap-2'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 5.67347L14.409 4.18691C15.159 3.39564 15.534 3 16 3C16.466 3 16.841 3.39564 17.591 4.18691L19 5.67347M16 3.08723L16 7.46232C16 9.69579 16 10.8125 15.5532 11.7972C15.1063 12.782 14.2659 13.5173 12.585 14.9881L12 15.5" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 4.5C1 3.27489 1 2.66233 1.23842 2.1944C1.44815 1.78279 1.78279 1.44815 2.1944 1.23842C2.66233 1 3.27489 1 4.5 1C5.72511 1 6.33767 1 6.8056 1.23842C7.21721 1.44815 7.55185 1.78279 7.76158 2.1944C8 2.66233 8 3.27489 8 4.5C8 5.72511 8 6.33767 7.76158 6.8056C7.55185 7.21721 7.21721 7.55185 6.8056 7.76158C6.33767 8 5.72511 8 4.5 8C3.27489 8 2.66233 8 2.1944 7.76158C1.78279 7.55185 1.44815 7.21721 1.23842 6.8056C1 6.33767 1 5.72511 1 4.5Z" stroke="#141B34" strokeWidth="1.5" />
                            <path d="M1 15.5C1 14.2749 1 13.6623 1.23842 13.1944C1.44815 12.7828 1.78279 12.4481 2.1944 12.2384C2.66233 12 3.27489 12 4.5 12C5.72511 12 6.33767 12 6.8056 12.2384C7.21721 12.4481 7.55185 12.7828 7.76158 13.1944C8 13.6623 8 14.2749 8 15.5C8 16.7251 8 17.3377 7.76158 17.8056C7.55185 18.2172 7.21721 18.5519 6.8056 18.7616C6.33767 19 5.72511 19 4.5 19C3.27489 19 2.66233 19 2.1944 18.7616C1.78279 18.5519 1.44815 18.2172 1.23842 17.8056C1 17.3377 1 16.7251 1 15.5Z" stroke="#141B34" strokeWidth="1.5" />
                        </svg>
                        Sort
                    </div>
                </div>
                <div className="md:grid-cols-4 justify-between grid grid-cols-2 md:gap-x-10 gap-x-2 gap-y-5">
                    {products.map((item) => (
                        <a href={`/product/${item.id}`} key={item.id} className="w-full md:text-xl">
                            <img className="rounded-2xl w-full border md:h-[420px] h-[210px] object-cover" src={`../public/${item.images.split(' ')[0]}.jpg`} alt="IMG" />
                            <span className="bg-[#E1FF3E] md:px-5 px-2 h-[50%] relative md:left-5 left-5 bottom-8 md:bottom-10 rounded-full items-center">AKCIJA</span>
                            <p className="font-medium mt-[-20px]">{item.name}</p>
                            <div className="flex gap-x-2 mt-2">
                                <p className="text-lg md:text-xl text-[#2D2D2D]">{item.price}</p>
                                <s className="text-lg md:text-xl">{item.false_price}</s>
                                <span className="bg-[#E1FF3E] px-2 h-[50%] text-sm rounded-full items-center">-40%</span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    )
}