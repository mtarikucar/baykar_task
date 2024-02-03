import React, {useState} from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Dropdown menüsünün durumunu yönetmek için

    return (
        <header className="flex flex-wrap justify-between items-center px-5 py-6 w-full text-amber-900">
            <div className="flex justify-between items-center w-full">
                <div className="text-3xl font-bold">Collers</div>
                <button
                    className="px-3 py-2 text-amber-900 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"></path>
                        )}
                    </svg>
                </button>

                <nav
                    className={`${
                        isMenuOpen ? "flex" : "hidden"
                    } flex-col flex-grow  md:pb-0 md:flex md:justify-end md:flex-row`}
                >
                    <a href="#products"
                       className="px-4 py-2 mt-2 text-sm font-semibold md:mt-0 hover:text-amber-700">Products</a>
                    <a href="#solutions"
                       className="px-4 py-2 mt-2 text-sm font-semibold md:mt-0 hover:text-amber-700">Solutions</a>
                    <a href="#pricing"
                       className="px-4 py-2 mt-2 text-sm font-semibold md:mt-0 hover:text-amber-700">Pricing</a>
                    <a href="#resources"
                       className="px-4 py-2 mt-2 text-sm font-semibold md:mt-0 hover:text-amber-700">Resources</a>
                    <a href="#login" className="px-4 py-2 mt-2 text-sm font-semibold md:mt-0 hover:text-amber-700">Log
                        In</a>
                    <a href="#signup"
                       className="px-4 py-2 mt-2 text-sm font-semibold text-amber-900 bg-transparent border border-amber-900 rounded hover:bg-amber-900 hover:text-white md:mt-0">Sign
                        Up</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
