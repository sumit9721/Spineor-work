import { PRIMARY } from "../../css-config";
import Button from "../../form/button";
import MarkupContent from "../MarkupContent";

export default function SectionCard({ ...props }) {
  return (
    <div className="section-card-wrapper">
      <div className="container-box">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 pr0">
              <div className="left-blue-panel">
                <h3>{props.sectionTitle}</h3>
                <p>{props.sectionSubtitle}</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 pl0 ">
              <div className="right-white-panel">
                <MarkupContent
                  markupContentFull={props.fullDescription}
                  markupContentSmall={props.shortDescription}
                />
                {props.button ? (
                  <div className="button-container">
                    <Button primary outline amp href="/">
                      {props.button}
                    </Button>
                  </div>
                ) : null}
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
        .section-card-wrapper {
          display: block;
          margin-bottom: 250px;
          position: relative;
          height: 700px;
          background: url(${props.image});
          background-repeat: no-repeat;
          background-position: top center;
          background-size: cover;
        }
        .container-box {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
        }

        .left-blue-panel {
          margin: 0;
          padding: 60px 40px;
          background: ${PRIMARY};
        }
        .left-blue-panel h3 {
          color: #fff;
          font-size: 48px;
          font-weight: 300;
          line-height: normal;
          margin-bottom: 20px;
        }
        .left-blue-panel p {
          font-size: 22px;
          color: #fff;
          line-height: normal;
        }
        .right-white-panel {
          background: #fff;
          margin: 100px 0 0 0;
          padding: 60px 40px;
          position: absolute;
          right: 15px;
        }
        .button-container {
          margin-top: 50px;
        }

        @media (max-width: 989px) and (min-width: 768px) {
          .section-card-wrapper {
            height: 550px;
            margin-bottom: 150px;
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
          .section-card-wrapper {
            height: auto;
            margin-bottom: 50px;
          }
          .container-box {
            position: relative;
            bottom: unset;
            left: unset;
          }
          .left-blue-panel {
            margin-top: 250px;
            padding: 20px;
          }
          .right-white-panel {
            margin: 0;
            padding: 20px;
            position: relative;
            right: unset;
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
