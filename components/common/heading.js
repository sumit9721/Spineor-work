import React from "react";

function Heading(props) {
  return (
    <React.Fragment>
        <div>
            <h1>{props.heading}</h1>
        </div>
  <style jsx>{`
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    padding: 10px;
  }
  `}</style>
    </React.Fragment>
  );
}
export default Heading;
