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
  BP
} from 'bootstrap-4-react';
import { Table } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import styles from './styles.css'

const btnStyles = {
  marginTop: "10px"
}

const Templates = (props) => {
  const { t, i18n } = useTranslation();
  const [ createMode, setCreateMode ] = useState('');

  const onSubmit = (e) => {
    // e.preventDefault();
    // const {username: {value: username}, password: {value: password}} = e.target;
    // console.log(username, password);
  }

  const ActionButtons = ({templateId, className}) => (
    <div className={className}>
      <Button info sm>{t('tmpl_table_header_actions_open_tmpl')}</Button>
      <Button danger sm disabled>{t('tmpl_table_header_actions_edit_tmpl')}</Button>
    </div>
  )


  return (
    <div>
      <Row>
        <Col md="8" order="md-1" style={{margin: "0 auto"}}>
          <h1>{t('templates')}</h1>
          <Row>
            <Table striped bordered hover size="sm">
              <thead>
              <tr>
                <th>№</th>
                <th>{t('tmpl_table_header_name')}</th>
                <th>{t('tmpl_table_header_actions')}</th>
              </tr>
              </thead>
              <tbody>
              {props.items.map((v, k) =>
                <tr>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td><ActionButtons className='tmpl-table__btn-wrapper' templateId={v.id}/></td>
                </tr>
              )}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('sfsdf', state)
  return {
    items: state.templates.items
  }
}

export default connect(mapStateToProps, null)(Templates)
