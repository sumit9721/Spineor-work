import { PRIMARY, GRAY_SHADE_AAA, GRAY_SHADE_LAVEL1 } from "../../css-config";

export default function InputIcon({ children, className, ...props }) {
  return (
    <div
      className={className ? "input-icon " + className : "input-icon"}
      {...props}
    >
      <style jsx>
        {`
          .input-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-basis: 45px;
            border-radius: 8px 0 0 8px;
            background: #e9ecef;
            border: 1px solid ${GRAY_SHADE_LAVEL1};
            border-right: 0;
            margin: 0;
            height: 45px;
          }
          :global(.input-icon svg) {
            width: 20px;
            height: 20px;
            fill: ${GRAY_SHADE_AAA};
          }
        `}
      </style>
      {children}
    </div>
  );
}
