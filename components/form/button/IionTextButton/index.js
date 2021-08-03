import { TEXT_COLOR, GRAY_SHADE_LAVEL1 } from "../../../css-config";

const ButtonIcon = (props) => {
  return (
    <>
      <button type="button" className={props.classname} {...props}>
        {props.icon} <span>{props.text}</span>
      </button>
      <style jsx>{``}</style>
    </>
  );
};

export default ButtonIcon;
