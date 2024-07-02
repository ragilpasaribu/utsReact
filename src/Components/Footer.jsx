export default function Footer(){
    const nama = "Ragil Sadewa Pasaribu"
    return(
        <footer className="w-full h-10 bg-yellow-500 shadow-inner flex justify-center items-center bottom-0 font-mono font-bold text-teal-50 fixed">
            <marquee>
                <p>Copy Right By: {nama}</p>
            </marquee>
        </footer>
    )
}