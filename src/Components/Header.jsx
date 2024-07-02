import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header className="bg-yellow-500 w-full h-20 flex justify-between shadow-sm sticky top-0 z-10 px-10 items-center cursor-pointer">
            <h1 className=" font-bold font-sans text-teal-50 text-2xl shadow-lg">FOR-EVER-EVER</h1>
            <ul className="flex justify-evenly gap-10 font-mono text-teal-50 font-bold">
                <Link to="/"><li className="li-item">HOME</li></Link>
                <Link to="/film"><li className="li-item">FILM</li></Link>
                <Link to="/contact"><li className="li-item">CONTACT</li></Link>
            </ul>
        </header>
    )
}