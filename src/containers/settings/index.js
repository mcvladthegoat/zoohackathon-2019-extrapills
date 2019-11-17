import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

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

import setCookie from '../../utils/setcookie'
import i18next from 'i18next'

const Settings = () => {
  const { t, i18n } = useTranslation();
  const [ currentLang, setCurrentLang ] = useState(i18next.language)

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(currentLang)
    const newLang = e.target.lang.options[e.target.lang.selectedIndex].value
    console.log('new ui lang selected', newLang);
    setCookie('lang', newLang, {'secure': false, 'max-age': 3600});
    i18next.changeLanguage(newLang)
    setCurrentLang(newLang)
    // const {username: {value: username}, password: {value: password}} = e.target;
    // console.log(username, password);
  }

  const onLangChange = (e) => {
    setCurrentLang(e.target.value)
  }

  const selectedProp = {selected: "selected"};

  return (
    <div>
      <Row>
        <Col md="5" order="md-1" style={{margin: "0 auto"}}>
        <h1>{t('settings')}</h1>
          <Form needsValidation={false} onSubmit={onSubmit} >
          <BDiv mb="3">
            <label htmlFor="lang">{t('choose_language')}</label>
            <Form.Select name="lang" mb="1" value={currentLang} onChange={onLangChange}>
              <option value="en">English</option>
              <option value="ru">Русский (russian)</option>
            </Form.Select>
          </BDiv>
            <BHr md="3" />
            <Button primary lg block type="submit">Save settings</Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

// export default withTranslation()(Settings)
export default Settings
