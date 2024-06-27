import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Collection() {

    const { id } = useParams();
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
        <section className="container mx-auto px-10 my-28">
            <h1 className="text-3xl font-medium mb-10">Trenutno Na Akciji</h1>
            <div className="md:grid-cols-4 justify-between grid grid-cols-2 md:gap-x-10 gap-x-2 gap-y-5">
                {products.map((item) => item.id != id && (
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
    )
}