function Backimage(props){
  return(
      <React.Fragment>
      <img className={`backimage ${props.className}`} src= {props.image}/>
      <style jsx>{`
      .backimage {
          position: absolute;
          left: 0px;
        }
        .bck1{
          top: 791px;
          width: 1300px;
          height: 859px;
        }
        .bck2{
          top: 778px; 
          width: 1300px;
          height: 859px;
        }
        .bck3{
          width: 1245px;
          height: 626px;
           top: 844px;
        }
        @media screen and (max-width: 600px) {
          .bck1{
            position: absolute;
            width: 360px;
            height: 284px;
            left: 0px;
            top: 513px;
          }
        }
       
        
      `}</style>
      </React.Fragment>
  )
}
export default Backimage
