import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import home from "../images/home.png";
import back from "../images/back.png";

import Layout from "../components/Layout";
import Consent from "../components/Consent";

import "../styles/categories.css";

const HiboreSubCategoryPage = (props) => {
  let hiboreSubs = props.data.allContentfulHiboreSubCatergory.nodes;
  let products = props.data.allContentfulProduct.nodes;
  let slug = props.params.slug;

  const categoryTitle = hiboreSubs
    .filter((category) => category.category === slug)
    .map((category) => {
      return (
        <div key={category.id}>
          <h1>{category.categoryTitle}</h1>
        </div>
      );
    });

  const categoryInfo = hiboreSubs
    .filter((category) => category.category === slug)
    .map((category) => {
      return (
        <div key={category.id}>
          <img
            className="category-info-image"
            src={category.categoryImage.file.url}
            alt={category.categoryImageAlt}
          />
          <div className="padding">
            {category.categoryUnderTitle ? (
              <h2>{category.categoryUnderTitle}</h2>
            ) : null}
            {category.categoryIntroText ? (
              <p className="category-intro-text">
                {category.categoryIntroText.categoryIntroText}
              </p>
            ) : null}
          </div>
        </div>
      );
    });

  const hiboreSubsList = hiboreSubs.map((launcherSubsSub) => {
    return (
      <Link
        to={launcherSubsSub.slug}
        key={launcherSubsSub.id}
        className="category-list-link"
        style={{
          backgroundImage: `url(${launcherSubsSub.categoryImage.file.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          height: "20vh",
        }}
      >
        <h2 className="category-list-title">{launcherSubsSub.categoryTitle}</h2>
      </Link>
    );
  });

  const productListMen = products
    .filter(
      (product) => product.categorySlug === slug && product.women !== true
    )
    .map((product) => {
      return (
        <Link to={product.slug} key={product.id} className="product-listing">
          <img
            className="product-list-image"
            src={product.productImage.file.url}
            alt={product.productImageAlt}
          />
          <div className="product-list-title">
            <p>
              {product.new ? <p className="new">new!</p> : null}
              <p className="product-name">{product.productName}</p>
            </p>
          </div>
        </Link>
      );
    });

  const productListWomen = products
    .filter(
      (product) => product.categorySlug === slug && product.women === true
    )
    .map((product) => {
      return (
        <Link to={product.slug} key={product.id} className="product-listing">
          <img
            className="product-list-image"
            src={product.productImage.file.url}
            alt={product.productImageAlt}
          />
          <div className="product-list-title">
            <p>
              {product.new ? <p className="new">new!</p> : null}
              <p className="product-name">{product.productName}</p>
            </p>
          </div>
        </Link>
      );
    });

  return (
    <>
      <Helmet>
        <title>Cleveland Golf EU & UK Catalogue</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Consent />
      <div className="category-title">
        <Link to="/hibore-xl" className="nav-link">
          <img src={back} className="nav-icon-back" alt="back link" />
        </Link>
        <div>{categoryTitle}</div>
        <Link to="/categories" className="nav-link">
          <img src={home} className="nav-icon-home" alt="home link" />{" "}
        </Link>
      </div>
      <div className="menu-placeholder" />

      {slug === "hibore-xl" ? (
        <div className="launcher-menu">
          <div>{categoryInfo}</div>
          <div>{hiboreSubsList}</div>
          <p className="launcher-in-store">In stores in December 2025</p>
        </div>
      ) : (
        <>
          <div>{categoryInfo}</div>
          <div className="padding">
            <div className="product-list">
              <h2 class="category-list-title">Men</h2>
              {productListMen}
              <h2 class="category-list-title">Women</h2>
              {productListWomen}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const categoryQuery = graphql`
  query hiboreSubCategoryQuery {
    allContentfulMenuItem {
      nodes {
        id
        slug
        category
        categoryImageAlt
        categoryTitle
        categoryImage {
          file {
            url
          }
        }
        categoryUnderTitle
        categoryIntroText {
          categoryIntroText
        }
      }
    }
    allContentfulHiboreSubCatergory(sort: { fields: index }) {
      nodes {
        id
        category
        categoryImage {
          file {
            url
          }
        }
        categoryImageAlt
        categoryTitle
        slug
        index
      }
    }

    allContentfulProduct(sort: { fields: index }) {
      nodes {
        id
        index
        women
        new
        productName
        slug
        categorySlug
        productImage {
          file {
            url
          }
        }
      }
    }
  }
`;

HiboreSubCategoryPage.Layout = Layout;
export default HiboreSubCategoryPage;
