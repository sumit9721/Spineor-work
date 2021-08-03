import Link from "next/link";
import ServiceDrop from "../common/ServiceDropdown/service-dropdown"
const ServiceLinks = () => {
  return (
    <>
    <ServiceDrop/>
      {/* <div className="row">
        <div className="col-sm-4">
          <h4>Website Development</h4>
          <ul className="service-links">
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
          </ul>
        </div>
        <div className="col-sm-4">
          <h4>E-Commerce Web Development</h4>
          <ul className="service-links">
            <li>
              <Link href="/who-we-are">
                <a>Magento Development</a>
              </Link>
            </li>
            <li>
              <Link href="/who-we-are">
                <a>WooCommerce Development</a>
              </Link>
            </li>
            <li>
              <Link href="/who-we-are">
                <a>Shopify Development</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h4>Digital Marketing</h4>
          <ul className="service-links">
            <li>
              <Link href="/who-we-are">
                <a>SEO Marketing</a>
              </Link>
            </li>
            <li>
              <Link href="/who-we-are">
                <a>SMM Marketing</a>
              </Link>
            </li>
            <li>
              <Link href="/who-we-are">
                <a>PPC Marketing</a>
              </Link>
            </li>
            <li>
              <Link href="/who-we-are">
                <a>Google Analytics</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <h4>JAVA Development</h4>
          <ul className="service-links">
            <li>
              <Link href="/who-we-are">
                <a>Enterprise Java Development</a>
              </Link>
            </li>
            <li>
              <Link href="/who-we-are">
                <a>Java CMS Services</a>
              </Link>
            </li>
            <li>
              <Link href="/who-we-are">
                <a>Java Mobile Development</a>
              </Link>
            </li>
            <li>
              <Link href="/who-we-are">
                <a>Java Migration</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h4>Web and Graphics Design</h4>
          <ul className="service-links">
            <li>
              <Link href="/who-we-are">
                <a>UI/UX Design</a>
              </Link>
            </li>
            <li>
              <Link href="/who-we-are">
                <a>WooCommerce Development</a>
              </Link>
            </li>
            <li>
              <Link href="/who-we-are">
                <a>Shopify Development</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-sm-4">
          <h4>CMS Development</h4>
          <ul className="service-links">
            <li>
              <Link href="/who-we-are">
                <a>Wordpress Development</a>
              </Link>
            </li>
            <li>
              <Link href="/who-we-are">
                <a>OpenCart Development</a>
              </Link>
            </li>
          </ul>
        </div>
      </div> */}

      <style jsx>{`
      h4{
          font-size:24px;
          color: #bbb
          padding-right:30%;
          min-height: 50px;
          margin-bottom:20px;
      }
        .service-links {
            padding:0;
            margin:0 0 50px 0;
        }
        .service-links li {
         font-size: 16px;
          list-style: none;
        }
        .service-links li a {
            color: #999;
        }
        .service-links li a:hover {
            text-decoration: none;
            color: #fff;
        }
      `}</style>
    </>
  );
};

export default ServiceLinks;
