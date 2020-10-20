import React, { Component } from "react";
import { connect } from "react-redux";

import { FiShoppingCart } from "react-icons/fi";

import * as classes from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={classes.header}>
        <p className={classes.headerText}>Top Boots</p>
        <div className={classes.cartSection}>
          {this.props.cartCount > 0 ? (
            <p className={classes.cartBadge}>{this.props.cartCount}</p>
          ) : null}
          <FiShoppingCart className={classes.cartIcon} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartCount: state.cart.cartCount,
  };
};

export default connect(mapStateToProps, null)(Header);
