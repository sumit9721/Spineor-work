import Pagecontainer from "../page-container";
import Topbanner from "../Home/Topbanner";
import SectionCard from "../common/SectionCard";
import Knowmore from "../common/KnowMore/knowmore";
import Letswork from "./LetsWork/letswork";

export default function ValuesPage() {
  return (
    <div>
      <Pagecontainer>
        <Topbanner
          title={"Our Values"}
          content={"Spineor core values shapes its culture, always encouraging to develop and deliver disruptive innovations, as well as define our relationship with clients, employees and community as a whole."}
          button={"Get in Touch"}
          heading={"verylarge"}
        />
        <SectionCard
          sectionTitle=" We Keep Customers At The Heart Of Our Business"
          image="images/aboutimg.webp"
          fullDescription="<p>We think in a key set of principles that assist each Spineorian work on his or her own through critical issues. We respect our precious clients at Ogma. All we do is influenced by the customer value construction mission</p>
          <p>The key values of Spineor shape its culture, always promoting disruptive innovations to be developed and delivered, as well as defining our connection with customers, staff, and the entire community.</p>"
          shortDescription="<p>There are consultancies that focus on UX and UI. There are developers that design and build.</p><p>Our mission is to help clients from startup</p>"
        />
        <Letswork
          alignment="right"
          step="STEP 1"
          heading="Let’s Work Together"
          content="Every Spineor member is component of a single team. It's no secret that there are two heads better than one and we value community at Spineor. A project is most effective if it has the complete Spineor team's mixed understanding, abilities, and creativity."
          image= "images/work.webp"
        />
        <Letswork
          step="STEP 2"
          heading="Be Yourself"
          content="We're in the creativity company and your creativity comes from whom you come from. You're never going to be criticized for your thoughts at Spineor. Do not be scared to ask questions or talk up. You are bringing to the table your own ideas and individuality."
          image= "images/beyourself.webp"
        />
        <Letswork
          alignment="right"
          step="STEP 3"
          heading="Work Smart"
          content="Time is worthwhile. It's important for our Spineor team and useful for our customers. We are building instruments at Spineor to speed up procedures. Find a complex issue and make it easy. You don't have to work long, you just need to work intelligent."
          image= "images/smart.webp"
        />
        <Letswork
          step="STEP 4"
          heading="Customer Focused"
          content="We're in the creativity company and your creativity comes from whom you come from. You're never going to be criticized for your thoughts at Spineor. Do not be scared to ask questions or talk up. You are bringing to the table your own ideas and individuality."
          image= "images/coustomer.webp"
        />
        <Letswork
          alignment="right"
          step="STEP 5"
          heading="Have Fun"
          content="Confucius said it best, Choose a job you love, and you're never going to have to work a day in your lives. We want every Spineor member to love their job. Creativity is supposed to be enjoyable, so have fun!"
          image= "images/fun.webp"
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