const DropdownButton = (props) => {
  const id = props.id;
  //const evt = "tap:" + id + ".toggleVisibility";
  return (
    <>
      <div className={props.toggle ? "btn-group toggle" : "btn-group"}>
        <button className={props.classname}>{props.value}</button>
        <div className={props.toggle ? "dropdown toogle-list" : "dropdown"}>
          {props.list ? (
            <ul className="linked-dropdown">
              {props.list.map((myList, index) => (
                <li key={index}>
                  <button className="btn-item">{myList}</button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <style jsx>
        {`
          .btn-group {
            position: relative;
          }
          .dropdown {
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
          .linked-dropdown {
            padding: 0;
            margin: 0;
          }
          .linked-dropdown li {
            list-style: none;
          }
          .btn-item {
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
            transition: background 0.2s ease, color 0.2s ease,
              box-shadow 0.2s ease;
            outline: none;
          }
          .btn-item:hover {
            background-color: #e0f7f8;
          }
          .dropdown.toogle-list {
            display: none;
          }
          .btn-group.toggle:hover > .toogle-list {
            display: block;
          }
        `}
      </style>
    </>
  );
};
export const config = { amp: true };
export default DropdownButton;
