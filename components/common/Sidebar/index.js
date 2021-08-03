import React from "react";
import Link from "next/link";

import Close from "../../../public/svg/Close";
import ServiceDrop from "../ServiceDropdown/service-dropdown";

const Sidebar = () => {
  return (
    <>
      <amp-sidebar
        id="sidebar"
        className="sidenav"
        layout="nodisplay"
        side="right"
      >
        <button className="sidenav-close" on="tap:sidebar.close">
          <Close />
        </button>
        <amp-accordion>
          <section>
            <h2>About</h2>
            <ul>
              <li>
                <Link href="/about">
                  <a>Who We Are</a>
                </Link>
              </li>
              <li>
                <Link href="/who-we-are">
                  <a>Our Infrastructure.</a>
                </Link>
              </li>
              <li>
                <Link href="/who-we-are">
                  <a>Our Values</a>
                </Link>
              </li>
              <li>
                <Link href="/who-we-are">
                  <a>Events & Celebration</a>
                </Link>
              </li>
              <li>
                <Link href="/who-we-are">
                  <a>FAQ</a>
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <h2>Service</h2>
            <div>
              <ServiceDrop/>
              {/* <h3>Website Development</h3>
              <ul>
                <li>
                  <Link href="/who-we-are">
                    <a>Full Stack Development</a>
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-are">
                    <a>Mean Stack Development</a>
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-are">
                    <a>PHP Development</a>
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-are">
                    <a>.NET Development</a>
                  </Link>
                </li>
              </ul> */}
            </div>
          </section>
        </amp-accordion>
        <ul className="sidebar-links">
          <li className="nav-item active">
            <Link href="/success-stories" className="nav-link">
              <a>SUCCESS STORIES</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/insights" className="nav-link">
              <a>INSIGHTS</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/career" className="nav-link">
              <a>CAREER</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/contact" className="nav-link">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </amp-sidebar>
      <style jsx>
        {`
          .sidenav {
            width: 300px;
            background-color: #3b4144;
            transition: 0.5s;
            padding: 60px 20px 20px;
            position: relative;
          }
          :global(.sidenav-close) {
            width: 20px;
            height: 20px;
            padding: 0;
            margin: 0;
            background: transparent;
            border: 0;
            position: absolute;
            right: 20px;
            top: 30px;
          }
          :global(.sidenav-close svg) {
            width: 100%;
            fill: #fff;
          }
          .sidebar-links {
          }
        `}
      </style>
    </>
  );
};

export const config = { amp: true };
export default Sidebar;
