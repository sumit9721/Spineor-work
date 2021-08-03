function Robot(props) {
 
    return (
      <div>
          <img className="image1" src={props.image}></img>
      <div className="title-box">
          <div className="title">
              The Role Of Artificial Intelligence In Web Development
          </div>
          <div className="cont-reading">
              Continue reading
          </div>
      </div>
      <div>
          <img className="john-img" src="images\john.webp"></img>
      </div>
      <div className="johndoe">
          John Doe
      </div>
      <div className="position">Project Manager</div>
      <div className="date">12-Mar-2020</div>
  
  <style  jsx global>{`
.image1 {
    position: absolute;
    width: 619px;
    height: 309.35px;
    left: 0px;
    top: 0px; 
}
.title-box {
    position: absolute;
    width: 528px;
    height: 151px;
    left: 46px;
    top: 228px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(153, 153, 153, 0.25);
}
.title {
    position: absolute;
    width: 419.68px;
    height: 127.89px;
    left: 40px;
    top: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;     
    color: #222222;
}
.cont-reading {
    position: absolute;
    width: 463px;
    height: 26px;
    left: 40px;
    top: 100px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 157.2%;
    color: #333333;
}
.john-img {
    position: absolute;
    width: 55px;
    height: 58px;
    left: 65px;
    top: 390px;
    background-color: red;
    border-radius: 50%;

}
.johndoe {
    position: absolute;
    width: 60px;
    height: 22px;
    left: 129px;
    top: 400px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 157.2%;
    color: #000000;
}
.position {
    position: absolute;
    width: 102px;
    height: 22px;
    left: 129px;
    top: 420px;     
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 157.2%;
    color: #666666;
}
.date {
    position: absolute;
    width: 79px;
    height: 22px;
    left: 515px;
    top: 410px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 157.2%;
    color: #666666;
}
  `}
  
  </style>
      </div>
    );
   }

export default Robot