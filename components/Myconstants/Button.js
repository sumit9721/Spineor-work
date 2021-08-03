function Button(props) {
  return (
    <React.Fragment>
    <div className={`outer ${props.class}`}>
        <div className={`inner ${props.myclass}`}>
          {props.label}
      </div>
      </div>
      <style jsx>{`
      .outer {
        position:absolute;
        background: #FFFFFF;
        border: 2px solid #184A88;
        box-sizing: border-box;
        border-radius: 4px;
      } 
      .outers{
        width: 194px;
        height: 50px;
        left: 756px;
        top: 504px;
      }
      .myouter{
        width: 158px;
        height: 50px;
        left: 658px;
        top: 640px;  
      }
      .inner { 
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #184A88;
        display: flex;
        align-items: center;
        text-align: center; 
        padding-left:30px;
        padding-top:17px;
      }
      .inners{
        width: 194px;
        height: 19px;
        left: 894px;
        top: 519px;
       
      }
      .myinner{
        width: 140px;
        height: 19px;
        left: 692px;
        top: 583px;   
      }
      .btnwrap{
              width: 158px;
              height: 50px;
              left: 650px;
              top: 554px; 
      }
      .btninner{
        width: 100px;
        height: 19px;
        left: 688px;
        top: 569px;
        
      }
      @media screen and (max-width: 600px) {
        .outers{
          position: absolute;
          width: 194px;
          height: 50px;
          left: 77px;
          top: 400px;
          background: #FFFFFF;
          border: 2px solid #184A88;
          box-sizing: border-box;
          border-radius: 4px;
        }
        .inners{
          width: 118px;
          height: 9px;
          left: 115px;
          top: 400px;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          color: #184A88;
        }
      }
      `}</style>
    </React.Fragment>
  );
 }

export default Button