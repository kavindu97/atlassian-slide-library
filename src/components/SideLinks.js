import React from 'react';
import './SideLinks.css';
import {Row} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

export class SideLinks extends React.Component {
  render() {
    return (
          <div className="sideLinks">
            <header className="App-header">
            <Container>
              <Row>
                <Col sm={6.5}>
                  <span class="btn default btn-file">
                      <span class="fileinput-new">
                        Upload your slides
                      </span>
                      <input type="file" class="textbox wp95 fl fileupload fileInput" name="files" id="fileupload"/>
                  </span>
                </Col>
                <Col sm={5.5}>
                  <span class="btn default btn-file">
                    <a href="https://www.w3schools.com">User Guid</a>
                  </span>
                </Col>
              </Row>
            </Container>
            </header>
          </div>
      );
  }
}

export default SideLinks;
