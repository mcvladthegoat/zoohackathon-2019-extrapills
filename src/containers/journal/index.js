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
  Progress,
  ProgressBar
} from 'bootstrap-4-react';
import { Table } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import styles from './styles.css'

const btnStyles = {
  marginTop: "10px"
}

const Journal = (props) => {
  const { t, i18n } = useTranslation();
  const [ createMode, setCreateMode ] = useState('');

  const onSubmit = (e) => {
    // e.preventDefault();
    // const {username: {value: username}, password: {value: password}} = e.target;
    // console.log(username, password);
  }

  const ActionButtons = ({formId, className}) => (
    <div className={className}>
      <Button data-type="edit" data-form-id={formId} warning sm>{t('journal_table_edit')}</Button>
      <Button data-type="export" data-form-id={formId} danger sm>{t('journal_table_export')}</Button>
    </div>
  )

  const ProgressBar = ({ min, max, now }) => {
    const colorSchema = ['danger', 'warning', 'info', 'success'];
  }


  return (
    <div>
      <Row>
        <Col md="8" order="md-1" style={{margin: "0 auto"}}>
          <h1>{t('journal')}</h1>
          <Row>
            <Table striped bordered hover size="sm">
              <thead>
              <tr>
                <th>№</th>
                <th>{t('tmpl_table_header_name')}</th>
                <th>{t('journal_table_header_progress')}</th>
                <th>{t('tmpl_table_header_actions')}</th>
              </tr>
              </thead>
              <tbody>
              {props.items.map((v, k) =>
                <tr>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>
                    <Progress mb="2">
                      <Progress.Bar min="0" max={v.countAll} now={v.countFilled} bg="info"/>
                    </Progress>
                    <div className={"journal-table__progress_numbers"}> {v.countFilled} / {v.countAll} ({(v.countFilled / v.countAll * 100).toFixed(0)}%)</div>
                  </td>
                  <td><ActionButtons className='journal-table__btn-wrapper' formId={v.id}/></td>
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
  return {
    items: state.forms.items
  }
}

export default connect(mapStateToProps, null)(Journal)
