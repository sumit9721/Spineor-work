export default function Stepbutton({Number,newsection,wrapper}){
    return(
        <div>
            <main className={`wrap ${wrapper}`}>
                <section className={`section ${newsection}`}>
                   STEP{Number}
                </section>
            </main>
        <style jsx>{`
        .wrap{
            position: absolute;
            width: 100px;
            height: 100px;  
            background: #184A88;
        }
        .wrapper{
            left: 19px;
            top: 1836px;
        }
        .section{
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 28px;
                padding-top:32px;
                padding-left:10px;
                width: 79px;
                height: 28px;
                color: #FFFFFF;
                
        }
        .mysection{
            left: 30px;
            top: 1872px;
        }
       .wrapper1{
        left: 651px;
        top: 2327px;
       }
       .wrapper2{
        left: 19px;
        top: 2746px;

       }
       .wrapper3{
        left: 651px;
        top: 3237px;
       }
       .wrapper4{
        left: 19px;
        top: 3656px;

       }
       .mysection1{
        left: 662px;
        top: 2363px;
       }
       .mysection2{
        left: 30px;
        top: 2782px;
       }
       .mysection3{
        left: 662px;
        top: 3273px;

       }
       .mysection4{
        left: 30px;
        top: 3692px;
       }
        `}</style>
        </div>
    )
}