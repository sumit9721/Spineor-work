import classNames from "classnames";
import css from "styled-jsx/css";
import { memo } from "react";

const cachedStyles = css`
   {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: rgba(134, 144, 153, 0.18) 0px 4px 8px 0px,
      rgba(59, 65, 68, 0.05) 0px 1px 2px 0px;
    z-index: 20;
    border-radius: 8px;
    padding: 4px 0px;
    transition: opacity 0.2s ease 0s;
    min-width: 300px;
    overflow: hidden;
    border: 0;
  }
  .midium {
    min-width: 400px;
  }
  @media (max-width: 580px) {
    .midium {
      min-width: 250px;
    }
    .responsive {
      left: unset;
      right: 0;
    }
  }
`;

// export default withPure(function DropdownMenu({
const DropdownMenu = ({
  className,
  midium,
  responsive,
  children,
  ...props
}) => {
  const cachedClassNames = classNames(
    {
      midium,
      responsive,
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
export default memo(DropdownMenu);
