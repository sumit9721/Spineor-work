import React from "react";
import Ellipse from "./Ellipse";

 
function Work(props){
    return(
        <React.Fragment>
        <section className={`out ${props.className}`}>
        <section className={`inner ${props.myclassname}`}> 
          {props.paragraph}
          </section>
          <section className={props.newclass}>{props.text}</section>
        </section>
        <Ellipse className="ellipse1"/>
        <Ellipse className="ellipse2"/>
        <Ellipse className="ellipse3"/>
        <Ellipse className="ellipse4"/>
        <section  className={props.liststyle}>{props.list}</section>
        <Ellipse className="ellipse5"/>
        <Ellipse className="ellipse6"/>
        <Ellipse className="ellipse7"/>
      
        <style jsx>{`   
        .outwrap{
            position: absolute;
            width: 690px;
            height: 243px;
            left: 650px;
            top: 1409px;
            background: #FFFFFF;
          }        
          .innerwrap {
            position: absolute;
            width: 567px;
            height: 287px;
            left: 50px;
            top: 91px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 21px;
            color: #333333;
            
          }
          .outerwrapper{
            position: absolute;
            width: 650px;
            height: 676px;
            left: 650px;
            top: 2290px;
            background: #FFFFFF;

          }
          .innerwrapper{
            padding:40px 
          }
          .innertext{ 
            position: absolute;
            width: 213px;
            height: 206px;
            left: 770px;
            top: 2710px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 157.2%;
            color: #333333;
          }
          .myclass{
            padding-top:60px;
            padding-left:60px;
            width: 247px;
            height: 206px;
            left: 738px;
            top: 2696px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 157.2%;
            color: #333333;
           
          }   
          .mylist{
            position: absolute;
            width: 213px;
            height: 206px;
            left: 1017px;
            top: 2543px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 157.2%;
            color: #333333;
          
          }  
          .envelope{
            position: absolute;
            width: 699px;
            height: 243px;
            left: 640px;
            top: 1394px;
            background: #FFFFFF;
          }
          .myinnerwrap{
              padding:40px;
              width: 567px;
              height: 213px;
              left: 693px;
              top: 1466px;
              font-family: Roboto;
              font-style: normal;
              font-weight: 300;
              font-size: 18px;
              line-height: 21px;
              color: #333333;
          }
          @media screen and (max-width: 600px) {
            .outwrap{
              position: absolute;
              width: 334px;
              height: 479px;
              left: 13px;
              top: 909px;
              background: #FFFFFF;
              border: 1px solid #F1F1F1;
              box-sizing: border-box;
          
            }
            .innerwrap{
             position:absolute;
              width: 290px;
              height: 352px;
              left: 30px;
              top: 46px;      
              font-family: Roboto;
              font-style: normal;
              font-weight: 300;
              font-size: 18px;
              line-height: 21px;  
              color: #333333;
              word-spacing:0.5px;
            }
            .outerwrapper{
              position: absolute;
              width: 334px;
              height: 528px;
              left: 12px;
              top: 1749px;
              background: #FFFFFF;
              border: 1px solid #F1F1F1;
              box-sizing: border-box;
            }
           
            .innertext{
              position: absolute;
              width: 213px;
              height: 206px;
              left: 71px;
              top: 1633px;
              font-family: Roboto;
              font-style: normal;
              font-weight: 300;
              font-size: 16px;
              line-height: 157.2%;  
              color: #333333;
            }
           .innerwrapper{
             padding:20px;
           }
            .myclass{
              left:52px;
              width:248px;
              padding-top:0px;
            }
            .mylist{
              display:none;
            }
          }
            `}</style>
        </React.Fragment>
    )
}
export default Work