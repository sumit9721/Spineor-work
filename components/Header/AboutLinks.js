import Link from "next/link";

const AboutLinks = () => {
  return (
    <>
      <ul className="about-links">
        <li>
          <Link href="/about">
            <a>
              <span></span>Who We Are
            </a>
          </Link>
        </li>
        <li>
          <Link href="our-infrastructure">
            <a>
              <span></span>Our Infrastructure
            </a>
          </Link>
        </li>
        <li>
          <Link href="/our-values">
            <a>
              <span></span>Our Values
            </a>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <a>
              <span></span>Events & Celebration
            </a>
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <a>
              <span></span>FAQ
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .about-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 0;
          margin: 0;
        }
        .about-links li {
          width: 33%;
          list-style: none;
          margin-bottom: 80px;
        }

        .about-links li a {
          color: #999;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .about-links li a:hover {
          text-decoration: none;
          color: #fff;
        }
        .about-links li a span {
          display: inline-block;
          width: 42px;
          height: 42px;
          margin-right: 15px;
          background: #393;
        }
      `}</style>
    </>
  );
};

export default AboutLinks;
