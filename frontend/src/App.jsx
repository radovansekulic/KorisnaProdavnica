import { Splide, SplideSlide } from '@splidejs/react-splide';
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import PromotionBar from "./components/PromotionBar";
import Header from "./components/Header";

// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

export default function App() {
    return (
        <>
            <PromotionBar />
            <Header />

            <section className='container mx-auto mt-2 mb-16 px-5'>
                <Splide className="relative">
                    <SplideSlide>
                        <img className='rounded-md brightness-75 object-cover w-full h-[600px]' src={`../public/IMG2.jpg`} alt="IMG" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='rounded-md brightness-75 object-cover w-full h-[600px]' src={`../public/IMG1.jpg`} alt="IMG" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='rounded-md brightness-75 object-cover w-full h-[600px]' src={`../public/IMG3.jpg`} alt="IMG" />
                    </SplideSlide>
                    <div className="absolute bottom-20 left-10 md:left-20 text-white">
                        <h1 className="text-2xl mb-5">#Korisna Prodavnica</h1>
                        <p className="mb-5 text-xl md:w-2/4">Dobrodošli u Korisnu Prodavnicu <br className="md:hidden" />- Vašu destinaciju za
                            unapređenje Vašeg doma.
                        </p>
                        <a href="/collection">
                            <button className="flex text-white items-center px-4 py-2 bg-[#ED1C24]">Pogledaj Ponudu →</button>
                        </a>
                    </div>
                </Splide>
            </section>

            <Collection />
            <Footer />
        </>
    )
}