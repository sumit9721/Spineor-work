import React from "react";

function EventCelebrations(props) {
    return (
        <React.Fragment>
            <div>
                <h6>{props.heading}</h6>
                <p>{props.content}</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="md-col-3">
                        <div className="image">
                            {props.years} 
                        </div>
                    </div>
                    <div className="md-col-3">
                        <img className="image" src={props.image1}></img>
                    </div>
                    <div className="md-col-3">
                        <img className="image" src={props.image2}></img>
                    </div>
                    <div className="md-col-3">
                        <img className="image" src={props.image3}></img>
                    </div>
                </div>
            </div>
            <style jsx>{`
  h6 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    color: #184A88;
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 18px;
    line-height: 21px; 
  }
  .image {
    width: 280px;
    height: 280px;
  }
  .number {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 1280px) {
    .image {
        width: 280px;
        height: 280px;
      }
  }


  @media (max-width: 1279px) and (min-width: 990px) {
    .image {
        width: 240px;
        height: 240px;
      }
  }


  @media (max-width: 989px) and (min-width: 768px) {
    .image {
        width: 180px;
        height: 180px;
      }
  }


  @media (max-width: 767px) and (min-width: 580px) {
    .image {
        align-items: center;
        width: 300px;
        height: 300px;
      }
  }


  @media (max-width: 579px) and (min-width: 320px) {

  }

  `}</style>
        </React.Fragment>
    );
}
export default EventCelebrations;