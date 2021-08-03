import Link from "next/link";
import classNames from "classnames";
import css from "styled-jsx/css";
import withPure from "../../hoc/pure";
import { memo } from "react";
const cachedStyles = css`
  .dropdown-item {
    position: relative;
    width: 100%;
    text-align: left;
    cursor: pointer;
    text-decoration: none;
    padding: 0.25rem 1.5rem;
    margin: 0;
    border-radius: 0px;
    color: #212529;
    background-color: transparent;
    border: none;
    font-size: inherit;
    line-height: inherit;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
  }
  .dropdown-item:hover {
    background-color: #e0f7f8;
  }
`;

const DropdownItem = ({
  children,
  invert,
  small,
  href,
  as,
  className,
  amp,
  loading,
  ...props
}) => {
  const cachedClassNames = classNames("dropdown-item", className, {
    invert,
    small,
    loading,
  });

  if (href) {
    return (
      <Link href={href} as={as} passHref className={cachedClassNames}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cachedClassNames} {...props}>
      <span className="text">{children}</span>
      <style jsx>{cachedStyles}</style>
    </button>
  );
};
export default memo(DropdownItem);
