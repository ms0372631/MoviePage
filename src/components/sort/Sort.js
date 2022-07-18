import React from "react";
import "./Sort.sass";

export default class Sort extends React.Component {
  render() {
    return (
      <>
        <div className="sorting">
          <button> Name </button>
          <button> Release Date </button>
          <button> Vote Count </button>
          <button> Vote Average </button>
        </div>
      </>
    );
  }
}
