import Pagecontainer from "../page-container";
import Topbanner from "../Home/Topbanner";
import SectionCard from "../common/SectionCard";
import Knowmore from "../common/KnowMore/knowmore";
export default function AboutPage() {
  return (
    <div>
      <Pagecontainer>
        <Topbanner
          title={"Who We Are?"}
          content={"All you need for digital domination, under one expert roof. We are the right technology partner to drive. "}
          button={"Get in touch"}
          heading={"large"}
        />
        <SectionCard
          sectionTitle="Our Methodology"
          sectionSubtitle="At Spineor, we have an enormous industry experience in developing a methodology that applies to all projects irrespective of size and duration."
          image="images/aboutimg.webp"
          fullDescription="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p>
          <p> Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>"
          shortDescription="<p>There are consultancies that focus on UX and UI. There are developers that design and build.</p><p>Our mission is to help clients from startup</p>"
        />
        <SectionCard
          sectionTitle="Our Process"
          sectionSubtitle="Over the past few years, Spineor has constructed a key collection of development and design facilities that not only surpassed our customers' expectations."
          image="images/aboutimg.webp"
          fullDescription="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>"
          shortDescription="<p>There are consultancies that focus on UX and UI. There are developers that design and build.</p><p>Our mission is to help clients from startup</p>"
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