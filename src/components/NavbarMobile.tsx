interface Props {
    handleNavToggle: VoidFunction
}

export const NavbarMobile = ({handleNavToggle}: Props) => {
    return (
        <div className="pt-0">
            <div className="opacity-25 fixed inset-0 z-10 bg-black"></div>
            <div className="w-3/4 z-50 h-screen absolute  right-0 bg-offWhite px-5 py-10">
                <div className="flex justify-end" onClick={handleNavToggle}>
                  <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
                </div>

                <div className="pt-52 pl-6 text-darkerBlue flex flex-col gap-5 text-xl">
                    <a href="#" className="hover:text-primnaryRed">Home</a>
                    <a href="#" className="hover:text-primnaryRed">New</a>
                    <a href="#" className="hover:text-primnaryRed">Popular</a>
                    <a href="#" className="hover:text-primnaryRed">Trending</a>
                    <a href="#" className="hover:text-primnaryRed">Categories</a>
                </div>
            </div>

        </div>
    )
}