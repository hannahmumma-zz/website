import React from "react";

class ListItems extends React.Component {
  render() {
    const eachListItem = this.props.items.map((item, i) => (
      <li className="menu-item" key={i}>
        <a
          className={`item${item.name === "Resume" ? " btn" : ""}`}
          href={item.url}
          target={`${item.external ? "_blank" : "_self"}`}
          role="menuitem"
        >
          {item.name}
        </a>
      </li>
    ));

    return eachListItem;
  }
}

export default ListItems;