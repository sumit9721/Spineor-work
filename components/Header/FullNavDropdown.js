import Close from "../../public/svg/Close";
import AboutLinks from "./AboutLinks";
import ServiceLinks from "./ServiceLinks";

const FullNavDropdown = (props) => {
  const id = `tap:` + props.id + `.toggleVisibility`;
  return (
    <>
      <section className="full-navigation-container">
        <button className="close" type="button" aria-label="about" on={id}>
          <Close />
        </button>
        <div className="full-navigation-inner">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="main-header">
                  <h3>{props.title}</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="main-links">
                  {props.title === "About" ? <AboutLinks /> : <ServiceLinks />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        body {
          overflow: hidden;
        }
        .full-navigation-container {
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: 100;
          background: #111;
        }
        .full-navigation-inner {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: 550px;
          height: 100vh;
        }
        .full-navigation-container h3 {
          padding-top: 30px;
          padding-bottom: 50px;
          font-size: 72px;
          color: #ccc;
          display: block;
          text-align: center;
          font-weight: 300;
        }
        .close {
          background: none;
          border: 0;
          padding: 0;
          position: absolute;
          right: 30px;
          top: 30px;
          width: 30px;
          height: 30px;
          z-index: 110;
        }
        :global(.full-navigation-container .close svg) {
          width: 100%;
          fill: #999;
        }
      `}</style>
    </>
  );
};

export default FullNavDropdown;
