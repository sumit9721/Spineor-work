import Pagecontainer from "../page-container";
import Topbanner from "../Home/Topbanner";
import Success from "./success-stories";

export default function SuccessPage() {
  return (
    <div>
      <Pagecontainer>
        <Topbanner
          title={"Success Stories"}
          content={"All you need for digital domination, under one expert roof. We are the right technology partner to drive."}
          button={"Get in touch"}
          heading={"large"}
        />
        <Success
          alignment="right"
          title="images/trello-logo.webp"
          content="Trello is the easy, free, flexible, and visual way to manage your projects and organize anything, trusted by millions of people from all over the world."
          node="images/node-logo.webp"
          react="images/react-logo.webp"
          mongodb="images/mongodb-logo.webp"
        />
        <Success
          title="images/trello-logo.webp"
          content="Trello is the easy, free, flexible, and visual way to manage your projects and organize anything, trusted by millions of people from all over the world."
          node="images/node-logo.webp"
          react="images/react-logo.webp"
          mongodb="images/mongodb-logo.webp"
        />
      </Pagecontainer>
    </div>
  );
}