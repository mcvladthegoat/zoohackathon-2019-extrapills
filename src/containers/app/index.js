import React, { Component, useEffect } from 'react';
import Bootstrap, {
  Navbar,
  Nav,
  Form,
  Carousel,
  Button,
  Lead,
  Container,
  Row,
  Col,
  BP,
  BSpan,
  BImg
} from 'bootstrap-4-react';
import { Route, Link, withRouter } from 'react-router-dom';

import Footer from './footer';
import Menu from './menu';
import Home from '../home'
import About from '../about'
import Register from '../register';
import Login from '../login';
import Settings from '../settings'
import CreateNew from '../create'
import Journal from '../journal'
import Templates from '../templates'

const style = {
  carousel: {
    marginBottom: '4rem',
    slide: {
      image: {
        minWidth: '100%',
        height: '32rem'
      },
      caption: {
        marginBottom: '3rem'
      },
      p: {
        fontSize: '1.25rem',
        marginBottom: '1.25rem'
      }
    }
  },
  marketing: {
    color: '#5a5a5a',
    item: {
      marginBottom: '1.5rem',
      textAlign: 'center'
    }
  },
  featurette: {
    divider: {
      margin: '5rem 0'
    },
    image: {
      width: '500px',
      height: '500px'
    }
  }
}

const App = (props) => {
  useEffect(() => {
    Bootstrap.carousel();
  })
  console.log(props.location.pathname)
  return (
    <React.Fragment>
      <header>
        <Menu />
      </header>
      <main role="main" style={{marginTop: "100px"}}>
        { props.location.pathname === "/" && <MyCarousel /> }
        <Container style={style.marketing}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/create" component={CreateNew} />
          <Route exact path="/journal" component={Journal} />
          <Route exact path="/templates" component={Templates} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/settings" component={Settings} />
        </Container>
        <Footer />
      </main>
    </React.Fragment>
  )
}
const img_1x1 = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
const img_500x500 = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165ca78bc3b%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_165ca78bc3b%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.4%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"

const MyCarousel = props => (
  <Carousel id="myCarousel" style={style.carousel}>
    <Carousel.Indicators>
      <Carousel.Indicator target="#myCarousel" to="0" active />
      <Carousel.Indicator target="#myCarousel" to="1" />
      <Carousel.Indicator target="#myCarousel" to="2" />
    </Carousel.Indicators>
    <Carousel.Inner>
      <Carousel.Item active>
        <img src={img_1x1} style={style.carousel.slide.image} />
        <Container>
          <Carousel.Caption text="left" style={style.carousel.slide.caption}>
            <h1>Example headline.</h1>
            <p style={style.carousel.slide.p}>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
            <Button primary lg>Learn more</Button>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img_1x1} style={style.carousel.slide.image} />
        <Container>
          <Carousel.Caption style={style.carousel.slide.caption}>
            <h1>Another example headline.</h1>
            <p style={style.carousel.slide.p}>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
            <Button primary lg>Learn more</Button>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img_1x1} style={style.carousel.slide.image} />
        <Container>
          <Carousel.Caption text="right" style={style.carousel.slide.caption}>
            <h1>One more for good measure.</h1>
            <p style={style.carousel.slide.p}>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
            <Button primary lg>Learn more</Button>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
    </Carousel.Inner>
    <Carousel.Prev href="#myCarousel">
      <Carousel.Prev.Icon />
    </Carousel.Prev>
    <Carousel.Next href="#myCarousel">
      <Carousel.Next.Icon />
    </Carousel.Next>
  </Carousel>
)

export default withRouter(App)
