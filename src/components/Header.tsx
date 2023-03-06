import { useState } from "react"
import headerimg from "../assets/images/image-web-3-desktop.jpg"
import headerimgmobile from "../assets/images/image-web-3-mobile.jpg"

export const Header = () => {
    const [width, setWidth] = useState(window.innerWidth)

    window.addEventListener("resize", () => {
        setWidth(window.innerWidth)
    })

    return (
        <div className="flex flex-col">
            {
                width < 768 ? 
                <img src={headerimgmobile} /> :
                <img src={headerimg} />
            }
            
            <div className="w-full gap-8 flex flex-col md:flex-row mt-10 justify-between">
                <div className="w-full md:w-1/2">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-darkerBlue">The Bright Future of Web 3.0?</h1>
                </div>

                <div className="flex flex-col w-full md:w-1/2 justify-between mb-10">
                    <p className="text-customSm text-darkBlue">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button className="text-customSm uppercase tracking-widest mr-auto mt-5 px-10 py-3 bg-primnaryRed hover:bg-darkerBlue text-offWhite">Read more</button>
                </div>
            </div>
        </div>
    )
}