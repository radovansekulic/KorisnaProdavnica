import { useEffect, useState } from "react"

export default function PromotionBar() {

    const [htmlText, sethtmlText] = useState(`
            <span style="margin: 10px 0 10px 10px; position: relative; left: -100%; font-family: Inter"> Besplatna dostava za iznose veće od 2000RSD </span>
            <span style="margin: 10px 0 10px 10px; position: relative; left: -100%; font-family: Inter"> Besplatna dostava za iznose veće od 2000RSD </span>
            <span style="margin: 10px 0 10px 10px; position: relative; left: -100%; font-family: Inter"> Besplatna dostava za iznose veće od 2000RSD </span>
            <span style="margin: 10px 0 10px 10px; position: relative; left: -100%; font-family: Inter"> Besplatna dostava za iznose veće od 2000RSD </span>
            <span style="margin: 10px 0 10px 10px; position: relative; left: -100%; font-family: Inter"> Besplatna dostava za iznose veće od 2000RSD </span>
        `);

    useEffect(() => {
        const interval = setInterval(() => {
            sethtmlText(prevContent => prevContent + `
                <span style="margin: 10px 0 10px 10px; position: relative; left: -100%; font-family: Inter"> Besplatna dostava za iznose veće od 2000RSD </span>
            `);
        }, 100);

        return () => clearInterval(interval);
    })

    return (
        <marquee className="bg-[#E1FF3E] text-[#2D2D2D] py-2" direction="left" dangerouslySetInnerHTML={{ __html: htmlText }}></marquee>
    )
}
