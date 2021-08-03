import Pagecontainer from "../page-container";
import Topbanner from "../Home/Topbanner";
import Knowmore from "../common/KnowMore/knowmore";
export default function FaqPage() {
  return (
    <div>
      <Pagecontainer>
        <Topbanner
          title={"FAQs"}
          des={"Got Questions? We have got answers! "}
          content={"We have compiled a short list of the questions we are asked most frequently by our clients, our FAQs. If you don’t see the answer to your question here, please call us at (+91) 9163553305 ( Monday - Friday, 10AM - 9PM IST) or email us."}
          heading={"verylarge"}
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