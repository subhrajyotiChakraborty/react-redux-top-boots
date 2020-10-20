import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import * as classes from "./ItemList.module.css";
import * as actions from "../../store/actions";
import Item from "../../components/Item/Item";

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div className={classes.listWrapper}>
        <h3 className={classes.itemText}>Top Picks</h3>
        <hr />
        <div className={classes.itemSection}>
          {this.props.items.map(({ id, name, imageUrl, price }) => {
            return (
              <Fragment key={id}>
                <Item
                  name={name}
                  imageURL={imageUrl}
                  price={price}
                  addToCart={() => this.props.addToCart()}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.items.loading,
    items: state.items.items,
    error: state.items.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => dispatch(actions.fetchItems()),
    addToCart: () => dispatch(actions.addToCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
