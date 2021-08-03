import Pagecontainer from "../page-container";
import Topbanner from "../Home/Topbanner";
import Knowmore from "../common/KnowMore/knowmore";
import Heading from "../common/heading";
import EventCelebrations from "../common/EventCelebrations/eventCelebrations";
export default function EventPage() {
  return (
    <div>
      <Pagecontainer>
        <Topbanner
          title={"Events & Celebrations"}
          content={"The secret to excellence at Spineor lies in the fun we all have from time to time together. In planning your business event, we give the utmost flexibility. Always discover playing, experimenting and exploring time. "}
          button={"Get in Touch"}
          heading={"large"}
        />
        <Heading
          heading={"Events & Celebrations"}
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