import Pagecontainer from "../components/page-container";
import Topbanner from "../components/Home/Topbanner";
import SectionCard from "../components/common/SectionCard";
import ServiceCard from "../components/common/ServiceCard";

export const config = { amp: true };

export default () => {
  return (
    <div>
      <Pagecontainer>
        <Topbanner
          title={"Design, Develop, Test & Delivered."}
          content={
            "Bespoke products & platforms engineered to elevate your customers' experience, earn their loyalty & grow your business. "
          }
          button={"Explore Services"}
          heading={"large"}
        />
        <div>
          <SectionCard
            sectionTitle="A PEOPLE-FIRST APPROACH"
            sectionSubtitle="Custom Digital Products & Platforms Created by People, for People.
          Transform your business with our user-centric approach."
            // image="https://loremflickr.com/1000/600?random=2"
            image="images/aboutimg.webp"
            fullDescription="<p>There are consultancies that focus on UX and UI. There are developers that design and build.</p>
          <p>We deliver the best of all worlds with our agile, end-to-end process. We get rid of your digital development headaches by maximizing efficiencies to deliver transformative solutions that delight users and drive revenue.</p>
          <p>Our mission is to help clients from startup to enterprise optimize their online businesses for unstoppable growth.</p>"
            shortDescription="<p>There are consultancies that focus on UX and UI. There are developers that design and build.</p><p>Our mission is to help clients from startup</p>"
            button="Learn About Our Capabilities & Culture"
          />
        </div>
        <ServiceCard image="images/service.webp" />
      </Pagecontainer>
    </div>
  );
};
