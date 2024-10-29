import { 
  PaperAirplaneIcon,
  SunIcon,
  Bars3Icon,
  ShoppingCartIcon,
  HeartIcon,
  // XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header(){
  const [ toggleMenu, setToggleMenu ] = useState(false)
  const navigate = useNavigate();

  const navItems = [
    {
      "title": "Home",
      "url": "/",
    },
    {
      "title": "Book Store",
      "url": "/",
    },
    {
      "title": "Order",
      "url": "/",
    },
    {
      "title": "Profile",
      "url": "/profile",
    },
  ]
  return(
    <div className="app">
    <nav>
      <div className="max-w-7xl mx-auto">
        <div className="flex mx-auto justify-between w-5/6 ">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16 my-12">
            {/* logo */}
            <div className="fromLeft">
              <a
                href="/"
                className="flex gap-1 font-bold text-gray-700 items-center "
              >
                <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                <span>Logo</span>
              </a>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8 fromTop">
              {navItems.map((item, index) => (
                <a href={item.url} index={index}>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            <div className="hidden xs:flex items-center gap-10">
              <div className="hidden lg:flex items-center gap-2 fromTop">
                <ShoppingCartIcon className="h-6 w-6"/>
                <HeartIcon className="h-6 w-6"/>
                <SunIcon className="h-6 w-6" />
              </div>
              <div>
                <button onClick={()=> navigate("/login")}
                className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-pink-700 hover:text-gray-100 fromRight">
                  Sign-up/Sign-in
                </button>
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            {/* <a href="#" className="border-l-4 border-gray-600">
              Features
            </a> */}
            {navItems.map((item, index) => (
              <a href={item.url} index={index}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Header;