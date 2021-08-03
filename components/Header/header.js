import Link from "next/link";
import Button from "../form/button";
import Logo from "../../public/svg/Logo";
import Menu from "../../public/svg/Menu";
import { PRIMARY } from "../css-config";
import Sidebar from "../common/Sidebar";
import FullNavDropdown from "./FullNavDropdown";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/">
          <a className="navbar-brand">
          <img className="img" src="images/spineor-logo.webp"/>
            {/* <Logo /> */}
          </a>
        </Link>
        <div className="get-quote-mobile">
          <Button primary className="ml-auto ">
            GET A QUOTE
          </Button>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          on="tap:sidebar.toggle"
        >
          <Menu />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <button
                className="nav-item-links"
                type="button"
                aria-label="about"
                on="tap:aboutDropdown.toggleVisibility"
              >
                About
              </button>
            </li>
            <li className="nav-item active">
              <button
                className="nav-item-links"
                type="button"
                aria-label="about"
                on="tap:serviceDropdown.toggleVisibility"
              >
                Service
              </button>
            </li>
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
              <Link href="/faq" className="nav-link">
                <a>CAREER</a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link href="/events" className="nav-link">
                <a>CONTACT</a>
              </Link>
            </li>
          </ul>
          <Button primary className="hide-990">
            GET A QUOTE
          </Button>
        </div>
      </nav>

      <div id="serviceDropdown" hidden>
        <FullNavDropdown id="serviceDropdown" title="Service"></FullNavDropdown>
      </div>
      <div id="aboutDropdown" hidden>
        <FullNavDropdown id="aboutDropdown" title="About"></FullNavDropdown>
      </div>
      <Sidebar />
      <style global jsx>{`
        *,
        ::after,
        ::before {
          box-sizing: border-box;
        }
        html {
          font-family: sans-serif;
          line-height: 1.15;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          -ms-overflow-style: scrollbar;
          -webkit-tap-highlight-color: transparent;
        }
        @-ms-viewport {
          width: device-width;
        }
        article,
        aside,
        dialog,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        nav,
        section {
          display: block;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #212529;
          text-align: left;
          background-color: #fff;
        }
        [tabindex="-1"]:focus {
          outline: 0;
        }
        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }
        p {
          margin-top: 0;
          margin-bottom: 1rem;
        }
        abbr[data-original-title],
        abbr[title] {
          text-decoration: underline;
          -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
          cursor: help;
          border-bottom: 0;
        }
        address {
          margin-bottom: 1rem;
          font-style: normal;
          line-height: inherit;
        }
        dl,
        ol,
        ul {
          margin-top: 0;
          margin-bottom: 1rem;
        }
        ol ol,
        ol ul,
        ul ol,
        ul ul {
          margin-bottom: 0;
        }
        dt {
          font-weight: 700;
        }
        dd {
          margin-bottom: 0.5rem;
          margin-left: 0;
        }
        blockquote {
          margin: 0 0 1rem;
        }
        dfn {
          font-style: italic;
        }
        b,
        strong {
          font-weight: bolder;
        }
        small {
          font-size: 80%;
        }
        sub,
        sup {
          position: relative;
          font-size: 75%;
          line-height: 0;
          vertical-align: baseline;
        }
        sub {
          bottom: -0.25em;
        }
        sup {
          top: -0.5em;
        }
        a {
          color: #007bff;
          text-decoration: none;
          background-color: transparent;
          -webkit-text-decoration-skip: objects;
        }
        a:hover {
          color: #0056b3;
          text-decoration: underline;
        }
        a:not([href]):not([tabindex]) {
          color: inherit;
          text-decoration: none;
        }
        a:not([href]):not([tabindex]):focus,
        a:not([href]):not([tabindex]):hover {
          color: inherit;
          text-decoration: none;
        }
        a:not([href]):not([tabindex]):focus {
          outline: 0;
        }
        code,
        kbd,
        pre,
        samp {
          font-family: monospace, monospace;
          font-size: 1em;
        }
        pre {
          margin-top: 0;
          margin-bottom: 1rem;
          overflow: auto;
          -ms-overflow-style: scrollbar;
        }
        figure {
          margin: 0 0 1rem;
        }
        img {
          vertical-align: middle;
          border-style: none;
        }
        svg:not(:root) {
          overflow: hidden;
        }
        table {
          border-collapse: collapse;
        }
        caption {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          color: #6c757d;
          text-align: left;
          caption-side: bottom;
        }
        th {
          text-align: inherit;
        }
        label {
          display: inline-block;
          margin-bottom: 0.5rem;
        }
        button {
          border-radius: 0;
        }
        button:focus {
          outline: 1px dotted;
          outline: 5px auto -webkit-focus-ring-color;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }
        button,
        input {
          overflow: visible;
        }
        button,
        select {
          text-transform: none;
        }
        [type="reset"],
        [type="submit"],
        button,
        html [type="button"] {
          -webkit-appearance: button;
        }
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner,
        button::-moz-focus-inner {
          padding: 0;
          border-style: none;
        }
        input[type="checkbox"],
        input[type="radio"] {
          box-sizing: border-box;
          padding: 0;
        }
        input[type="date"],
        input[type="datetime-local"],
        input[type="month"],
        input[type="time"] {
          -webkit-appearance: listbox;
        }
        textarea {
          overflow: auto;
          resize: vertical;
        }
        fieldset {
          min-width: 0;
          padding: 0;
          margin: 0;
          border: 0;
        }
        legend {
          display: block;
          width: 100%;
          max-width: 100%;
          padding: 0;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          line-height: inherit;
          color: inherit;
          white-space: normal;
        }
        progress {
          vertical-align: baseline;
        }
        [type="number"]::-webkit-inner-spin-button,
        [type="number"]::-webkit-outer-spin-button {
          height: auto;
        }
        [type="search"] {
          outline-offset: -2px;
          -webkit-appearance: none;
        }
        [type="search"]::-webkit-search-cancel-button,
        [type="search"]::-webkit-search-decoration {
          -webkit-appearance: none;
        }
        ::-webkit-file-upload-button {
          font: inherit;
          -webkit-appearance: button;
        }
        output {
          display: inline-block;
        }
        summary {
          display: list-item;
          cursor: pointer;
        }
        template {
          display: none;
        }
        [hidden] {
          display: none;
        }
        .h1,
        .h2,
        .h3,
        .h4,
        .h5,
        .h6,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-bottom: 0.5rem;
          font-family: inherit;
          font-weight: 500;
          line-height: 1.2;
          color: inherit;
        }
        .h1,
        h1 {
          font-size: 2.5rem;
        }
        .h2,
        h2 {
          font-size: 2rem;
        }
        .h3,
        h3 {
          font-size: 1.75rem;
        }
        .h4,
        h4 {
          font-size: 1.5rem;
        }
        .h5,
        h5 {
          font-size: 1.25rem;
        }
        .h6,
        h6 {
          font-size: 1rem;
        }
        .lead {
          font-size: 1.25rem;
          font-weight: 300;
        }
        .display-1 {
          font-size: 6rem;
          font-weight: 300;
          line-height: 1.2;
        }
        .display-2 {
          font-size: 5.5rem;
          font-weight: 300;
          line-height: 1.2;
        }
        .display-3 {
          font-size: 4.5rem;
          font-weight: 300;
          line-height: 1.2;
        }
        .display-4 {
          font-size: 3.5rem;
          font-weight: 300;
          line-height: 1.2;
        }
        hr {
          margin-top: 1rem;
          margin-bottom: 1rem;
          border: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        .small,
        small {
          font-size: 80%;
          font-weight: 400;
        }
        .mark,
        mark {
          padding: 0.2em;
          background-color: #fcf8e3;
        }
        .container {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }
        @media (min-width: 576px) {
          .container {
            max-width: 540px;
          }
        }
        @media (min-width: 768px) {
          .container {
            max-width: 720px;
          }
        }
        @media (min-width: 992px) {
          .container {
            max-width: 960px;
          }
        }
        @media (min-width: 1200px) {
          .container {
            max-width: 1140px;
          }
        }
        .container-fluid {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }
        .row {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
        }
        .no-gutters {
          margin-right: 0;
          margin-left: 0;
        }
        .no-gutters > .col,
        .no-gutters > [class*="col-"] {
          padding-right: 0;
          padding-left: 0;
        }
        .col,
        .col-1,
        .col-10,
        .col-11,
        .col-12,
        .col-2,
        .col-3,
        .col-4,
        .col-5,
        .col-6,
        .col-7,
        .col-8,
        .col-9,
        .col-auto,
        .col-lg,
        .col-lg-1,
        .col-lg-10,
        .col-lg-11,
        .col-lg-12,
        .col-lg-2,
        .col-lg-3,
        .col-lg-4,
        .col-lg-5,
        .col-lg-6,
        .col-lg-7,
        .col-lg-8,
        .col-lg-9,
        .col-lg-auto,
        .col-md,
        .col-md-1,
        .col-md-10,
        .col-md-11,
        .col-md-12,
        .col-md-2,
        .col-md-3,
        .col-md-4,
        .col-md-5,
        .col-md-6,
        .col-md-7,
        .col-md-8,
        .col-md-9,
        .col-md-auto,
        .col-sm,
        .col-sm-1,
        .col-sm-10,
        .col-sm-11,
        .col-sm-12,
        .col-sm-2,
        .col-sm-3,
        .col-sm-4,
        .col-sm-5,
        .col-sm-6,
        .col-sm-7,
        .col-sm-8,
        .col-sm-9,
        .col-sm-auto,
        .col-xl,
        .col-xl-1,
        .col-xl-10,
        .col-xl-11,
        .col-xl-12,
        .col-xl-2,
        .col-xl-3,
        .col-xl-4,
        .col-xl-5,
        .col-xl-6,
        .col-xl-7,
        .col-xl-8,
        .col-xl-9,
        .col-xl-auto {
          position: relative;
          width: 100%;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px;
        }
        .col {
          -ms-flex-preferred-size: 0;
          flex-basis: 0;
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          max-width: 100%;
        }
        .col-auto {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 auto;
          flex: 0 0 auto;
          width: auto;
          max-width: none;
        }
        .col-1 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 8.333333%;
          flex: 0 0 8.333333%;
          max-width: 8.333333%;
        }
        .col-2 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 16.666667%;
          flex: 0 0 16.666667%;
          max-width: 16.666667%;
        }
        .col-3 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 25%;
          flex: 0 0 25%;
          max-width: 25%;
        }
        .col-4 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 33.333333%;
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
        }
        .col-5 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 41.666667%;
          flex: 0 0 41.666667%;
          max-width: 41.666667%;
        }
        .col-6 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 50%;
          flex: 0 0 50%;
          max-width: 50%;
        }
        .col-7 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 58.333333%;
          flex: 0 0 58.333333%;
          max-width: 58.333333%;
        }
        .col-8 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 66.666667%;
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
        }
        .col-9 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 75%;
          flex: 0 0 75%;
          max-width: 75%;
        }
        .col-10 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 83.333333%;
          flex: 0 0 83.333333%;
          max-width: 83.333333%;
        }
        .col-11 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 91.666667%;
          flex: 0 0 91.666667%;
          max-width: 91.666667%;
        }
        .col-12 {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 100%;
          flex: 0 0 100%;
          max-width: 100%;
        }
        .order-first {
          -webkit-box-ordinal-group: 0;
          -ms-flex-order: -1;
          order: -1;
        }
        .order-last {
          -webkit-box-ordinal-group: 14;
          -ms-flex-order: 13;
          order: 13;
        }
        .order-0 {
          -webkit-box-ordinal-group: 1;
          -ms-flex-order: 0;
          order: 0;
        }
        .order-1 {
          -webkit-box-ordinal-group: 2;
          -ms-flex-order: 1;
          order: 1;
        }
        .order-2 {
          -webkit-box-ordinal-group: 3;
          -ms-flex-order: 2;
          order: 2;
        }
        .order-3 {
          -webkit-box-ordinal-group: 4;
          -ms-flex-order: 3;
          order: 3;
        }
        .order-4 {
          -webkit-box-ordinal-group: 5;
          -ms-flex-order: 4;
          order: 4;
        }
        .order-5 {
          -webkit-box-ordinal-group: 6;
          -ms-flex-order: 5;
          order: 5;
        }
        .order-6 {
          -webkit-box-ordinal-group: 7;
          -ms-flex-order: 6;
          order: 6;
        }
        .order-7 {
          -webkit-box-ordinal-group: 8;
          -ms-flex-order: 7;
          order: 7;
        }
        .order-8 {
          -webkit-box-ordinal-group: 9;
          -ms-flex-order: 8;
          order: 8;
        }
        .order-9 {
          -webkit-box-ordinal-group: 10;
          -ms-flex-order: 9;
          order: 9;
        }
        .order-10 {
          -webkit-box-ordinal-group: 11;
          -ms-flex-order: 10;
          order: 10;
        }
        .order-11 {
          -webkit-box-ordinal-group: 12;
          -ms-flex-order: 11;
          order: 11;
        }
        .order-12 {
          -webkit-box-ordinal-group: 13;
          -ms-flex-order: 12;
          order: 12;
        }
        .offset-1 {
          margin-left: 8.333333%;
        }
        .offset-2 {
          margin-left: 16.666667%;
        }
        .offset-3 {
          margin-left: 25%;
        }
        .offset-4 {
          margin-left: 33.333333%;
        }
        .offset-5 {
          margin-left: 41.666667%;
        }
        .offset-6 {
          margin-left: 50%;
        }
        .offset-7 {
          margin-left: 58.333333%;
        }
        .offset-8 {
          margin-left: 66.666667%;
        }
        .offset-9 {
          margin-left: 75%;
        }
        .offset-10 {
          margin-left: 83.333333%;
        }
        .offset-11 {
          margin-left: 91.666667%;
        }
        @media (min-width: 576px) {
          .col-sm {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
          }
          .col-sm-auto {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
          }
          .col-sm-1 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
          }
          .col-sm-2 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
          }
          .col-sm-3 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
          }
          .col-sm-4 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
          }
          .col-sm-5 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
          }
          .col-sm-6 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
          }
          .col-sm-7 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
          }
          .col-sm-8 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
          }
          .col-sm-9 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
          }
          .col-sm-10 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
          }
          .col-sm-11 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
          }
          .col-sm-12 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
          }
          .order-sm-first {
            -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
            order: -1;
          }
          .order-sm-last {
            -webkit-box-ordinal-group: 14;
            -ms-flex-order: 13;
            order: 13;
          }
          .order-sm-0 {
            -webkit-box-ordinal-group: 1;
            -ms-flex-order: 0;
            order: 0;
          }
          .order-sm-1 {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
          }
          .order-sm-2 {
            -webkit-box-ordinal-group: 3;
            -ms-flex-order: 2;
            order: 2;
          }
          .order-sm-3 {
            -webkit-box-ordinal-group: 4;
            -ms-flex-order: 3;
            order: 3;
          }
          .order-sm-4 {
            -webkit-box-ordinal-group: 5;
            -ms-flex-order: 4;
            order: 4;
          }
          .order-sm-5 {
            -webkit-box-ordinal-group: 6;
            -ms-flex-order: 5;
            order: 5;
          }
          .order-sm-6 {
            -webkit-box-ordinal-group: 7;
            -ms-flex-order: 6;
            order: 6;
          }
          .order-sm-7 {
            -webkit-box-ordinal-group: 8;
            -ms-flex-order: 7;
            order: 7;
          }
          .order-sm-8 {
            -webkit-box-ordinal-group: 9;
            -ms-flex-order: 8;
            order: 8;
          }
          .order-sm-9 {
            -webkit-box-ordinal-group: 10;
            -ms-flex-order: 9;
            order: 9;
          }
          .order-sm-10 {
            -webkit-box-ordinal-group: 11;
            -ms-flex-order: 10;
            order: 10;
          }
          .order-sm-11 {
            -webkit-box-ordinal-group: 12;
            -ms-flex-order: 11;
            order: 11;
          }
          .order-sm-12 {
            -webkit-box-ordinal-group: 13;
            -ms-flex-order: 12;
            order: 12;
          }
          .offset-sm-0 {
            margin-left: 0;
          }
          .offset-sm-1 {
            margin-left: 8.333333%;
          }
          .offset-sm-2 {
            margin-left: 16.666667%;
          }
          .offset-sm-3 {
            margin-left: 25%;
          }
          .offset-sm-4 {
            margin-left: 33.333333%;
          }
          .offset-sm-5 {
            margin-left: 41.666667%;
          }
          .offset-sm-6 {
            margin-left: 50%;
          }
          .offset-sm-7 {
            margin-left: 58.333333%;
          }
          .offset-sm-8 {
            margin-left: 66.666667%;
          }
          .offset-sm-9 {
            margin-left: 75%;
          }
          .offset-sm-10 {
            margin-left: 83.333333%;
          }
          .offset-sm-11 {
            margin-left: 91.666667%;
          }
        }
        @media (min-width: 768px) {
          .col-md {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
          }
          .col-md-auto {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
          }
          .col-md-1 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
          }
          .col-md-2 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
          }
          .col-md-3 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
          }
          .col-md-4 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
          }
          .col-md-5 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
          }
          .col-md-6 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
          }
          .col-md-7 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
          }
          .col-md-8 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
          }
          .col-md-9 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
          }
          .col-md-10 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
          }
          .col-md-11 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
          }
          .col-md-12 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
          }
          .order-md-first {
            -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
            order: -1;
          }
          .order-md-last {
            -webkit-box-ordinal-group: 14;
            -ms-flex-order: 13;
            order: 13;
          }
          .order-md-0 {
            -webkit-box-ordinal-group: 1;
            -ms-flex-order: 0;
            order: 0;
          }
          .order-md-1 {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
          }
          .order-md-2 {
            -webkit-box-ordinal-group: 3;
            -ms-flex-order: 2;
            order: 2;
          }
          .order-md-3 {
            -webkit-box-ordinal-group: 4;
            -ms-flex-order: 3;
            order: 3;
          }
          .order-md-4 {
            -webkit-box-ordinal-group: 5;
            -ms-flex-order: 4;
            order: 4;
          }
          .order-md-5 {
            -webkit-box-ordinal-group: 6;
            -ms-flex-order: 5;
            order: 5;
          }
          .order-md-6 {
            -webkit-box-ordinal-group: 7;
            -ms-flex-order: 6;
            order: 6;
          }
          .order-md-7 {
            -webkit-box-ordinal-group: 8;
            -ms-flex-order: 7;
            order: 7;
          }
          .order-md-8 {
            -webkit-box-ordinal-group: 9;
            -ms-flex-order: 8;
            order: 8;
          }
          .order-md-9 {
            -webkit-box-ordinal-group: 10;
            -ms-flex-order: 9;
            order: 9;
          }
          .order-md-10 {
            -webkit-box-ordinal-group: 11;
            -ms-flex-order: 10;
            order: 10;
          }
          .order-md-11 {
            -webkit-box-ordinal-group: 12;
            -ms-flex-order: 11;
            order: 11;
          }
          .order-md-12 {
            -webkit-box-ordinal-group: 13;
            -ms-flex-order: 12;
            order: 12;
          }
          .offset-md-0 {
            margin-left: 0;
          }
          .offset-md-1 {
            margin-left: 8.333333%;
          }
          .offset-md-2 {
            margin-left: 16.666667%;
          }
          .offset-md-3 {
            margin-left: 25%;
          }
          .offset-md-4 {
            margin-left: 33.333333%;
          }
          .offset-md-5 {
            margin-left: 41.666667%;
          }
          .offset-md-6 {
            margin-left: 50%;
          }
          .offset-md-7 {
            margin-left: 58.333333%;
          }
          .offset-md-8 {
            margin-left: 66.666667%;
          }
          .offset-md-9 {
            margin-left: 75%;
          }
          .offset-md-10 {
            margin-left: 83.333333%;
          }
          .offset-md-11 {
            margin-left: 91.666667%;
          }
        }
        @media (min-width: 992px) {
          .col-lg {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
          }
          .col-lg-auto {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
          }
          .col-lg-1 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
          }
          .col-lg-2 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
          }
          .col-lg-3 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
          }
          .col-lg-4 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
          }
          .col-lg-5 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
          }
          .col-lg-6 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
          }
          .col-lg-7 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
          }
          .col-lg-8 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
          }
          .col-lg-9 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
          }
          .col-lg-10 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
          }
          .col-lg-11 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
          }
          .col-lg-12 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
          }
          .order-lg-first {
            -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
            order: -1;
          }
          .order-lg-last {
            -webkit-box-ordinal-group: 14;
            -ms-flex-order: 13;
            order: 13;
          }
          .order-lg-0 {
            -webkit-box-ordinal-group: 1;
            -ms-flex-order: 0;
            order: 0;
          }
          .order-lg-1 {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
          }
          .order-lg-2 {
            -webkit-box-ordinal-group: 3;
            -ms-flex-order: 2;
            order: 2;
          }
          .order-lg-3 {
            -webkit-box-ordinal-group: 4;
            -ms-flex-order: 3;
            order: 3;
          }
          .order-lg-4 {
            -webkit-box-ordinal-group: 5;
            -ms-flex-order: 4;
            order: 4;
          }
          .order-lg-5 {
            -webkit-box-ordinal-group: 6;
            -ms-flex-order: 5;
            order: 5;
          }
          .order-lg-6 {
            -webkit-box-ordinal-group: 7;
            -ms-flex-order: 6;
            order: 6;
          }
          .order-lg-7 {
            -webkit-box-ordinal-group: 8;
            -ms-flex-order: 7;
            order: 7;
          }
          .order-lg-8 {
            -webkit-box-ordinal-group: 9;
            -ms-flex-order: 8;
            order: 8;
          }
          .order-lg-9 {
            -webkit-box-ordinal-group: 10;
            -ms-flex-order: 9;
            order: 9;
          }
          .order-lg-10 {
            -webkit-box-ordinal-group: 11;
            -ms-flex-order: 10;
            order: 10;
          }
          .order-lg-11 {
            -webkit-box-ordinal-group: 12;
            -ms-flex-order: 11;
            order: 11;
          }
          .order-lg-12 {
            -webkit-box-ordinal-group: 13;
            -ms-flex-order: 12;
            order: 12;
          }
          .offset-lg-0 {
            margin-left: 0;
          }
          .offset-lg-1 {
            margin-left: 8.333333%;
          }
          .offset-lg-2 {
            margin-left: 16.666667%;
          }
          .offset-lg-3 {
            margin-left: 25%;
          }
          .offset-lg-4 {
            margin-left: 33.333333%;
          }
          .offset-lg-5 {
            margin-left: 41.666667%;
          }
          .offset-lg-6 {
            margin-left: 50%;
          }
          .offset-lg-7 {
            margin-left: 58.333333%;
          }
          .offset-lg-8 {
            margin-left: 66.666667%;
          }
          .offset-lg-9 {
            margin-left: 75%;
          }
          .offset-lg-10 {
            margin-left: 83.333333%;
          }
          .offset-lg-11 {
            margin-left: 91.666667%;
          }
        }
        @media (min-width: 1200px) {
          .col-xl {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
          }
          .col-xl-auto {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
          }
          .col-xl-1 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
          }
          .col-xl-2 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
          }
          .col-xl-3 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
          }
          .col-xl-4 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
          }
          .col-xl-5 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
          }
          .col-xl-6 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
          }
          .col-xl-7 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
          }
          .col-xl-8 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
          }
          .col-xl-9 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
          }
          .col-xl-10 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
          }
          .col-xl-11 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
          }
          .col-xl-12 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
          }
          .order-xl-first {
            -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
            order: -1;
          }
          .order-xl-last {
            -webkit-box-ordinal-group: 14;
            -ms-flex-order: 13;
            order: 13;
          }
          .order-xl-0 {
            -webkit-box-ordinal-group: 1;
            -ms-flex-order: 0;
            order: 0;
          }
          .order-xl-1 {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
          }
          .order-xl-2 {
            -webkit-box-ordinal-group: 3;
            -ms-flex-order: 2;
            order: 2;
          }
          .order-xl-3 {
            -webkit-box-ordinal-group: 4;
            -ms-flex-order: 3;
            order: 3;
          }
          .order-xl-4 {
            -webkit-box-ordinal-group: 5;
            -ms-flex-order: 4;
            order: 4;
          }
          .order-xl-5 {
            -webkit-box-ordinal-group: 6;
            -ms-flex-order: 5;
            order: 5;
          }
          .order-xl-6 {
            -webkit-box-ordinal-group: 7;
            -ms-flex-order: 6;
            order: 6;
          }
          .order-xl-7 {
            -webkit-box-ordinal-group: 8;
            -ms-flex-order: 7;
            order: 7;
          }
          .order-xl-8 {
            -webkit-box-ordinal-group: 9;
            -ms-flex-order: 8;
            order: 8;
          }
          .order-xl-9 {
            -webkit-box-ordinal-group: 10;
            -ms-flex-order: 9;
            order: 9;
          }
          .order-xl-10 {
            -webkit-box-ordinal-group: 11;
            -ms-flex-order: 10;
            order: 10;
          }
          .order-xl-11 {
            -webkit-box-ordinal-group: 12;
            -ms-flex-order: 11;
            order: 11;
          }
          .order-xl-12 {
            -webkit-box-ordinal-group: 13;
            -ms-flex-order: 12;
            order: 12;
          }
          .offset-xl-0 {
            margin-left: 0;
          }
          .offset-xl-1 {
            margin-left: 8.333333%;
          }
          .offset-xl-2 {
            margin-left: 16.666667%;
          }
          .offset-xl-3 {
            margin-left: 25%;
          }
          .offset-xl-4 {
            margin-left: 33.333333%;
          }
          .offset-xl-5 {
            margin-left: 41.666667%;
          }
          .offset-xl-6 {
            margin-left: 50%;
          }
          .offset-xl-7 {
            margin-left: 58.333333%;
          }
          .offset-xl-8 {
            margin-left: 66.666667%;
          }
          .offset-xl-9 {
            margin-left: 75%;
          }
          .offset-xl-10 {
            margin-left: 83.333333%;
          }
          .offset-xl-11 {
            margin-left: 91.666667%;
          }
        }

        .navbar {
          position: relative;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          padding: 0.5rem 1rem;
        }
        .navbar > .container,
        .navbar > .container-fluid {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
        }
        .navbar-brand {
          // display: inline-block;
          padding-top: 0.3125rem;
          padding-bottom: 0.3125rem;
          // margin-right: 1rem;
          font-size: 1.25rem;
          line-height: inherit;
          // white-space: nowrap;
          width: 150px;
          // background: #f00;
          // height: 40px;
          // overflow: hidden;
        }
        .navbar-brand:focus,
        .navbar-brand:hover {
          text-decoration: none;
        }
        .img {
          width: 160px
        }
        .navbar-nav {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          padding-left: 0;
          margin-bottom: 0;
          list-style: none;
        }
        .navbar-nav .nav-link {
          padding-right: 0;
          padding-left: 0;
        }
        .navbar-nav .dropdown-menu {
          position: static;
          float: none;
        }
        .navbar-text {
          display: inline-block;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
        .navbar-collapse {
          -ms-flex-preferred-size: 100%;
          flex-basis: 100%;
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .navbar-toggler {
          padding: 0.25rem 0.75rem;
          font-size: 1.25rem;
          line-height: 1;
          background-color: transparent;
          border: 1px solid transparent;
          border-radius: 0.25rem;
        }
        .navbar-toggler:focus,
        .navbar-toggler:hover {
          text-decoration: none;
        }
        .navbar-toggler:not(:disabled):not(.disabled) {
          cursor: pointer;
        }
        .navbar-toggler-icon {
          display: inline-block;
          width: 1.5em;
          height: 1.5em;
          vertical-align: middle;
          content: "";
          background: no-repeat center center;
          background-size: 100% 100%;
        }
        @media (max-width: 575.98px) {
          .navbar-expand-sm > .container,
          .navbar-expand-sm > .container-fluid {
            padding-right: 0;
            padding-left: 0;
          }
        }
        @media (min-width: 576px) {
          .navbar-expand-sm {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
          }
          .navbar-expand-sm .navbar-nav {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
          }
          .navbar-expand-sm .navbar-nav .dropdown-menu {
            position: absolute;
          }
          .navbar-expand-sm .navbar-nav .dropdown-menu-right {
            right: 0;
            left: auto;
          }
          .navbar-expand-sm .navbar-nav .nav-link {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
          }
          .navbar-expand-sm > .container,
          .navbar-expand-sm > .container-fluid {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
          }
          .navbar-expand-sm .navbar-collapse {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-preferred-size: auto;
            flex-basis: auto;
          }
          .navbar-expand-sm .navbar-toggler {
            display: none;
          }
          .navbar-expand-sm .dropup .dropdown-menu {
            top: auto;
            bottom: 100%;
          }
        }
        @media (max-width: 767.98px) {
          .navbar-expand-md > .container,
          .navbar-expand-md > .container-fluid {
            padding-right: 0;
            padding-left: 0;
          }
        }
        @media (min-width: 768px) {
          .navbar-expand-md {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
          }
          .navbar-expand-md .navbar-nav {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
          }
          .navbar-expand-md .navbar-nav .dropdown-menu {
            position: absolute;
          }
          .navbar-expand-md .navbar-nav .dropdown-menu-right {
            right: 0;
            left: auto;
          }
          .navbar-expand-md .navbar-nav .nav-link {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
          }
          .navbar-expand-md > .container,
          .navbar-expand-md > .container-fluid {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
          }
          .navbar-expand-md .navbar-collapse {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-preferred-size: auto;
            flex-basis: auto;
          }
          .navbar-expand-md .navbar-toggler {
            display: none;
          }
          .navbar-expand-md .dropup .dropdown-menu {
            top: auto;
            bottom: 100%;
          }
        }
        @media (max-width: 991.98px) {
          .navbar-expand-lg > .container,
          .navbar-expand-lg > .container-fluid {
            padding-right: 0;
            padding-left: 0;
          }
        }
        @media (min-width: 992px) {
          .navbar-expand-lg {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
          }
          .navbar-expand-lg .navbar-nav {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
          }
          .navbar-expand-lg .navbar-nav .dropdown-menu {
            position: absolute;
          }
          .navbar-expand-lg .navbar-nav .dropdown-menu-right {
            right: 0;
            left: auto;
          }
          .navbar-expand-lg .navbar-nav .nav-link {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
          }
          .navbar-expand-lg > .container,
          .navbar-expand-lg > .container-fluid {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
          }
          .navbar-expand-lg .navbar-collapse {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-preferred-size: auto;
            flex-basis: auto;
          }
          .navbar-expand-lg .navbar-toggler {
            display: none;
          }
          .navbar-expand-lg .dropup .dropdown-menu {
            top: auto;
            bottom: 100%;
          }
        }
        @media (max-width: 1199.98px) {
          .navbar-expand-xl > .container,
          .navbar-expand-xl > .container-fluid {
            padding-right: 0;
            padding-left: 0;
          }
        }
        @media (min-width: 1200px) {
          .navbar-expand-xl {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
          }
          .navbar-expand-xl .navbar-nav {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
          }
          .navbar-expand-xl .navbar-nav .dropdown-menu {
            position: absolute;
          }
          .navbar-expand-xl .navbar-nav .dropdown-menu-right {
            right: 0;
            left: auto;
          }
          .navbar-expand-xl .navbar-nav .nav-link {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
          }
          .navbar-expand-xl > .container,
          .navbar-expand-xl > .container-fluid {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
          }
          .navbar-expand-xl .navbar-collapse {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-preferred-size: auto;
            flex-basis: auto;
          }
          .navbar-expand-xl .navbar-toggler {
            display: none;
          }
          .navbar-expand-xl .dropup .dropdown-menu {
            top: auto;
            bottom: 100%;
          }
        }
        .navbar-expand {
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
        }
        .navbar-expand > .container,
        .navbar-expand > .container-fluid {
          padding-right: 0;
          padding-left: 0;
        }
        .navbar-expand .navbar-nav {
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
        }
        .navbar-expand .navbar-nav .dropdown-menu {
          position: absolute;
        }
        .navbar-expand .navbar-nav .dropdown-menu-right {
          right: 0;
          left: auto;
        }
        .navbar-expand .navbar-nav .nav-link {
          padding-right: 0.5rem;
          padding-left: 0.5rem;
        }
        .navbar-expand > .container,
        .navbar-expand > .container-fluid {
          -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
        }
        .navbar-expand .navbar-collapse {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-preferred-size: auto;
          flex-basis: auto;
        }
        .navbar-expand .navbar-toggler {
          display: none;
        }
        .navbar-expand .dropup .dropdown-menu {
          top: auto;
          bottom: 100%;
        }
        .navbar-toggler {
          fill: ${PRIMARY};
          margin-left: 15px;
        }
        .navbar-toggler svg {
          width: 25px;
        }
        .mr-auto {
          margin-right: auto;
        }
        .ml-auto {
          margin-left: auto;
        }
        .nav-item {
          font-size: 14px;
          font-weight: 400;
          padding: 10px 25px;
        }
        .nav-item a {
          color: #111;
        }
        .nav-item-links {
          font-size: 14px;
          font-weight: 400;
          color: #111;
          background-color: transparent;
          text-transform: uppercase;
          padding: 0;
          margin: 0;
          border: 0;
          cursor: pointer;
        }
        .nav-item-links:hover,
        .nav-item a:hover {
          color: ${PRIMARY};
          text-decoration: none;
        }

        @media (max-width: 1200px) and (min-width: 990px) {
          .nav-item {
            padding: 10px 18px;
          }
        }
        .get-quote-mobile {
          display: none;
        }
        @media (max-width: 990px) {
          .navbar-collapse {
            display: none;
          }
          .hide-990 {
            display: none;
          }
          .get-quote-mobile {
            display: block;
            margin-left: auto;
          }
        }
      `}</style>
    </>
  );
};
export default Header;
