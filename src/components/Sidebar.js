import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ links, close }) {
  const location = useLocation();

  return React.createElement(
    "div",
    { className: "sidebar", onClick: close },
    links.map(link =>
      React.createElement(
        Link,
        {
          to: link.path,
          className: location.pathname === link.path ? "sidebar-link active" : "sidebar-link",
          key: link.name
        },
        React.createElement(FontAwesomeIcon, { icon: link.icon }),
        " ",
        link.name
      )
    )
  );
}
