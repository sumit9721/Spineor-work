import Button from "../button";

export default function DropdownToggle({ className, children, ...props }) {
  return (
    <Button className={className} {...props}>
      {children}
    </Button>
  );
}
