import React from 'react'
import { Link, withSiteData } from 'react-static'
import MenuList from 'MenuItems'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Row,
  Col } from 'reactstrap';


 export default withSiteData(class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    var width = document.body.clientWidth;
    if (width <= 993) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  render() {
    const logo = this.props.options.companyLogo

    return (
      <div className="navWrapper">

      </div>
    );
  }
})