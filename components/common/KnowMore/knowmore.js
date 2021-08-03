import React from "react";
import Whitepaper from "../../../public/svg/Whitepaper";
import Button from "../../form/button"
import MarkupContent from "../MarkupContent"
function Knowmore(props) {
    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>{props.sectionTitle}</h5>
                            <h1>{props.sectionSubtitle}</h1>
                            <MarkupContent
                                markupContent={props.fullDescription}
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="center">
                                <Whitepaper />
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
            </section>
            <style jsx>{`
      h1 {
        font-size: 48px;
        line-height: 56px;
      }

      h5 {
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        line-height: 21px;
        color: #184A88;
      }

      .center {
          padding: 50px 150px;
      }
      
      .button-container {
          padding: 15px 13px;
      }

      @media only screen and (min-width: 1280px) {
        .center {
            padding: 50px 150px;
        }
        
        .button-container {
            padding: 15px 13px;
        }
      }


      @media (max-width: 1279px) and (min-width: 990px) {
        h1 {
            font-size: 38px;
            line-height: 36px;
          }

        p {
            text-align: justify;
          }
    
        h5 {
            font-style: normal;
            font-size: 18px;
            line-height: 21px;
            color: #184A88;
          }
        .center {
            padding: 50px 110px;
        }
        
        .button-container {
            padding: 15px 50px;
        }
      }


      @media (max-width: 989px) and (min-width: 768px) {
        h1 {
            font-size: 38px;
            line-height: 36px;
          }

        // p {
        //     text-align: justify;
        //   }
    
        h5 {
            font-style: normal;
            font-size: 18px;
            line-height: 21px;
            color: #184A88;
          }
        .center {
            padding: 50px 60px;
        }
        
        .button-container {
            padding: 15px 50px;
        }
      }


      @media (max-width: 767px) and (min-width: 580px) {
        h1 {
            font-size: 38px;
            line-height: 36px;
          }

        p {
            text-align: justify;
          }
    
        h5 {
            font-style: normal;
            font-size: 18px;
            line-height: 21px;
            color: #184A88;
          }
        .center {
            align-items: center;
        }

        .button-container {
            padding: 15px;
        }
      }


      @media (max-width: 579px) and (min-width: 320px) {
        h1 {
            font-size: 32px;
            line-height: 36px;
          }

        p {
            text-align: justify;
          }
    
        h5 {
            font-style: normal;
            font-size: 16px;
            line-height: 21px;
            color: #184A88;
          }
          .center {
              width: 10px;
              // align-items: center;
        }
      }

      `}</style>
        </React.Fragment>
    );
}
export default Knowmore;
