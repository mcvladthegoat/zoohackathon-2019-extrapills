import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Lead,
  Badge,
  ListGroup,
  List,
  Form,
  InputGroup,
  Button,
  BDiv,
  BH2,
  BH4,
  BH5,
  BH6,
  BSpan,
  BImg,
  BSmall,
  BHr,
  BFooter,
  BP,
  Modal
} from 'bootstrap-4-react';
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { Card, Tabs, Tab } from 'react-bootstrap'

import styles from './styles.css';

const btnStyles = {
  marginTop: "10px"
}

const CreateNew = (props) => {
  const { t, i18n } = useTranslation();
  const [ createMode, setCreateMode ] = useState('');
  const [ selectedTmpl, setSelectedTmpl ] = useState(0);


  const onCardClick = (e) => {
    console.log('wieiiewiid', e.target)
    setSelectedTmpl(e.target.attributes.modalKey.value)
    e.stopPropagation()
    e.preventDefault()
  }


  return (
    <div>
      <Row>
        <Col md="12" order="md-1" style={{margin: "0 auto"}}>
          <h1>{t('create_new')}</h1>
          <h6>{t('choose_template')}</h6>
          <Row className={'template-list'}>
             {props.templates.map((v, k) => {
               return (
                 <Card className={'template-list__card-item'}>
                   <Card.Img variant="top" src={v.img} />
                   <Card.Body>
                     <Card.Title>{v.name}</Card.Title>
                     <Card.Text>
                       Полей для заполнения: <b>{v.fields.length}</b>
                     </Card.Text>
                     <Button success data-toggle="modal" data-target="#largeModal" modalKey={k} onClick={onCardClick}>{t('select')}</Button>
                   </Card.Body>
                 </Card>
               )
             })}
          </Row>
          {/*<Row>*/}
            {/*<Col>*/}
              {/*<Button style={btnStyles} primary lg block onClick={() => setCreateMode('files')}>{t('viafiles')}</Button>*/}
            {/*</Col>*/}
            {/*<Col>*/}
              {/*<Button style={btnStyles} primary lg block onClick={() => setCreateMode('microphone')}>{t('viamicrophone')}</Button>*/}
            {/*</Col>*/}
          {/*</Row>*/}
          {/*{createMode === "files" &&*/}
            {/*<Row>*/}
              {/*<BHr md="3" />*/}
              {/*<Col>*/}
                {/*<p>Send <b>.wav</b> files</p>*/}
              {/*</Col>*/}
            {/*</Row>*/}
            {/*}*/}
            {/*{createMode === "microphone" &&*/}
            {/*<Row>*/}
              {/*<BHr md="3" />*/}
              {/*<Col>*/}
                {/*<p>press record button</p>*/}
              {/*</Col>*/}
            {/*</Row>*/}
          {/*}*/}
        </Col>
      </Row>
      {/* Large modal */}
      <Modal id="largeModal" fade>
        <Modal.Dialog lg>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>{props.templates[selectedTmpl].name}</Modal.Title>
              <Modal.Close>
                <span aria-hidden="true">&times;</span>
              </Modal.Close>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <img style={{width: "85%"}} src={props.templates[selectedTmpl].img} />
                  <p>Количество полей: {props.templates[selectedTmpl].fields.length}</p>
                </Col>
                <Col>
                  <BH5>{t('create_hint')}</BH5>
                  <Button style={btnStyles} primary block>{t('viafiles')}</Button>
                  <Button style={btnStyles} primary block>{t('viamicrophone')}</Button>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button secondary data-dismiss="modal">Close</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    templates: state.templates.items
  }
}

export default connect(mapStateToProps, null)(CreateNew)
