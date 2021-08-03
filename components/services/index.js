import Pagecontainer from "../page-container";
import Topbanner from "../Home/Topbanner";
import Heading from "../common/heading";
import ServiceBlock from "./ServiceBlock/serviceBlock";

export default function ServicePage() {
  return (
    <div>
      <Pagecontainer>
        <Topbanner
          title={"EXPERIENCE THE BEST JAVA HAS TO OFFER WITH US"}
          content={"At Spineor we possess a highly-skilled team of Java developers that has proven its abilities and competence by delivering world-class Java-based web solutions. Work with us to feel the difference!"}
          button={"Lets Starts"}
          heading={"medium"}
        />
        <Heading
        heading= "OUR TOP-END JAVA DEVELOPMENT SERVICES"
        />
        <ServiceBlock
          image="images/enterprise.webp"
          heading="Enterprise Java Development"
          content="Enterprises face a sea of challenges in a quest to constantly expand and stay competitive. Our Java enterprise development services are specifically aimed at boosting the enterprise growth in a well and sustained manner. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
          button="Request A Free Consultation"
        />
        <ServiceBlock
          alignment="right"
          image="images/javadevop.webp"
          heading="Java Migration Service"
          content="Looking to have your business platform migrated to the Java-based framework to become future-proof? We’re listening! Spineor can assist you in migration services to ensure a smooth and efficient workflow. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"
          button="Request A Free Consultation"
        />
        <ServiceBlock
          image="images/maintain.webp"
          heading="Java Maintenance And Support"
          content="Apps run smoothly if they’re maintained from time to time. Our Java application maintenance support ensures that your apps always run at their peak performance so your business won’t have to suffer. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"
          button="Request A Free Consultation"
        />
      </Pagecontainer>
    </div>
  );
}