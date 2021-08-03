import { useState, memo } from "react";
import withPure from "../../hoc/pure";
import { PRIMARY, TEXT_COLOR } from "../../css-config";

const ButtonSetRadio = ({ className, ...props }) => {
  const [cls, bedsChange] = useState("Studio+");
  const setActive = (v, v1) => {
    bedsChange(v);
    if (v1) {
      props.toggle2(v1);
    } else {
      props.toggle2(v);
    }
  };
  return (
    <div className="button-group">
      {props.items.length > 0 &&
        props.items.map((menu, idx) => {
          return (
            <button
              type="button"
              key={idx}
              onClick={() => setActive(menu.label, menu.value)}
              className={cls == menu.label ? "active" : ""}
            >
              {menu.label}
            </button>
          );
        })}
      <style jsx>{`
        .button-group {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .button-group button {
          flex: 1 1 auto;
          cursor: pointer;
          display: inline-block;
          text-align: center;
          font-weight: bold;
          white-space: nowrap;
          font-size: 16px;
          line-height: 1.5;
          background: #fff;
          color: ${TEXT_COLOR};
          margin: 0px;
          border-radius: 0px;
          border-width: 1px;
          border-style: solid;
          padding: 8px 16px;
          border-color: #cdd1d4;
          border-right: 0;
        }
        .button-group button:first-child {
          border-radius: 8px 0 0 8px;
        }
        .button-group button:last-child {
          border-right: 1px solid #cdd1d4;
          border-radius: 0 8px 8px 0;
        }

        .button-group button.active {
          color: #fff;
          background-color: ${PRIMARY};
        }
      `}</style>
    </div>
  );
};
export default memo(ButtonSetRadio);
