import React, { useState, useEffect } from 'react';

export default function Timer() {
    const padNumber = (num) => {
        return num.toString().padStart(2, '0');
    };

    const calculateTimeLeft = () => {
        const now = new Date();
        const target = new Date(now);
        target.setDate(now.getDate() + 1);
        target.setHours(15, 47, 0, 0);

        const difference = target - now;

        const days = padNumber(Math.floor(difference / (1000 * 60 * 60 * 24)));
        const hours = padNumber(Math.floor((difference / (1000 * 60 * 60)) % 24));
        const minutes = padNumber(Math.floor((difference / (1000 * 60)) % 60));
        const seconds = padNumber(Math.floor((difference / 1000) % 60));

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="px-10 my-10">
            <h1 className="text-center text-4xl font-bold font-[Inter]">POŽURI AKCIJA TRAJE JOŠ👇</h1>
            <div className="flex justify-between text-[#2D2D2D] mt-5 items-center">
                <div className="bg-[#E1FF3E] w-[20%] rounded-xl text-center py-4 px-1">
                    <p className="text-3xl">{timeLeft.days}</p><span className="text-xs">DAYS</span>
                </div><span className="text-4xl">:</span>
                <div className="bg-[#E1FF3E] w-[20%] rounded-xl text-center py-4 px-1">
                    <p className="text-3xl">{timeLeft.hours}</p><span className="text-xs">HOURS</span>
                </div><span className="text-4xl">:</span>
                <div className="bg-[#E1FF3E] w-[20%] rounded-xl text-center py-4 px-1">
                    <p className="text-3xl">{timeLeft.minutes}</p><span className="text-xs">MIN</span>
                </div><span className="text-4xl">:</span>
                <div className="bg-[#E1FF3E] w-[20%] rounded-xl text-center py-4 px-1">
                    <p className="text-3xl">{timeLeft.seconds}</p><span className="text-xs">SEC</span>
                </div>
            </div>
        </section>
    );
}
