import React from "react";

export default function FoundedCount({ filteredItems }) {
  return (
    <div className="col-6 d-flex align-items-center">
      <p className="m-0">{`${filteredItems.length} Product(s) found`}</p>
    </div>
  );
}
