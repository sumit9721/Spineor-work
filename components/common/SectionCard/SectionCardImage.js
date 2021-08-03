const SectionCardImage = (props) => {
  return (
    <>
      <amp-img
        className="select-card-image"
        alt="A view of the sea"
        src={props.image}
        width="900"
        height="675"
        layout="responsive"
      ></amp-img>

      <style jsx>{`
        .select-card-image {
          height: 100vh;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export const config = { amp: true };
export default SectionCardImage;
