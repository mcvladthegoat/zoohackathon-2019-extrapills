import React, { useState, useEffect } from 'react'
import Bootstrap, {
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
  Modal
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
  const [ selectedTmpl, setSelectedTmpl ] = useState(0);

  const onSubmit = (e) => {
    // e.preventDefault();
    // const {username: {value: username}, password: {value: password}} = e.target;
    // console.log(username, password);
  }

  const onClickEditBtn = (e) => {
    setSelectedTmpl(e.target.attributes.modalKey.value)
  }

  const ActionButtons = ({templateId, className, modalKey}) => (
    <div className={className}>
      <Button data-toggle="modal" modalKey={modalKey} data-target="#largeModal" info sm onClick={onClickEditBtn}>{t('tmpl_table_header_actions_open_tmpl')}</Button>
      <Button id="editBtn" danger sm >{t('tmpl_table_header_actions_edit_tmpl')}</Button>
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
                  <td><ActionButtons className='tmpl-table__btn-wrapper' templateId={v.id} modalKey={k}/></td>
                </tr>
              )}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
      {/* Large modal */}
      <Modal id="largeModal" fade>
        <Modal.Dialog lg>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>{props.items[selectedTmpl].name}</Modal.Title>
              <Modal.Close>
                <span aria-hidden="true">&times;</span>
              </Modal.Close>
            </Modal.Header>
            <Modal.Body>
              <img style={{width: "100%"}} src={props.items[selectedTmpl].img} />
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

const mapStateToProps = (state) => {
  return {
    items: state.templates.items
  }
}

export default connect(mapStateToProps, null)(Templates)
