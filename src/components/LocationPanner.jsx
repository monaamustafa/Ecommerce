import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
export default function LocationPanner(props) {
  const breadcrumbs = useBreadcrumbs();
  return (
    <React.Fragment>
      <div className="breadcrumbs">
        {console.log(breadcrumbs)}
        {breadcrumbs.map(({ breadcrumb },index) => (
          <Link  key={index} to={`/${breadcrumb.props.children}`} className="location-link">
            {breadcrumb}
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
}
