import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardImg,
} from "reactstrap";

function Insights(props) {
  return (
    <React.Fragment>
      <div>
        <Row>
          <Col md="6">
            <div className="insight-box">
              <CardImg
                top
                width="100%"
                src={props.image}
                alt="Card image cap"
              />
              <div class="text-block">
                <h4>Nature</h4>
                <p>What a beautiful sunrise</p>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="insight-box">
              <CardImg
                top
                width="100%"
                src={props.image}
                alt="Card image cap"
              />
            </div>
          </Col>
          {/* <Card>
            <CardImg top width="100%" src={props.image} alt="Card image cap" />
            <Card body>
              <CardTitle>John Doe</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Card>
          <Col md="6">
            <Card>
              <CardImg
                top
                width="100%"
                src={props.image}
                alt="Card image cap"
              />
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
              </Card>
            </Card> */}
          {/* </Col> */}
        </Row>
      </div>
      <style jsx>{`
            .insight-box {
                width: 100%;
                height: 100vh;
                background: #F0F0F0;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
            }
            .image {
                width= 100%
                height= 100vh;
            }
            body {
                background-color: gray;
            }
            `}</style>
    </React.Fragment>
  );
}
export default Insights;
