/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../css/styles.css';
import '../css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import logo from '../images/icons/logo-sm.png';
import search from '../images/icons/search-icon-sm.png';
import cart from '../images/icons/cart-sm.png';

function Header() {
   return (
      <div>
         <div className="nav-wrapper fixed-top">
            <div className="container">
               <nav className="navbar navbar-taggable-sm navbar-expand-md">
                  <button
                     className="navbar-toggler navbar-toggler-right"
                     type="button"
                     data-toggle="collapse"
                     data-target=".navbar-collapse"
                  >
                     ☰
                  </button>
                  <a className="navbar-brand mx-auto" href="#">
                     <img src={logo} />
                  </a>

                  <div className="navbar-collapse collapse">
                     <ul className="navbar-nav nav-justified w-100 nav-fill">
                        <li className="nav-item">
                           <a
                              className="nav-link js-scroll-trigger"
                              href="/mac/"
                           >
                              Mac
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link js-scroll-trigger" href="#">
                              iphone
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link js-scroll-trigger" href="#">
                              ipad
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link js-scroll-trigger" href="#">
                              watch
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link js-scroll-trigger" href="#">
                              tv
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link js-scroll-trigger" href="#">
                              Music
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link js-scroll-trigger" href="#">
                              Support
                           </a>
                        </li>
                        <li className="nav-item">
                           <a
                              className="nav-link js-scroll-trigger"
                              href="/search/"
                           >
                              <img src={search} />
                           </a>
                        </li>
                        <li className="nav-item">
                           <a
                              className="nav-link js-scroll-trigger"
                              href="/cart/"
                           >
                              <img src={cart} />
                           </a>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </div>
      </div>
   );
}

export default Header;
