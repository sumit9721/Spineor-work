import Java from "../Home/Java"

function Cart (props){
    return(
     
        <div>
        <div className={`outer ${props.className}`}></div>
        <div className={`inner ${props.myclassname}`}>{props.heading}</div>
        <div className={`small ${props.newclassname}`}>{props.children}</div> 
        <div className={props.class} >{props.header}</div>
        <style jsx>{`
          .outer{
            background: #184A88;
            position: absolute; 
          }
          .small{
            position: absolute;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 28px;
            color: #FFFFFF;
          }
          .inner{
            position: absolute;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 48px;
            line-height: 56px;     
            color: #FFFFFF
          }
          .outers{
            width: 617px;
            height: 399px;
            left: 33px;
            top: 1251px; 
          }
        
          .inners{
            width: 540.85px;
            height: 113px;
            left: 67.17px;
            top: 1325px;
          }
          .small_inner{
            width: 525.23px;
            height: 146px;
            left: 73.03px;
            top: 1458px;
          }
          .outer_wrap{
            position: absolute;
            width: 617px;
            height: 399px;
            left: 33px;
            top: 2351px;
            background: #184A88;
          }
          .inner_wrap{
            padding-right:25px;
            position: absolute;
            width: 349px;
            height: 113px;
            left: 221px;
            top: 2457px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 48px;
            line-height: 56px;
            color: #FFFFFF;
          }
          .inner_text{
            padding-right:15px;
            width: 525.23px;
            height: 146px;
            left: 84px;
            top: 2604px;
          }
        .out{
          width: 617px;
          height: 353px;
          left: 34px;
          top: 1284px;
        }
        .heading{
          position: absolute;
          width: 517px;
          height: 181px;
          left: 68px;
          top: 1362px;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 48px;
          line-height: 56px;
          color: #FFFFFF;

        }
        @media screen and (max-width: 600px) {
         .outers{
          position: absolute;
          width: 333.6px;
          height: 175px;
          left: 13px;
          top: 733px;
          background: #184A88;
         } 
         .inners{
          position: absolute;
          width: 310.93px;
          height: 23px;
          left: 41.07px;
          top: 755px;   
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;   
          color: #FFFFFF;
         }
         .small_inner{
          position: absolute;
          width: 289.34px;
          height: 88px;
          left: 39.99px;
          top: 799px;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          color: #FFFFFF;
         }
         .outer_wrap{
          position: absolute;
          width: 333px;
          height: 170px;
          left: 13px;
          top: 1578px;
          background: #184A88;
         }
         .inner_wrap{
          position: absolute;
          width: 157px;
          height: 113px;
          left: 105px;
          top: 1615px;    
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;
          color: #FFFFFF;
         }
         .inner_text{     
          position: absolute;
          width: 296px;
          height: 72px;
          left: 37px;
          top: 1669px;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          color: #FFFFFF;
         }
        }
        `}</style>
        </div>
    )
}
export default Cart