import Link from "next/link";
import withPure from "../hoc/pure";
import Facebook from "../../public/svg/Facebook";
import Linkedin from "../../public/svg/Linkedin";
import Youtube from "../../public/svg/Youtube";


export default withPure(() => (
  <>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/success-stories">
                  <a>Success Stories</a>
                </Link>
              </li>
              <li>
                <Link href="/insights">
                  <a>Insights</a>
                </Link>
              </li>
              <li>
                <Link href="/career">
                  <a>Career</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <h4>Services</h4>
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>Open Source Implementation</li>
                  <li>Scala Programming</li>
                  <li>Restful API'S</li>
                  <li>Automated Devops Deployment</li>
                  <li>Big Data Analytics</li>
                  <li>Native Apps Building</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>Full/Mean Stack Development</li>
                  <li>Third Party Integrations</li>
                  <li>Crypto Currency Development</li>
                  <li>Java Programming</li>
                  <li>Us Staffing</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <h4>Contact</h4>
            <ul>
              <li>+91(991)502-1146</li>
              <li>hr@spineor.com</li>
            </ul>
            <ul className="flex-container">
              <li className="facebook"><Facebook /></li>
              <li className="linkedin"><Linkedin /></li>
              <li className="youtube"><Youtube /></li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 center">
            <div className="copyright">Copyright @2020-Spineor.com</div>
          </div>
        </div>
      </div>
    </footer>
    <style jsx>{`
      footer {
        background: #000;
        padding: 30px 0;
      }
      h4 {
        color: #FFFFFF;
        line-height: 200%;
        margin-left: 20px;
      }
      a {
        color: #EBEBEB;
      }
      ul {
        list-style-type: none;
        color: #EBEBEB;
      }
    li {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 200%;
      margin-left: -18px;
    }

    .flex-container {
      display: flex;
      flex-direction: row;
      margin-top: 50px;
    }

    .facebook {
      width: 40px;
      height: 40px;
      background-color: white;
      margin-right: 25px;
      background-color: white;
      border: 2px solid #F1F1F1;
      box-sizing: border-box;
      border-radius: 4px;
    }

    .linkedin {
      width: 40px;
      height: 40px;
      background-color: white;
      margin-right: 25px;
      background-color: white;
      border: 2px solid #F1F1F1;
      box-sizing: border-box;
      border-radius: 4px;
    }

    .youtube {
      width: 40px;
      height: 40px;
      background-color: white;
      background-color: white;
      border: 2px solid #F1F1F1;
      box-sizing: border-box;
      border-radius: 4px;
    }

    .copyright {
      margin: 0 auto;
      color: #FFFFFF;
    }

    .center {
      text-align: center;
    }


    `}</style>
  </>
));
