import classNames from "classnames";
import css from "styled-jsx/css";
import withPure from "../../hoc/pure";
import {
  PRIMARY,
  PRIMARY_HOVER,
  TEXT_COLOR,
  GRAY_SHADE_LAVEL1,
  PRIMARY_HOVER_LIGHT,
  GRAY_SHADE_E8,
} from "../../css-config";
import { memo } from "react";
const cachedStyles = css`
  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    // white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 10px 25px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 3px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    cursor: pointer;
  }
  .btn span.text {
    display: flex;
    align-items: center;
  }
  .btn:focus,
  .btn:hover {
    text-decoration: none;
  }
  .btn.focus,
  .btn:focus {
    outline: 0;
    box-shadow: none;
  }
  .primary {
    color: #fff;
    background-color: ${PRIMARY};
    border-color: ${PRIMARY};
  }
  .primary:hover {
    color: #fff;
    background-color: ${PRIMARY_HOVER};
    border-color: ${PRIMARY_HOVER};
  }
  .primary.focus,
  .primary:focus {
    box-shadow: none;
  }
  .primaryColorLight {
    color: ${PRIMARY};
    fill: ${PRIMARY};
    background-color: #fff;
    border-color: ${PRIMARY};
  }
  .primaryColorLight:hover {
    background: ${PRIMARY_HOVER_LIGHT};
  }
  .primaryColorLight.focus,
  .primaryColorLight:focus {
    background: ${PRIMARY};
    color: #fff;
    fill: #fff;
  }
  .secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  .secondary:hover {
    color: #fff;
    background-color: #5a6268;
    border-color: #545b62;
  }
  .secondary.focus,
  .secondary:focus {
    box-shadow: none;
  }
  .secondaryLight {
    color: ${TEXT_COLOR};
    background-color: #fff;
    border-color: #fff;
  }
  .secondaryLight:hover {
    color: ${TEXT_COLOR};
    background-color: ${GRAY_SHADE_E8};
    border-color: ${GRAY_SHADE_E8};
  }
  .secondaryLight.focus,
  .secondaryLight:focus {
    box-shadow: none;
  }
  .outline {
    color: ${TEXT_COLOR};
    background-color: transparent;
    background-image: none;
    border-color: ${GRAY_SHADE_LAVEL1};
  }
  .outline:hover {
    color: ${TEXT_COLOR};
    background-color: ${GRAY_SHADE_LAVEL1};
    border-color: ${GRAY_SHADE_LAVEL1};
  }
  .outline.focus,
  .outline.focus {
    box-shadow: none;
  }
  .primary.outline {
    border: 2px solid ${PRIMARY};
    color: ${PRIMARY};
  }
  .primary.outline:hover {
    border: 2px solid ${PRIMARY};
    color: #fff;
    background-color: ${PRIMARY};
  }

  .invert {
    background-color: #fff;
    color: ${TEXT_COLOR};
  }
  .invert:hover {
    background-color: ${PRIMARY};
    color: #fff;
  }
  .invert.nohover:hover {
    background-color: #fff;
    color: ${TEXT_COLOR};
  }
  .round {
    border-radius: 25px;
  }
  .block {
    width: 100%;
  }
  .center .text {
    justify-content: center;
  }

  :global(.btn span.btn-icon-arrow) {
    width: 13px;
    height: 13px;
    padding-left: 10px;
    padding-right: 10px;
    display: block;
    position: relative;
    top: -3px;
    transition: transform 0.5s ease;
  }
  :global(.btn span.btn-icon-arrow svg) {
    width: 13px;
    height: 13px;
  }
  :global(.btn span.btn-icon-arrow.active svg) {
    top: 0px;
    transform: rotate(-180deg);
  }
  :global(.btn span.btn-icon-before-big) {
    width: 32px;
    height: 25px;
    padding-left: 0px;
    padding-right: 40px;
    display: block;
  }
  :global(.btn span.btn-icon-before-big svg) {
    width: 32px;
    height: 25px;
  }
  :global(.btn span.btn-icon-before-small) {
    width: 19px;
    display: block;
    position: relative;
    top: 1px;
  }
  :global(.btn span.btn-icon-before-small svg) {
    width: 12px;
    height: 12px;
  }
  .button-active {
    background-color: #e8e9ea;
  }
`;

const Button = ({
  children,
  primary,
  primaryColorLight,
  secondary,
  secondaryLight,
  invert,
  outline,
  nohover,
  round,
  block,
  center,
  as,
  href,
  amp,
  className,
  ...props
}) => {
  const cachedClassNames = classNames(
    "btn",
    {
      primary,
      primaryColorLight,
      secondary,
      secondaryLight,
      invert,
      outline,
      nohover,
      round,
      block,
      center,
    },
    className
  );

  if (href) {
    const isExternal = href && href.startsWith("http");
    const a = (
      <a className={cachedClassNames} href={href} {...props}>
        {children}
        <style jsx>{cachedStyles}</style>
      </a>
    );

    return amp || isExternal ? (
      a
    ) : (
      <Link href={href} as={as} passHref>
        {a}
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
export default memo(Button);
