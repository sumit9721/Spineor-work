export default function Smallheading ({nonsticky,notify}){
    return(
        <div className={`stick ${nonsticky}`}>
            {notify}
        <style jsx>{`
        .stick{
        position: absolute;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 42px;
        line-height: 49px;
        color: #222222;
        }
        .place{
            width: 369px;
            height: 49px;
            left: 174px;
            top: 1832px;
        }
        .stickyword{
                    width: 302px;
                    height: 98px;
                    left: 650px;
                    top: 1721px;        
        }
        .notsticky{
            
            width: 430px;
            height: 49px;
            left: 101px;
            top: 2419px;
        }
        .mystick{
                    width: 355px;
                    height: 98px;
                    left: 650px;
                    top: 3051px;
        }
        .place1{
            width: 216px;
            height: 49px;
            left: 794px;
            top: 2323px;
        }
        .place2{
            width: 222px;
            height: 49px;
            left: 174px;
            top: 2742px;
        }
        .place3{
            width: 354px;
            height: 49px;
            left: 794px;
            top: 3233px;
        }
        .place4{
            width: 176px;
            height: 49px;
            left: 174px;
            top: 3652px;
        }
        `}</style>
        </div>
    )
}