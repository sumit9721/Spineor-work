import { PRIMARY } from "../../css-config";
import ServiceItem from "./ServiceItem";

const slides = [
  {
    sectionTitle: "Java/Scala Programming",
    sectionSubtitle:
      "Java is a programming language and computing platform first released by Sun Microsystems in 1995.",
    fullDescription:
      "<p>Hire our java developers We do help businesses in integrating your Java applications with databases, operating systems and third party applications with our java outsourcing company services. We have experience of re-engineering and migration of applications built in Java. This would include technology migration, database migration, Java application upgrade, application portin</p><ul><li>Java Desktop Application Development</li><li>Java Mobile ApplicationDevelopment</li><li>Java Web Services Development</li><li>Java Application Migration & Integration</li><li>Java Application Maintenance & Support</li></ul>",
    shortDescription:
      "<p>There are consultancies that focus on UX and UI. There are developers that design and build  There are developers that design and build.  in integrating your Java applications with databases</p><p>There are consultancies that focus on UX and UI. There are developers  There are developers that design and build.</p> <p> There are developers that design</p>",
    button: "View Our JAVA/SCALA Programming Service In Details",
    icon: "<Java />",
  },
  {
    sectionTitle: "React Programming",
    sectionSubtitle:
      "Java is a programming language and computing platform first released by Sun Microsystems in 1995.",
    fullDescription:
      "<p>Hire our java developers We do help businesses, operating systems and third party java outsourcing company services. We have experience of re-engineering and migration of applications built in Java. This would include technology migration, database migration, Java application upgrade, application porting, etc.</p>Our team of Java professionals ranked top in providing Java application development services in below:</p><ul><li>Java Development Services</li><li>Java Enterprise Application Development</li><li>Java Desktop Application Development</li><li>Java Mobile ApplicationDevelopment</li><li>Java Web Services Development</li></ul>",
    shortDescription:
      "<p>There are consultancies that focus on UX and UI. There are developers that design and build.</p><p>There are consultancies that focus on UX and UI. There are developers</p>",
    button: "View Our React Programming Service In Details",
    icon: "<React />",
  },
];

export default function ServiceCard({ ...props }) {
  return (
    <div className="service-card-wrapper">
      <div className="service-carousel">
        <amp-selector layout="container">
          <amp-carousel height="600" layout="fixed-height" type="carousel">
            {slides.map((item, i) => {
              return <ServiceItem key={i} itemData={item} />;
            })}
          </amp-carousel>
        </amp-selector>
      </div>
      <style jsx>{`
        .service-card-wrapper {
          margin-bottom: 250px;
          margin-top: 100px;
          height: 650px;
          background: url(${props.image});
          background-repeat: no-repeat;
          background-position: top center;
          background-size: cover;
        }
        .service-carousel {
          display: block;
          padding-top: 246px;
        }
        @media (max-width: 1200px) and (min-width: 990px) {
          .service-card-wrapper {
            height: 600px;
            margin-bottom: 300px;
          }
          .service-carousel {
            padding-top: 195px;
          }
        }
        @media (max-width: 989px) and (min-width: 768px) {
          .service-card-wrapper {
            height: 550px;
            margin-bottom: 250px;
          }
          .service-carousel {
            padding-top: 45px;
          }
        }
        @media (max-width: 767px) {
          .service-card-wrapper {
            height: auto;
            margin-bottom: 50px;
          }
          .service-carousel {
            padding-top: 0;
          }
        }
      `}</style>
    </div>
  );
}
