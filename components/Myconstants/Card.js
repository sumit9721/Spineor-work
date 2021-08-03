function Card(props){
    return(
        <React.Fragment>
        <img className="AI-header1" src={props.image}/>
        <div className= "box3">
            <div className= "box4">
            {props.heading}
            </div>
            <div className= "box5">
            {props.subheading}
            </div>
        </div>
        <style jsx>{`
        .AI-header1 {
            position: absolute;
            width: 500px;
            height: 283px;
            left: 0px; 
            top: 0px;
        }
        .box3 {
            position: absolute;
            width: 427px;
            height: 117px;
            left: 35px;
            top: 207px;
            background: #FFFFFF;
        }
        .box4 {
            position: absolute;
            width: 339px;
            height: 117px;
            left: 25px;
            top: 8px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 32px;
            line-height: 37px;
            color: #222222;
        }
        .box5 {
            position: absolute;
            width: 374px;
            height: 146px;
            left: 30px;
            top: 166px;
            font-weight: 300;
            font-size: 18px;
            line-height: 157.2%;
            color: #333333;
        }
        @media screen and (max-width:  600px) {
            .AI-header1 {
                position: absolute;
                width: 320px;
                height: 222px;
                left: 0px;
                top: 0px;
            }
            .box5{
                width: 275px;
                height: 133px;
                left: 2px;
                top: 80px;
                font-weight: 300;
                font-size: 18px;
                line-height: 157.2%;  
                color: #333333;
            }
            .box4{
                position: absolute;
                width: 275px;
                height: 68px;
                left: 11px;
                top: 9px;
                font-size: 18px;
                line-height: 21px;
                color: #222222;s
            }
            .box3{
                position: absolute;
                width: 290px;
                height: 88px;
                left: 10px;
                top: 230px;
                background: #FFFFFF;
            }
          }
        `}</style>
        </React.Fragment>
    )
}
export default Card


