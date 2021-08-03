export default function Smallimage({classes,imagesrc}){
    return(
        <div>
        <img className={classes} src={imagesrc} />
        <style jsx>{`
            .position{
                position: absolute;
                width: 561px;
                height: 374px;
                left: 693px;
                top: 1767px;
            }
            .static{
                    position: absolute;
                    width: 640px;
                    height: 503px;
                    left: 0px;
                    top: 1691px;
            }
            .back1{
                position: absolute;
                width: 662px;
                height: 510px;
                left: 622px;
                top: 2340px;   
              }
              .lockimage{
                position: absolute;
                width: 596px;
                height: 343px;
                left: 26px;
                top: 3119px;
              }
              .position1{
                position: absolute;
                width: 515px;
                height: 282px;
                left: 85px;
                top: 2298px;
              }
              .position2{
                position: absolute;
                width: 437px;
                height: 360px;
                left: 752px;
                top: 2690px;
              }
              .position3{
                position: absolute;
                width: 671px;
                height: 370px;
                left: 0px;
                top: 3154px;
              }
              .position4{
                position: absolute;
                width: 480px;
                height: 267px;
                left: 718px;
                top: 3615px;
              }
        `}</style>
        </div>
    )
}