import { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const scrollTop = (event.target as Document).scrollingElement?.scrollTop;

      if(scrollTop && scrollTop > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  

  return (
    <header className={`navbar fixed top-0 left-0 z-10 ${isScrolled ? 'bg-white' : ''}`}>
      <div className="navbar-start w-full lg:w-[50%] flex-row-reverse justify-between">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-secondary btn-md rounded-xl text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow lg:hidden"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost gap-0 text-xl lg:text-3xl font-normal text-white underline underline-offset-4">
          Saf<span className="text-secondary font-bold">HVAC</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='dropdown dropdown-hover'>
            <div tabIndex={0} role="button" className={`btn btn-ghost hover:text-secondary text-xl font-normal ${isScrolled ? 'text-secondary' : 'text-white'}`}>Products</div>
            <ul tabIndex={0} className="dropdown-content top-[64px] menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </li>
          <li className='dropdown dropdown-hover'>
            <div tabIndex={0} role="button" className={`btn btn-ghost hover:text-secondary text-xl font-normal ${isScrolled ? 'text-secondary' : 'text-white'}`}>Solutions</div>
            <ul tabIndex={0} className="dropdown-content top-[64px] menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </li>
          <li className='dropdown dropdown-hover'>
            <div tabIndex={0} role="button" className={`btn btn-ghost hover:text-secondary text-xl font-normal ${isScrolled ? 'text-secondary' : 'text-white'}`}>Applications</div>
            <ul tabIndex={0} className="dropdown-content top-[64px] menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </li>
          <li className='dropdown dropdown-hover'>
            <div tabIndex={0} role="button" className={`btn btn-ghost hover:text-secondary text-xl font-normal ${isScrolled ? 'text-secondary' : 'text-white'}`}>Resources</div>
            <ul tabIndex={0} className="dropdown-content top-[64px] menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </li>
          <li className='dropdown dropdown-hover'>
            <div tabIndex={0} role="button" className={`btn btn-ghost hover:text-secondary text-xl font-normal ${isScrolled ? 'text-secondary' : 'text-white'}`}>About Us</div>
            <ul tabIndex={0} className="dropdown-content top-[64px] menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <a
          href="tel:8097329953"
          className="btn btn-secondary btn-md btn-circle"
        >
          <FaPhone color="#fff" />
        </a>
      </div>
    </header>
  );
};

export default Header;
