const AnchorButton = (props) => {
  return (
    <a href={props.href} className={props.classname}>
      {props.text}
    </a>
  );
};

export default AnchorButton;
