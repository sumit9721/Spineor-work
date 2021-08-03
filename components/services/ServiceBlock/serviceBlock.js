import React from "react";
import Button from "../../form/button"
function ServiceBlock(props) {
    return (
        <React.Fragment>
            <section className="banner">
                <div className="container">
                    {props.alignment === "right" ? (
                        <div className="row">
                            <div className="col-md-6">
                                <div className="center">
                                    <h1>{props.heading}</h1>
                                    <p>{props.content}</p>
                                    {props.button ? (
                                        <div className="button-container">
                                            <Button primary outline amp href="/">
                                                {props.button}
                                            </Button>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className="image" src={props.image}></img>
                            </div>
                        </div>
                    ) : (
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="image" src={props.image}></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="center">
                                        <h1>{props.heading}</h1>
                                        <p>{props.content}</p>
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
                        )
                    }
                </div>
            </section>
            <style jsx>{`

            .banner {
                width: 100%;
                height: 100vh;
            }
            
            .center {
                padding: 10px 80px;
            }

            h2 {
                text-align: center;
            }
            h1 {
                font-size: 48px;
                line-height: 49px;
            }
            p {
                font-weight: 300;
                font-size: 20px;
                text-align: justify;
                padding-left: 10px;
                padding-top: 20px;
            }

            .image {
                width: 580px;
                height: 503px;
            }

            .button-container {
                margin-top: 40px 
            }

            @media only screen and (min-width: 1280px) {

              }
      
      
              @media (max-width: 1279px) and (min-width: 990px) {

                h1 {
                    font-size: 48px;
                }
                p {
                    font-weight: 300;
                    font-size: 24px;
                    text-align: justify;
                    padding-left: 10px;
                    padding-top: 20px;
                }
              }
      
      
              @media (max-width: 989px) and (min-width: 768px) {

              }
      
      
              @media (max-width: 767px) and (min-width: 580px) {

              }
      
      
              @media (max-width: 579px) and (min-width: 320px) {
               .image { 
                width: 240px;
                height: 103px;
            }
              }
       
           `}</style>
        </React.Fragment>
    );
}
export default ServiceBlock;
