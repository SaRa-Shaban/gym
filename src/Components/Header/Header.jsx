import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import bars from '../../assets/bars.png';
import './Header.css'
import { Link } from 'react-scroll'

export default function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <>
      <div className="header">
        <img src={logo} className='logo' alt="" />

        {(menuOpened === false && mobile === true) ?
          (<div
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0.55rem",
              borderRadius: "5px"
            }}

            onClick={() => setMenuOpened(true)}
          >
            <img src={bars} alt="" style={{ width: "1.5rem", height: "1.5rem" }} />
          </div>) : (
            <ul className='HeaderMenu'>
              <li >
                <Link
                  onClick={() => setMenuOpened(false)}
                  to='home'
                  span={true}
                  smooth={true}
                >Home</Link>
              </li>
              <li >
                <Link
                  onClick={() => setMenuOpened(false)}
                  to='programs'
                  span={true}
                  smooth={true}
                >Programs</Link>
              </li>
              <li >
                <Link
                  onClick={() => setMenuOpened(false)}
                  to='whyUs'
                  span={true}
                  smooth={true}
                >Why us</Link>
              </li>
              <li >
                <Link
                  onClick={() => setMenuOpened(false)}
                  to='plans'
                  span={true}
                  smooth={true}
                >Plans</Link>
              </li>
              <li >
                <Link
                  onClick={() => setMenuOpened(false)}
                  to='testimonials'
                  span={true}
                  smooth={true}
                >Testimonials</Link>
              </li>
            </ul>
          )
        }

      </div>
    </>
  )
}
