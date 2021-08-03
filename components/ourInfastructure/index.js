import Pagecontainer from "../page-container";
import Topbanner from "../Home/Topbanner";
import SectionCard from "../common/SectionCard";
import Knowmore from "../common/KnowMore/knowmore";
import Heading from "../common/heading";
import EventCelebrations from "../common/EventCelebrations/eventCelebrations";
export default function InfrastructurePage() {
  return (
    <div>
      <Pagecontainer>
        <Topbanner
          title={"Our Infrastructure"}
          content={"Our benefit is our team of skilled, hard-working and devoted staff working to maintain the corporate ideals of excellence of Spineor Conceptions. "}
          button={"Get in Touch"}
          heading={"large"}
        />
        <SectionCard
          sectionTitle="Delivering Higher Service Levels With New It-Enabled Capabilities"
          image="images/aboutimg.webp"
          fullDescription="<p>We're building powerful relationships here at Spineor. We share our experiences collectively and work together to create better products for our clients. We think we can attain the highest outcomes through cooperation and apply our common understanding and abilities to each project. We think that the voice of everyone matters and that any person can come up with the finest thoughts. Spineor has a flat organizational structure that enables us to be more effective in constructing amazing products so that we can devote our time.</p>
          <p> We believe the voice of all matters and the best ideas can come from any individual. Spineor has a flat organizational structure that allows us to be more efficient in building awesome products so that we can spend our time.</p>"
          shortDescription="<p>There are consultancies that focus on UX and UI. There are developers that design and build.</p><p>Our mission is to help clients from startup</p>"
        />
        <Heading
          heading="Event & Celebrations"
        />
        <EventCelebrations
          heading="PHOTO GALLERY"
          content="At Spineor Conceptions, secret to excellence lies in the fun that we all have together from time-to-time."
          years="2020 2019 2018 2015 2014"
          image1="images\event1.webp"
          image2="images\event2.webp"
          image3="images\event3.webp"
        />
        <Knowmore
          sectionTitle="READ MORE ABOUT US"
          sectionSubtitle="Know more about our company"
          fullDescription="<p>Our people are our assets.</p> <p>Detailing, scoping not just for current but for future helps us plan and build scalable solutions.</p> <p>Respecting every person we work with, our commitment to our work and to the society.</p> <p>We face new challenges every day but our commitment remains unchanged, and we continue to take determined steps into the future with every individual associated with us.</p>"
          button="Download Whitepaper"
        />
      </Pagecontainer>
    </div>
  );
}