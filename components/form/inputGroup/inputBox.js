export default function InputBox({ children, className, ...props }) {
  return (
    <div
      className={className ? "input-field " + className : "input-field"}
      {...props}
    >
      <style jsx>
        {`
          .input-field {
            flex: 1;
            border-radius: 0 8px 8px 0;
          }
          :global(.input-field .form-control) {
            border-radius: 0 8px 8px 0;
            border-width: 1px;
            margin: 0;
            height: 45px;
          }
        `}
      </style>
      {children}
    </div>
  );
}
