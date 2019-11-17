import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { Navbar, Nav, Form, BSpan, Button } from 'bootstrap-4-react';
import { withTranslation } from 'react-i18next'

// const { t, i18n } = useTranslation();

const Menu = (props) => (
  <Navbar expand="md" dark fixed="top" bg="dark">
    <Navbar.Brand href="#"><b>iFill</b></Navbar.Brand>
    <Navbar.Toggler
      target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    />
    <Navbar.Collapse id="navbarCollapse">
      <Navbar.Nav mr="auto">
        { !props.authData.id &&
          <React.Fragment>
            <Link to="/create"><Nav.ItemLink>{props.t('create')}</Nav.ItemLink></Link>
            <Link to="/journal"><Nav.ItemLink>{props.t('journal')}</Nav.ItemLink></Link>
            <Link to="/templates"><Nav.ItemLink>{props.t('templates')}</Nav.ItemLink></Link>
            <Link to="/settings"><Nav.ItemLink>{props.t('settings')}</Nav.ItemLink></Link>
          </React.Fragment>
        }
        {/*{ props.authType === 'courier' ? <Button danger style={{'margin-left' : '10px'}} my="2 sm-0">Search order!</Button> : ""}*/}
      </Navbar.Nav>
        { props.authData.id &&
          <Navbar.Nav r="0">
            <Link to="/register"><Nav.ItemLink>Register</Nav.ItemLink></Link>
            <Link to="/login"><Nav.ItemLink>Log in</Nav.ItemLink></Link>
          </Navbar.Nav>
        }
    </Navbar.Collapse>
  </Navbar>
)

const mapStateToProps = nextProps => ({
  authData: nextProps.auth
})

export default connect(
  mapStateToProps,
  null
)(withTranslation()(Menu))
