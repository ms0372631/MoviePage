import React from "react";
import "./PageSwitch.sass";

export default class PageSwitch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="page-info">
          <button disabled={this.props.page === 1 ? true : false}
                  onClick={() => this.props.switchPage(this.props.page - 1)}> Prev </button>
          <p> {this.props.page} / {this.props.totalPages} </p>
          <button disabled={this.props.page === this.props.totalPages ? true : false}
                  onClick={() => this.props.switchPage(this.props.page + 1)}> Next </button>
        </div>
      </>
    );
  }
}
