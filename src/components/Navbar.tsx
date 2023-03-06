import logo from "../assets/images/logo.svg"

interface Props {
    handleNavToggle: VoidFunction
}

export const Navbar = ({handleNavToggle}: Props) => {

    return (
        <div className="flex justify-between">
            <div>
                <img src={logo} />
            </div>
            <div className="pt-3 hidden md:flex gap-10 text-darkBlue text-customSm">
                <a href="#" className="hover:text-primnaryRed">Home</a>
                <a href="#" className="hover:text-primnaryRed">New</a>
                <a href="#" className="hover:text-primnaryRed">Popular</a>
                <a href="#" className="hover:text-primnaryRed">Trending</a>
                <a href="#" className="hover:text-primnaryRed">Categories</a>
            </div>

            <div className="md:hidden mt-2" onClick={handleNavToggle}>
                <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
            </div>
        </div>
    )
}