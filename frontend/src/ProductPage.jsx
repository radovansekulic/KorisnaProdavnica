import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PromotionBar from './components/PromotionBar'
import Header from './components/Header'
import ScrollBar from './components/ScrollBar'
import Footer from './components/Footer'
import Collection from './components/Collection'
import Timer from './components/Timer'
import Cart from './components/Cart';
import Popup from './components/Popup'

export default function ProductPage() {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/product/${id}`)
      .then(response => {
        setProduct(response.data);
        setImages(response.data.images.split(' '));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <PromotionBar />
      <Header />
      <Popup />

      <section className='container mx-auto px-10 mt-5 mb-32 font-[Inter]'>
        <p className='md:hidden mb-3'>POČETNA &#62; AKCIJA &#62; ZA KUĆU</p>
        {product ? (
          <div className='md:flex gap-20 max-w-5xl m-auto'>
            <div className="md:w-1/2 md:block flex gap-2">
              <img className='md:w-full w-[70%] rounded-2xl md:h-[670px] h-[300px] border object-cover' src={`../public/${images[0]}.jpg`} alt="IMG" />
              <div>
                <div className='md:grid grid-cols-2 gap-5 md:my-5'>
                  <img className='rounded-2xl border md:mb-0 mb-2 object-cover' src={`../public/${images[1]}.jpg`} alt="IMG" />
                  <img className='rounded-2xl border md:mb-0 mb-2 object-cover' src={`../public/${images[2]}.jpg`} alt="IMG" />
                </div>
                <img className='rounded-2xl md:h-[670px] border object-cover' src={`../public/${images[3]}.jpg`} alt="IMG" />
              </div>
            </div>
            <div className='md:w-1/2'>
              <p className='text-rose-500 mt-4'>#KORISNAPRODAVNICA</p>
              <p className='font-[Inter] text-2xl'>{product.name}</p>
              <div className='flex items-center gap-5 my-1'>
                <div className='flex gap-2'>
                  <svg width="17" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.79573 1.08313L10.1156 3.74466C10.2956 4.11515 10.7755 4.47053 11.1805 4.53858L13.5727 4.93932C15.1025 5.1964 15.4625 6.31544 14.3601 7.41937L12.5003 9.29454C12.1854 9.6121 12.0129 10.2246 12.1104 10.6631L12.6428 12.9844C13.0628 14.8217 12.0954 15.5325 10.483 14.5722L8.24079 13.2339C7.83583 12.9919 7.16841 12.9919 6.75595 13.2339L4.5137 14.5722C2.90888 15.5325 1.93399 14.8142 2.35394 12.9844L2.88638 10.6631C2.98387 10.2246 2.81139 9.6121 2.49642 9.29454L0.636629 7.41937C-0.45825 6.31544 -0.105789 5.1964 1.42404 4.93932L3.81628 4.53858C4.21373 4.47053 4.69368 4.11515 4.87366 3.74466L6.19352 1.08313C6.91344 -0.361045 8.08331 -0.361045 8.79573 1.08313Z" fill="#FFD700" />
                  </svg>
                  <svg width="17" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.79573 1.08313L10.1156 3.74466C10.2956 4.11515 10.7755 4.47053 11.1805 4.53858L13.5727 4.93932C15.1025 5.1964 15.4625 6.31544 14.3601 7.41937L12.5003 9.29454C12.1854 9.6121 12.0129 10.2246 12.1104 10.6631L12.6428 12.9844C13.0628 14.8217 12.0954 15.5325 10.483 14.5722L8.24079 13.2339C7.83583 12.9919 7.16841 12.9919 6.75595 13.2339L4.5137 14.5722C2.90888 15.5325 1.93399 14.8142 2.35394 12.9844L2.88638 10.6631C2.98387 10.2246 2.81139 9.6121 2.49642 9.29454L0.636629 7.41937C-0.45825 6.31544 -0.105789 5.1964 1.42404 4.93932L3.81628 4.53858C4.21373 4.47053 4.69368 4.11515 4.87366 3.74466L6.19352 1.08313C6.91344 -0.361045 8.08331 -0.361045 8.79573 1.08313Z" fill="#FFD700" />
                  </svg>
                  <svg width="17" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.79573 1.08313L10.1156 3.74466C10.2956 4.11515 10.7755 4.47053 11.1805 4.53858L13.5727 4.93932C15.1025 5.1964 15.4625 6.31544 14.3601 7.41937L12.5003 9.29454C12.1854 9.6121 12.0129 10.2246 12.1104 10.6631L12.6428 12.9844C13.0628 14.8217 12.0954 15.5325 10.483 14.5722L8.24079 13.2339C7.83583 12.9919 7.16841 12.9919 6.75595 13.2339L4.5137 14.5722C2.90888 15.5325 1.93399 14.8142 2.35394 12.9844L2.88638 10.6631C2.98387 10.2246 2.81139 9.6121 2.49642 9.29454L0.636629 7.41937C-0.45825 6.31544 -0.105789 5.1964 1.42404 4.93932L3.81628 4.53858C4.21373 4.47053 4.69368 4.11515 4.87366 3.74466L6.19352 1.08313C6.91344 -0.361045 8.08331 -0.361045 8.79573 1.08313Z" fill="#FFD700" />
                  </svg>
                  <svg width="17" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.79573 1.08313L10.1156 3.74466C10.2956 4.11515 10.7755 4.47053 11.1805 4.53858L13.5727 4.93932C15.1025 5.1964 15.4625 6.31544 14.3601 7.41937L12.5003 9.29454C12.1854 9.6121 12.0129 10.2246 12.1104 10.6631L12.6428 12.9844C13.0628 14.8217 12.0954 15.5325 10.483 14.5722L8.24079 13.2339C7.83583 12.9919 7.16841 12.9919 6.75595 13.2339L4.5137 14.5722C2.90888 15.5325 1.93399 14.8142 2.35394 12.9844L2.88638 10.6631C2.98387 10.2246 2.81139 9.6121 2.49642 9.29454L0.636629 7.41937C-0.45825 6.31544 -0.105789 5.1964 1.42404 4.93932L3.81628 4.53858C4.21373 4.47053 4.69368 4.11515 4.87366 3.74466L6.19352 1.08313C6.91344 -0.361045 8.08331 -0.361045 8.79573 1.08313Z" fill="#FFD700" />
                  </svg>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 1.00002V5.5C8.5 5.93935 8.5 9 8.5 9V11.5C8.5 12.5 8.5 12 8.5 13V13.5V14C8.5 14 8.5 14 8.5 13.75V14C8.09504 13.758 8.16841 13.992 7.75595 14.2339L5.5137 15.5722C3.90888 16.5325 2.93399 15.8142 3.35394 13.9844L3.88638 11.6631C3.98387 11.2246 3.81139 10.6121 3.49642 10.2946L1.63663 8.41941C0.54175 7.31548 0.894211 6.19643 2.42404 5.93935L4.81628 5.53861C5.21373 5.47056 5.69368 5.11519 5.87366 4.74469L7.19352 2.08317C7.91344 0.638991 8 1 8.5 1.00002Z" fill="#FFD700" />
                    <path d="M9.79573 2.08316L11.1156 4.74469C11.2956 5.11518 11.7755 5.47056 12.1805 5.53861L14.5727 5.93935C16.1025 6.19643 16.4625 7.31548 15.3601 8.4194L13.5003 10.2946C13.1854 10.6121 13.0129 11.2246 13.1104 11.6631L13.6428 13.9844C14.0628 15.8218 13.0954 16.5325 11.483 15.5722L9.24079 14.2339C8.83583 13.992 8.16841 13.992 7.75595 14.2339L5.5137 15.5722C3.90888 16.5325 2.93399 15.8142 3.35394 13.9844L3.88638 11.6631C3.98387 11.2246 3.81139 10.6121 3.49642 10.2946L1.63663 8.4194C0.54175 7.31548 0.894211 6.19643 2.42404 5.93935L4.81628 5.53861C5.21373 5.47056 5.69368 5.11518 5.87366 4.74469L7.19352 2.08316C7.91344 0.638986 9.08331 0.638986 9.79573 2.08316Z" stroke="#FFD700" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p>(7)</p>
              </div>
              <div className='flex gap-5 mb-10'>
                <p className='text-3xl text-[#2D2D2D]'>{product.price}</p><p className='text-3xl'><s>{product.false_price}RSD</s></p>
                <p className='bg-[#E1FF3E] text-[#2D2D2D] px-2 rounded-full h-[70%]'>-40%</p>
              </div>
              <Cart product={product} />
              <Timer />
              <div className='bg-gray-100 p-5 mt-20 mb-12'>
                <h2 className='flex gap-2 mb-4 items-center font-semibold'>
                  <svg width="27" height="29" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 1V3M10 1V3M5 1V3" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.5 9C1.5 5.70017 1.5 4.05025 2.52513 3.02513C3.55025 2 5.20017 2 8.5 2H11.5C14.7998 2 16.4497 2 17.4749 3.02513C18.5 4.05025 18.5 5.70017 18.5 9V14C18.5 17.2998 18.5 18.9497 17.4749 19.9749C16.4497 21 14.7998 21 11.5 21H8.5C5.20017 21 3.55025 21 2.52513 19.9749C1.5 18.9497 1.5 17.2998 1.5 14V9Z" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 14H10M6 9H14" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {product.name}
                </h2>
                <p className='font-normal'>{product.description}</p>
              </div>
              <div className='mb-7'>
                <div className='p-5 border border-[#3B3933] rounded-2xl'>
                  <div className='flex gap-5 items-center'>
                    <img className='rounded-full h-10' src={`../public/TPDNE1.jpg`} alt="IMG" />
                    <div>
                      <p>Tamara Simić</p>
                      <div className='flex gap-2'>
                        <svg width="17" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.79573 1.08313L10.1156 3.74466C10.2956 4.11515 10.7755 4.47053 11.1805 4.53858L13.5727 4.93932C15.1025 5.1964 15.4625 6.31544 14.3601 7.41937L12.5003 9.29454C12.1854 9.6121 12.0129 10.2246 12.1104 10.6631L12.6428 12.9844C13.0628 14.8217 12.0954 15.5325 10.483 14.5722L8.24079 13.2339C7.83583 12.9919 7.16841 12.9919 6.75595 13.2339L4.5137 14.5722C2.90888 15.5325 1.93399 14.8142 2.35394 12.9844L2.88638 10.6631C2.98387 10.2246 2.81139 9.6121 2.49642 9.29454L0.636629 7.41937C-0.45825 6.31544 -0.105789 5.1964 1.42404 4.93932L3.81628 4.53858C4.21373 4.47053 4.69368 4.11515 4.87366 3.74466L6.19352 1.08313C6.91344 -0.361045 8.08331 -0.361045 8.79573 1.08313Z" fill="#FFD700" />
                        </svg>
                        <svg width="17" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.79573 1.08313L10.1156 3.74466C10.2956 4.11515 10.7755 4.47053 11.1805 4.53858L13.5727 4.93932C15.1025 5.1964 15.4625 6.31544 14.3601 7.41937L12.5003 9.29454C12.1854 9.6121 12.0129 10.2246 12.1104 10.6631L12.6428 12.9844C13.0628 14.8217 12.0954 15.5325 10.483 14.5722L8.24079 13.2339C7.83583 12.9919 7.16841 12.9919 6.75595 13.2339L4.5137 14.5722C2.90888 15.5325 1.93399 14.8142 2.35394 12.9844L2.88638 10.6631C2.98387 10.2246 2.81139 9.6121 2.49642 9.29454L0.636629 7.41937C-0.45825 6.31544 -0.105789 5.1964 1.42404 4.93932L3.81628 4.53858C4.21373 4.47053 4.69368 4.11515 4.87366 3.74466L6.19352 1.08313C6.91344 -0.361045 8.08331 -0.361045 8.79573 1.08313Z" fill="#FFD700" />
                        </svg>
                        <svg width="17" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.79573 1.08313L10.1156 3.74466C10.2956 4.11515 10.7755 4.47053 11.1805 4.53858L13.5727 4.93932C15.1025 5.1964 15.4625 6.31544 14.3601 7.41937L12.5003 9.29454C12.1854 9.6121 12.0129 10.2246 12.1104 10.6631L12.6428 12.9844C13.0628 14.8217 12.0954 15.5325 10.483 14.5722L8.24079 13.2339C7.83583 12.9919 7.16841 12.9919 6.75595 13.2339L4.5137 14.5722C2.90888 15.5325 1.93399 14.8142 2.35394 12.9844L2.88638 10.6631C2.98387 10.2246 2.81139 9.6121 2.49642 9.29454L0.636629 7.41937C-0.45825 6.31544 -0.105789 5.1964 1.42404 4.93932L3.81628 4.53858C4.21373 4.47053 4.69368 4.11515 4.87366 3.74466L6.19352 1.08313C6.91344 -0.361045 8.08331 -0.361045 8.79573 1.08313Z" fill="#FFD700" />
                        </svg>
                        <svg width="17" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.79573 1.08313L10.1156 3.74466C10.2956 4.11515 10.7755 4.47053 11.1805 4.53858L13.5727 4.93932C15.1025 5.1964 15.4625 6.31544 14.3601 7.41937L12.5003 9.29454C12.1854 9.6121 12.0129 10.2246 12.1104 10.6631L12.6428 12.9844C13.0628 14.8217 12.0954 15.5325 10.483 14.5722L8.24079 13.2339C7.83583 12.9919 7.16841 12.9919 6.75595 13.2339L4.5137 14.5722C2.90888 15.5325 1.93399 14.8142 2.35394 12.9844L2.88638 10.6631C2.98387 10.2246 2.81139 9.6121 2.49642 9.29454L0.636629 7.41937C-0.45825 6.31544 -0.105789 5.1964 1.42404 4.93932L3.81628 4.53858C4.21373 4.47053 4.69368 4.11515 4.87366 3.74466L6.19352 1.08313C6.91344 -0.361045 8.08331 -0.361045 8.79573 1.08313Z" fill="#FFD700" />
                        </svg>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.5 1.00002V5.5C8.5 5.93935 8.5 9 8.5 9V11.5C8.5 12.5 8.5 12 8.5 13V13.5V14C8.5 14 8.5 14 8.5 13.75V14C8.09504 13.758 8.16841 13.992 7.75595 14.2339L5.5137 15.5722C3.90888 16.5325 2.93399 15.8142 3.35394 13.9844L3.88638 11.6631C3.98387 11.2246 3.81139 10.6121 3.49642 10.2946L1.63663 8.41941C0.54175 7.31548 0.894211 6.19643 2.42404 5.93935L4.81628 5.53861C5.21373 5.47056 5.69368 5.11519 5.87366 4.74469L7.19352 2.08317C7.91344 0.638991 8 1 8.5 1.00002Z" fill="#FFD700" />
                          <path d="M9.79573 2.08316L11.1156 4.74469C11.2956 5.11518 11.7755 5.47056 12.1805 5.53861L14.5727 5.93935C16.1025 6.19643 16.4625 7.31548 15.3601 8.4194L13.5003 10.2946C13.1854 10.6121 13.0129 11.2246 13.1104 11.6631L13.6428 13.9844C14.0628 15.8218 13.0954 16.5325 11.483 15.5722L9.24079 14.2339C8.83583 13.992 8.16841 13.992 7.75595 14.2339L5.5137 15.5722C3.90888 16.5325 2.93399 15.8142 3.35394 13.9844L3.88638 11.6631C3.98387 11.2246 3.81139 10.6121 3.49642 10.2946L1.63663 8.4194C0.54175 7.31548 0.894211 6.19643 2.42404 5.93935L4.81628 5.53861C5.21373 5.47056 5.69368 5.11518 5.87366 4.74469L7.19352 2.08316C7.91344 0.638986 9.08331 0.638986 9.79573 2.08316Z" stroke="#FFD700" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className='mt-2'>Odličan proizvod, zaista ispunjava očekivanja. Koristimo ga redovno i preporučujem ga svima!</p>
                </div>
              </div>
              <div className='mb-7'>
                <div className='p-5 border border-[#3B3933] rounded-2xl'>
                  <div className='flex gap-5 items-center'>
                    <img className='rounded-full h-10' src={`../public/TPDNE2.jpg`} alt="IMG" />
                    <div>
                      <p>Sofija Nenadić</p>
                      <div className='flex gap-2'>
                        <svg width="17" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.79573 1.08313L10.1156 3.74466C10.2956 4.11515 10.7755 4.47053 11.1805 4.53858L13.5727 4.93932C15.1025 5.1964 15.4625 6.31544 14.3601 7.41937L12.5003 9.29454C12.1854 9.6121 12.0129 10.2246 12.1104 10.6631L12.6428 12.9844C13.0628 14.8217 12.0954 15.5325 10.483 14.5722L8.24079 13.2339C7.83583 12.9919 7.16841 12.9919 6.75595 13.2339L4.5137 14.5722C2.90888 15.5325 1.93399 14.8142 2.35394 12.9844L2.88638 10.6631C2.98387 10.2246 2.81139 9.6121 2.49642 9.29454L0.636629 7.41937C-0.45825 6.31544 -0.105789 5.1964 1.42404 4.93932L3.81628 4.53858C4.21373 4.47053 4.69368 4.11515 4.87366 3.74466L6.19352 1.08313C6.91344 -0.361045 8.08331 -0.361045 8.79573 1.08313Z" fill="#FFD700" />
                        </svg>
                        <svg width="17" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.79573 1.08313L10.1156 3.74466C10.2956 4.11515 10.7755 4.47053 11.1805 4.53858L13.5727 4.93932C15.1025 5.1964 15.4625 6.31544 14.3601 7.41937L12.5003 9.29454C12.1854 9.6121 12.0129 10.2246 12.1104 10.6631L12.6428 12.9844C13.0628 14.8217 12.0954 15.5325 10.483 14.5722L8.24079 13.2339C7.83583 12.9919 7.16841 12.9919 6.75595 13.2339L4.5137 14.5722C2.90888 15.5325 1.93399 14.8142 2.35394 12.9844L2.88638 10.6631C2.98387 10.2246 2.81139 9.6121 2.49642 9.29454L0.636629 7.41937C-0.45825 6.31544 -0.105789 5.1964 1.42404 4.93932L3.81628 4.53858C4.21373 4.47053 4.69368 4.11515 4.87366 3.74466L6.19352 1.08313C6.91344 -0.361045 8.08331 -0.361045 8.79573 1.08313Z" fill="#FFD700" />
                        </svg>
                        <svg width="17" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.79573 1.08313L10.1156 3.74466C10.2956 4.11515 10.7755 4.47053 11.1805 4.53858L13.5727 4.93932C15.1025 5.1964 15.4625 6.31544 14.3601 7.41937L12.5003 9.29454C12.1854 9.6121 12.0129 10.2246 12.1104 10.6631L12.6428 12.9844C13.0628 14.8217 12.0954 15.5325 10.483 14.5722L8.24079 13.2339C7.83583 12.9919 7.16841 12.9919 6.75595 13.2339L4.5137 14.5722C2.90888 15.5325 1.93399 14.8142 2.35394 12.9844L2.88638 10.6631C2.98387 10.2246 2.81139 9.6121 2.49642 9.29454L0.636629 7.41937C-0.45825 6.31544 -0.105789 5.1964 1.42404 4.93932L3.81628 4.53858C4.21373 4.47053 4.69368 4.11515 4.87366 3.74466L6.19352 1.08313C6.91344 -0.361045 8.08331 -0.361045 8.79573 1.08313Z" fill="#FFD700" />
                        </svg>
                        <svg width="17" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.79573 1.08313L10.1156 3.74466C10.2956 4.11515 10.7755 4.47053 11.1805 4.53858L13.5727 4.93932C15.1025 5.1964 15.4625 6.31544 14.3601 7.41937L12.5003 9.29454C12.1854 9.6121 12.0129 10.2246 12.1104 10.6631L12.6428 12.9844C13.0628 14.8217 12.0954 15.5325 10.483 14.5722L8.24079 13.2339C7.83583 12.9919 7.16841 12.9919 6.75595 13.2339L4.5137 14.5722C2.90888 15.5325 1.93399 14.8142 2.35394 12.9844L2.88638 10.6631C2.98387 10.2246 2.81139 9.6121 2.49642 9.29454L0.636629 7.41937C-0.45825 6.31544 -0.105789 5.1964 1.42404 4.93932L3.81628 4.53858C4.21373 4.47053 4.69368 4.11515 4.87366 3.74466L6.19352 1.08313C6.91344 -0.361045 8.08331 -0.361045 8.79573 1.08313Z" fill="#FFD700" />
                        </svg>
                        <svg width="17" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.79573 1.08313L10.1156 3.74466C10.2956 4.11515 10.7755 4.47053 11.1805 4.53858L13.5727 4.93932C15.1025 5.1964 15.4625 6.31544 14.3601 7.41937L12.5003 9.29454C12.1854 9.6121 12.0129 10.2246 12.1104 10.6631L12.6428 12.9844C13.0628 14.8217 12.0954 15.5325 10.483 14.5722L8.24079 13.2339C7.83583 12.9919 7.16841 12.9919 6.75595 13.2339L4.5137 14.5722C2.90888 15.5325 1.93399 14.8142 2.35394 12.9844L2.88638 10.6631C2.98387 10.2246 2.81139 9.6121 2.49642 9.29454L0.636629 7.41937C-0.45825 6.31544 -0.105789 5.1964 1.42404 4.93932L3.81628 4.53858C4.21373 4.47053 4.69368 4.11515 4.87366 3.74466L6.19352 1.08313C6.91344 -0.361045 8.08331 -0.361045 8.79573 1.08313Z" fill="#FFD700" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className='mt-2'>Zaista odličan proizvod koji ispunjava sva očekivanja. Kvalitet je vrhunski i definitivno se isplati!</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>

      <ScrollBar />
      <Collection />
      <Footer />
    </>
  )
}
