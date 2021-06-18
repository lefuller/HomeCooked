import React, { Component } from "react";
import styles from "./Businesses.module.scss";
import { Link } from "react-router-dom";

export default class Business extends Component {
  componentDidMount() {
    this.props.fetchBusinesses();
    this.props.fetchProducts();

    this.getImage = this.getImage.bind(this);
  }

  getImage(productId) {
    console.log(productId);
    return this.props.products.find((x) => x._id === productId).photos[0];
  }
  render() {
    if (!Array.isArray(this.props.businesses)) {
      return null;
    } else {
      if (this.props.products.length < 1) {
        return null;
      } else {
        console.log(this.props.products);
        return (
          <div className={styles.Wrapper}>
            <div className={styles.List}>
              {this.props.businesses.map((business) => {
                return (
                  <>
                    <div className={styles.Item}>
                      <div className={styles.Details}>
                        <Link
                          className={styles.NavLink}
                          to={`/homecook/${business._id}`}
                        >
                          {business.name}
                        </Link>
                        <p className={styles.Categories}>
                          {business.categories[0].title},{" "}
                          {business.categories[1].title},{" "}
                          {business.categories[2].title}{" "}
                        </p>
                        <p>{business.location.display_address[0]}</p>
                        <p>{business.location.display_address[1]}</p>
                      </div>
                      <p className={styles.PhotoWrapper}>
                        <img className={styles.Photo} src={this.getImage(business.products[0])} alt="" />
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        );
      }
    }
  }
}
