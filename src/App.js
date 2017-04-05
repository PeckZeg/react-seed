import React, { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Row, Col, Button } from 'antd';

export default class App extends Component {
  handleClick = e => {
    unmountComponentAtNode(document.querySelector('#app'));
  }

  render() {
    return (
      <div id="app">
        <header id="page-header">
          <Row>
            <Col span="4">Logo</Col>
          </Row>
        </header>
        <div className="page-container">Page Container</div>
      </div>
    );
  }
}
