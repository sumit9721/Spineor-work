import Cart from "./Cart";
import Work from "./Work";
import Backimage from "./Bckimage";


function Approach(props) {
    return (
        <div className="wrapper">
     
        <Backimage  
        className="bck1" 
        image = "images/africannew.webp"/>
        <Work 
        className="outwrap" 
        myclassname="innerwrap"
        paragraph="There are consultancies that focus on UX and UI. There are developers that design and build.
        We deliver the best of all worlds with our agile, end-to-end process. We get rid of your digital development headaches by 
        maximizing efficiencies to deliver transformative solutions that delight users and drive revenue.
        Our mission is to help clients from startup to enterprise optimize their online businesses for unstoppable growth." />
        
      
       <Cart 
        className="outers"
        myclassname="inners" 
        newclassname="small_inner" 
        heading="A PEOPLE-FIRST APPROACH"
        children="Custom Digital Products & Platforms Created by People, for People.
          Transform your business with our user-centric approach."/> 
      
         
          
        </div>
    );
   }

   export default Approach