import React from 'react';
import './SideLinks.css';
import {Row} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import  FolderDialog from './FolderDialog'

export class SideLinks extends React.Component {

  
  
  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
  }

  render() {
    return (
          <div className="sideLinks">
            <header className="App-header">
            <Container>
              <Row>
                <Col xs={8}></Col>
                <Col>
                  <label for="file_input_id">Upload your slide</label>
                  <input type="file" id="file_input_id" 
                      accept= "application/vnd.ms-powerpoint,text/plain" onChange={this.fileSelectedHandler}/>
                </Col>
                <Col>
                  <a href="">User Guide</a>
                </Col>
              </Row>
            </Container>
            </header>
          </div>
      );
  }
}

export default SideLinks;
