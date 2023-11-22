import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import GoogleTranslate from './GoogleTranslate';

  export const Header = () => {
    
    const [hidden, setHidden] = useState(true);
    const [darkMode, setDarkMode] = useState(
      JSON.parse(localStorage.getItem('darkMode')) || false
      );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
     
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const activeClass =
    'text-base block py-2 pl-3 pr-4 text-white bg-purple-700 rounded md:bg-transparent md:purple-700 md:p-0 md:dark:text-white';

  const inActiveClass =
    'text-base block py-2 pl-3 pr-4 text-slate-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-purple-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';
  
  return (
    <header >
      <nav className="bg-purple-700  border-b-2 border-gray-200 dark:border-b-2 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-end text-end justify-between mx-auto p-3">
          <div
            id="mobile-nav"
            className="flex md:order-2"
          >
            {' '}
            <button
              onClick={() => setDarkMode(!darkMode)}
              data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip"
              type="button"
              data-toggle-dark="light"
              className="flex items-center p-2 mr-2 text-xs font-medium text-dark rounded-lg border border-gray-100 toggle-dark-state-example hover:bg-purple-700 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-purple-700 focus:outline-none dark:text-white dark:border-gray-600 dark:hover:text-yellow-300 dark:hover:bg-slate-950"
            >
              {darkMode ? (
                <svg
                  aria-hidden="true"
                  data-toggle-icon="sun"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  data-toggle-icon="moon"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
{/* Add Language Dropdown */}
      <GoogleTranslate />
            <button
              onClick={() => setHidden(!hidden)}
              data-collapse-toggle="navbar"
              type="button"
              className="inline-flex items-center ml-2 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            id="nav-links"
            className={`${
              hidden ? 'hidden' : ''
            } items-center justify-between  w-full md:flex md:w-auto md:order-1`}
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                </svg>
              </div>

            
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-purple-700 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Projects"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }

                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </header>
  ); 
};
