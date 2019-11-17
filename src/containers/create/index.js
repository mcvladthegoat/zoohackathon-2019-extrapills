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
  BH6,
  BSpan,
  BImg,
  BSmall,
  BHr,
  BFooter,
  BP,
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

  const onSubmit = (e) => {
    e.preventDefault();
    const {username: {value: username}, password: {value: password}} = e.target;
    console.log(username, password);
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
                       Полей для заполнения: 1,
                     </Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
                 </Card>
               )
             })}
          </Row>
          <Row>
            <Col>
              <Button style={btnStyles} primary lg block onClick={() => setCreateMode('files')}>{t('viafiles')}</Button>
            </Col>
            <Col>
              <Button style={btnStyles} primary lg block onClick={() => setCreateMode('microphone')}>{t('viamicrophone')}</Button>
            </Col>
          </Row>
          {createMode === "files" &&
            <Row>
              <BHr md="3" />
              <Col>
                <p>Send <b>.wav</b> files</p>
              </Col>
            </Row>
            }
            {createMode === "microphone" &&
            <Row>
              <BHr md="3" />
              <Col>
                <p>press record button</p>
              </Col>
            </Row>
          }
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    templates: state.templates.items
  }
}

export default connect(mapStateToProps, null)(CreateNew)
