import React from "react";
import { BANNER_FONTSIZE_H1_LARGE } from "../css-config";
import { BANNER_FONTSIZE_H1_VERY_LARGE } from "../css-config";
import {BANNER_FONTSIZE_PARA_LARGE} from "../css-config";
import {BANNER_FONTSIZE_H1_MEDIUM} from "../css-config";
import {BANNER_FONTSIZE_H1_SMALL} from "../css-config";
import {BANNER_FONTSIZE_H1_PARA_MEDIUM} from "../css-config";
import {BANNER_FONTSIZE_H1_VERY_SMALL} from "../css-config";
import {BANNER_FONTSIZE_H1_PARA_SMALL} from "../css-config";
import Button from "../form/button";
function Topbanner(props) {
  return (
    <React.Fragment>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className= "center">
              <h1 className={props.heading}>{props.title}</h1>
              <h3>{props.des}</h3>
              </div>
            </div>
            <div className="col-md-6">
            <div className= "center">
            <div className= "description-box">
              <p>{props.content}</p>
              {props.button ? (
                    <div className="button-container">
                      <Button primary outline amp >
                        {props.button}
                      </Button>
                    </div>
                  ) : null}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .banner {
          width: 100%;
          height: 100vh;  
        }

        h1 {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
        }

        p {
          font-family: Roboto;
          font-style: normal;
        }

        .description-box {
          padding: 40px;
        }

        @media only screen and (min-width: 1280px) {
          .center {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
          }
          h1 {
            font-size: ${BANNER_FONTSIZE_H1_LARGE};
          }
          p {
            font-size: ${BANNER_FONTSIZE_PARA_LARGE};
          }
          h1.medium {
            font-size: ${BANNER_FONTSIZE_H1_MEDIUM};
          }
          h1.large {
            font-size: ${BANNER_FONTSIZE_H1_LARGE};
          }
          h1.verylarge {
            font-size: ${BANNER_FONTSIZE_H1_VERY_LARGE};
          }
        }


        @media (max-width: 1279px) and (min-width: 990px) {
          .center {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
          }

          h1.verylarge {
            font-size: ${BANNER_FONTSIZE_H1_VERY_LARGE};
          }

          h1.large {
            font-size: ${BANNER_FONTSIZE_H1_MEDIUM};
          }

          h1.medium {
            font-size: ${BANNER_FONTSIZE_H1_SMALL};
          }

          p {
            font-size: ${BANNER_FONTSIZE_PARA_LARGE};
          }
        }


        @media (max-width: 989px) and (min-width: 768px) {
          .center {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
          }

          h1 {
            font-size: ${BANNER_FONTSIZE_H1_SMALL};
          }

          h1.medium {
            font-size: ${BANNER_FONTSIZE_H1_VERY_SMALL};
          }

          p {
            font-size:${BANNER_FONTSIZE_H1_PARA_SMALL};
          }
        }


        @media (max-width: 767px) and (min-width: 580px) {

          .banner {
            width:100%;
            height: 100vh;
            text-align: center;
          }

          h1.medium {
            font-size: ${BANNER_FONTSIZE_H1_SMALL};
          }

          h1.large {
            font-size: ${BANNER_FONTSIZE_H1_SMALL};
          }

          h1.verylarge {
            font-size: ${BANNER_FONTSIZE_H1_MEDIUM};
          }

          p {
            font-size: ${BANNER_FONTSIZE_H1_PARA_MEDIUM};
          }
        }


        @media (max-width: 579px) and (min-width: 320px) {
          .center {
            width: 100%;
            // height: 100vh;
            text-align: center;
          }
          h1 {
            font-size: ${BANNER_FONTSIZE_H1_VERY_SMALL};
            
          }
          p {
            font-size: ${BANNER_FONTSIZE_H1_PARA_SMALL};
          }
        }
      `}</style>
    </React.Fragment>
  );
}
export default Topbanner;
