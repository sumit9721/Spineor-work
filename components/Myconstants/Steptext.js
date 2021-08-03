export default  function Steptext({important,dummytext}){
    return(
        <div>
        <main className={`main ${important}`}>
            {dummytext}
        </main>
        <style jsx>{`
        .main{
            position: absolute;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 28px;
            color: #444444;
        }
            .imp{
                width: 476px;
                height: 244px;
                left: 174px;
                top: 1896px;
            }
            .isimp{
                    width: 476px;
                    height: 259px;
                    left: 650px;
                    top: 1837px;
            }
            .doimp{
                width: 476px;
                height: 244px;
                left: 101px;
                top: 2483px;
            }
            .animp{
                width: 464px;
                height: 260px;
                left: 650px;
                top: 3167px;
            }
            .imp1{
                width: 464px;
                height: 260px;
                left: 794px;
                top: 2391px;

            }
            .imp2{
                width: 476px;
                height: 244px;
                left: 174px;
                top: 2806px;
            }
            .imp3{
                width: 464px;
                height: 260px;
                left: 794px;
                top: 3301px;
        
            }
            .imp4{
                width: 476px;
                height: 244px;
                left: 174px;
                top: 3716px;
            }
        `}</style>
        </div>
    )
}