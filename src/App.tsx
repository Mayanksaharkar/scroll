import React from "react";

import ReactPageScroller, { SectionContainer } from "react-page-scroller";

import "./index.css";

export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = (number) => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = (number) => {
    console.log(number);
  };

  render() {
    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
        >
          <SectionContainer height={100}>
            <div style={{ backgroundColor: "red" }}></div>
          </SectionContainer>
          <SectionContainer height={100}>
            <div style={{ backgroundColor: "green" }}></div>
          </SectionContainer>
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}
