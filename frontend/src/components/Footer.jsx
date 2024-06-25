export default function Footer() {

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
                    <p><a href="#">Dobrodošli na Našu Početnu Stranicu</a></p>
                    <p><a href="#">Pretražite Našu Celu Ponudu</a></p>
                    <p><a href="#">Upoznaj se sa Uslovima Korišćenja</a></p>
                </u>
            </div>
            <div className="mb-10 col-span-3">
                <h1 className="mb-2 font-medium">ZAPRATI NAS</h1>
                <p class="mb-2">Zapratite nas na društvenim mrežama za ekskluzivne sadržaje i najnovije informacije</p>
                <u className="flex gap-2">
                    <a href="#">Facebook</a>
                    <a href="#">Tiktok</a>
                    <a href="#">Instagram</a>
                </u>
            </div>
            <div className="mb-5 col-span-3">
                <h1 className="mb-2 font-medium">NEWSLETTER</h1>
                <p class="mb-4">Budite prvi koji će saznati o najnovijim trendovima i ekskluzivnim ponudama</p>
                <div class="flex items-center left-[-10px]">
                    <input type="mail" name="email" class="rounded-md bg-white border focus:outline-none w-full h-[54px] px-4 py-2" placeholder="Email Adresa" />
                    <button class="rounded-lg py-2 px-5 h-[54px] text-2xl bg-rose-500 ms-[-10px] text-white">→</button>
                </div>
            </div>
        </footer>
    )
}
