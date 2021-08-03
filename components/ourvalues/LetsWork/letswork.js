import React from "react";

function Letswork(props) {
    return (
        <React.Fragment>
            <section className="banner">
                <div className="container">
                    {props.alignment === "right" ? (
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="step">
                                            <p>{props.step}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <h2>{props.heading}</h2>
                                        <p>{props.content}</p>
                                    </div>
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
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="step">
                                                <p>{props.step}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                        <h2>{props.heading}</h2>
                                        <p>{props.content}</p>
                                        </div>
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
            h2 {
                font-size: 42px;
            }
            .step {
                width: 70px;
                height: 100px;
                background-color: #184A88;
                font-weight: bold;
                font-size: 14px;
                text-align: center;
                color: #FFFFFF;
                display: flex;
                align-items: center;
            }
            p {
                font-family: Roboto;
                font-style: normal;
                font-weight: 300;
                font-size: 24px;
                line-height: 28px;
                text-align: justify;
            }
            .image {
                width: 561px;
                height: 374px;
            }

           `}</style>
        </React.Fragment>
    );
}
export default Letswork;
