import { PRIMARY } from "../../css-config";
import Button from "../../form/button";
import MarkupContent from "../MarkupContent";

export default function ServiceItem({ ...props }) {
  return (
    <div className="service-card">
      <div className="container-box">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 pr0">
              <div className="left-blue-panel">
                <h3>{props.itemData.sectionTitle}</h3>
                <p>{props.itemData.sectionSubtitle}</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 pl0 ">
              <div className="right-white-panel">
                <div className="right-white-panel-inner">
                  <MarkupContent
                    markupContentFull={props.itemData.fullDescription}
                    markupContentSmall={props.itemData.shortDescription}
                  />
                  {props.itemData.button ? (
                    <div className="button-container">
                      <Button primary outline amp href="/">
                        {props.itemData.button}
                      </Button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 767px) {
          .pr0 {
            padding-right: 0;
          }
          .pl0 {
            padding-left: 0;
          }
        }
        .pl {
          position: relative;
        }
        .service-card {
          width: 100%;
          height: 600px;
        }
        .container-box {
          height: 600px;
          display: flex;
          align-items: flex-end;
        }

        .left-blue-panel {
          margin: 125px 0 0 0;
          padding: 60px 40px;
          background: ${PRIMARY};
          height: 280px;
        }
        .left-blue-panel h3 {
          color: #fff;
          font-size: 42px;
          font-weight: 300;
          line-height: normal;
          margin-bottom: 20px;
          white-space: normal;
        }
        .left-blue-panel p {
          font-size: 22px;
          color: #fff;
          line-height: normal;
          white-space: normal;
        }
        .right-white-panel {
          position: relative;
          height: 600px;
        }
        .right-white-panel-inner {
          background: #fff;
          margin: 0;
          padding: 60px 40px;
          width: 100%;
          min-height: 100%;
        }
        .button-container {
          margin-top: 50px;
          white-space: break-spaces;
        }

        @media (max-width: 1200px) and (min-width: 990px) {
          .right-white-panel {
            position: relative;
            height: 600px;
          }

          .left-blue-panel h3 {
            font-size: 32px;
          }
          .button-container {
            margin-top: 10px;
          }
        }

        @media (max-width: 989px) and (min-width: 768px) {
          .right-white-panel {
            position: relative;
            height: 500px;
          }
          .left-blue-panel h3 {
            font-size: 24px;
          }
          .left-blue-panel p {
            font-size: 18px;
          }
          .button-container {
            margin-top: 30px;
          }
        }
        @media (max-width: 767px) {
          .container-box {
            position: relative;
            bottom: unset;
            left: unset;
          }
          .left-blue-panel {
            margin-top: 250px;
            padding: 20px;
            height: auto;
          }
          .right-white-panel {
            margin: 0;
            padding: 0px;
            height: auto;
          }
          .right-white-panel-inner {
            padding: 20px;
          }
          .left-blue-panel h3 {
            font-size: 20px;
          }
          .left-blue-panel p {
            font-size: 16px;
          }
          .button-container {
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
}
