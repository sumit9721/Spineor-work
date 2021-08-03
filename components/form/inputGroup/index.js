import classNames from "classnames";
import css from "styled-jsx/css";
import withPure from "../../hoc/pure";
import { PRIMARY, GRAY_SHADE_LAVEL1 } from "../../css-config";
import { memo } from "react";

const cachedStyles = css`
  .input-group {
    width: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    border: 0;
    padding: 0;
    margin-bottom: 1rem;
  }
`;

const InputGroup = ({ children, active, className, ...props }) => {
  const cachedClassNames = classNames(
    "input-group",
    {
      active,
    },
    className
  );

  return (
    <div className={cachedClassNames} {...props}>
      {children}
      <style jsx>{cachedStyles}</style>
    </div>
  );
};
export default memo(InputGroup);
