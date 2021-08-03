function Bigbutton(props){
    const className = `div ${props.type}`
   
    return(
        <React.Fragment>
        <section className={props.className} >
            <section className={props.myclassName}>
             {props.biglabel}
            </section>
          </section>
          <style jsx>{`
          .outer {
            position: absolute;
            width: 345px;
            height: 50px;
            left: 692px;
            top: 1755px;
            background: #FFFFFF;
            border: 2px solid #184A88;
            box-sizing: border-box;
            border-radius: 4px;
          }
          .inner{
              position: absolute;
              width: 272px;
              height: 19px;
              left: 43px;
              top: 14px;
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 19px;
              color: #184A88;
          }
          .outerwrap{
            position: absolute;
            width: 457px;
            height: 50px;
            left: 691px;
            top: 2876px;
            background: #FFFFFF;
            border: 2px solid #184A88;
            box-sizing: border-box;
            border-radius: 4px;
          }
          .innerwrap{
            padding-top:12px;
            padding-left:22px;
            width: 395px;
            height: 19px;
            left: 728px;
            top: 2892px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            color: #184A88;

          }
          .wrapper{
            position: absolute;
            width: 284px;
            height: 50px;
            left: 650px;
            top: 2140px;
            background: #FFFFFF;
            border: 2px solid #184A88;
            box-sizing: border-box;
            border-radius: 4px;
          }
          .innerwrapper{
           padding-top:15px;
           padding-left:15px;
            width: 202px;
            height: 19px;
            left: 688px;
            top: 2155px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #184A88;
          }
          .outlabel{
            position: absolute;
            width: 284px;
            height: 50px;
            left: 101px;
            top: 2778px;
            background: #FFFFFF;
            border: 2px solid #184A88;
            box-sizing: border-box;
            border-radius: 4px;
          }
          .innlabel{
            padding-top:15px;
           padding-left:15px;
            width: 202px;
            height: 19px;
            left: 139px;
            top: 2793px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #184A88;
          }
          .primary{
            position: absolute;
            width: 284px;
            height: 50px;
            left: 650px;
            top: 3453px;
            background: #FFFFFF;
            border: 2px solid #184A88;
            box-sizing: border-box;
            border-radius: 4px
          }
          .secondary{
            padding-top:15px;
             padding-left:15px;
            width: 202px;
            height: 19px;
            left: 688px;
            top: 3468px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #184A88;
          }
          .button_wrapper{
            position: absolute;
            width: 370px;
            height: 49px;
            left: 661px;
            top: 4515px;
            background: #184A88;
            border-radius: 3px;
        }
        .button_text{
            width: 90px;
            height: 48px;
             padding-left:120px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 900;
            font-size: 20px;
            line-height: 23px;
            display: flex;
            align-items: center;
            letter-spacing: 0.1em;
            color: #ffffff;
        }
          @media screen and (max-width: 600px) {
            .outer{
              position: absolute;
              width: 261px;
              height: 66px;
              left: 49px;
              top: 1287px;     
              background: #FFFFFF;
              border: 2px solid #184A88;
              box-sizing: border-box;
              border-radius: 4px;
            }
            .inner{
              width: 153px;
              height: 38px;
              left: 49px;
              top: 10px;
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 19px;
              text-align: center;
              color: #184A88;
            }
            .outerwrap{
              position: absolute;
              width: 261px;
              height: 66px;
              left: 49px;
              top: 2202px;
              background: #FFFFFF;
              border: 2px solid #184A88;
              box-sizing: border-box;
              border-radius: 4px;
            }
            .innerwrap{
            
              width: 224px;
              height: 38px;
             
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 19px;
              text-align: center;
              color: #184A88;
            }
          
          }
          `}</style>
        </React.Fragment>
    );
}
export default Bigbutton
