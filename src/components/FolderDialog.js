import React, { Component } from 'react';
import Button from '@atlaskit/button';
import {Col, Row, Container} from 'react-bootstrap'

let FolderDialogStyles = {
    width: '1000px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '30%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '150px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let FolderDialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};

class FolderDialog extends Component {
    state = {
        isOpen: false
    }
  render() {
    return (
          <div style={FolderDialogStyles}>
                Choose folder to upload slides.
                <Container>
                <Row>
                    <Col xs={9}></Col>
                    <Col>
                    <Button appearance="primary" className="uploadBtm">Upload Slides</Button>
                    <input type="file" id="file_input_id" accept= "application/vnd.ms-powerpoint,text/plain" onChange={this.fileSelectedHandler}/>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                </Container>
                <Container>
                <Row>
                    <Col xs={4}>
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                    </Col>
                    <Col xs={4}>
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                    </Col>
                    <Col xs={4}>
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                    </Col>
                </Row>
                </Container> 
                <Container>
                    <Row>
                        <Col xs={10}></Col>
                        <Col>
                        <Button appearance="primary" className="uploadBtm">Upload Slides</Button>
                        <input type="file" id="file_input_id" accept= "application/vnd.ms-powerpoint,text/plain" onChange={this.fileSelectedHandler}/>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
          </div>     
      );
  }
}

export default FolderDialog;
