import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import home from "../images/home.png";
import back from "../images/back.png";

import "../styles/categories.css";

const CategoryPage = (props) => {
  let categories = props.data.allContentfulMenuItem.nodes;
  let launcherSubs = props.data.allContentfulLauncherSubCategory.nodes;
  let products = props.data.allContentfulProduct.nodes;
  let slug = props.params.slug;

  const categoryTitle = categories
    .filter((category) => category.category === slug)
    .map((category) => {
      return (
        <div key={category.id}>
          <h1>{category.categoryTitle}</h1>
        </div>
      );
    });

  const categoryInfo = categories
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

  const golfBagList = products
    .filter((product) => product.subCategory === "golfBag")
    .map((product) => {
      return (
        <Link to={product.slug} key={product.id} className="product-listing">
          <img
            className="product-list-image"
            src={product.productImage.file.url}
            alt={product.productImageAlt}
          />

          <div className="product-list-title">
            <div>
              {product.new ? <p className="new">new!</p> : null}
              <p className="product-name">{product.productName}</p>
            </div>
          </div>
        </Link>
      );
    });

  const travelList = products
    .filter((product) => product.subCategory === "travel")
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

  const headWearList = products
    .filter((product) => product.subCategory === "headWear")
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

  const accessoiresSubsList = (
    <div className="padding">
      <h2 className="category-list-title">Golf Bags</h2>
      {golfBagList}
      <h2 className="category-list-title">Travel Accessories</h2>
      {travelList}
      <h2 className="category-list-title">Headwear and Accessories</h2>
      {headWearList}
    </div>
  );

  const launcherSubsList = launcherSubs.map((launcherSub) => {
    return (
      <Link to={launcherSub.slug} key={launcherSub.id}>
        <div
          className="accessoires-sub"
          style={{
            backgroundImage: `url(${launcherSub.categoryImage.file.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className="category-list-title">{launcherSub.categoryTitle}</h2>
        </div>
      </Link>
    );
  });

  const beginnerSetList = products
    .filter((product) => product.subCategory === "beginnerKit")
    .map((product) => {
      return (
        <Link to={product.slug} key={product.id} className="product-listing">
          <img
            className="product-list-image"
            src={product.productImage.file.url}
            alt={product.productImageAlt}
          />

          <div className="product-list-title">
            <p className="product-name">
              <p>
                {product.new ? <p className="new">new!</p> : null}
                <p className="product-name">{product.productName}</p>
              </p>
            </p>
          </div>
        </Link>
      );
    });

  const juniorSetList = products
    .filter((product) => product.subCategory === "juniorKit")
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

  const fullSetsSubsList = (
    <div className="padding">
      <h2 className="category-list-title">Beginner Kit</h2>
      {beginnerSetList}
      <h2 className="category-list-title">Junior Kit</h2>
      {juniorSetList}
    </div>
  );

  const productList = products
    .filter((product) => product.categorySlug === slug)
    .map((product) => {
      return (
        <Link to={product.slug} key={product.id} className="product-listing">
          <img
            className="product-list-image"
            src={product.productImage.file.url}
            alt={product.productImageAlt}
          />

          <p>
            {product.new ? <p className="new">new!</p> : null}
            <p className="product-name">{product.productName}</p>
          </p>
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
      <div className="category-title">
        <Link to="/categories" className="nav-link">
          <img src={back} className="nav-icon-back" alt="back link" />
        </Link>
        {slug === "club-sets" ? <h1>Club Sets</h1> : null}
        {slug === "launcher-xl" ? <h1>Launcher XL</h1> : null}
        {slug !== "club-sets" && slug !== "launcher-xl" ? (
          <div>{categoryTitle}</div>
        ) : null}
        <Link to="/categories" className="nav-link">
          <img src={home} className="nav-icon-home" alt="home link" />{" "}
        </Link>
      </div>
      <div className="menu-placeholder" />

      {slug === "launcher-xl" ? (
        <div>
          {launcherSubsList}{" "}
          <p className="launcher-in-store">Now available in stores</p>
        </div>
      ) : null}
      {slug === "wedges" ? (
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
      ) : null}

      {slug === "putters" ? (
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
      ) : null}

      {slug === "club-sets" ? <div>{fullSetsSubsList}</div> : null}

      {slug === "accessories" ? <div>{accessoiresSubsList}</div> : null}

      {slug !== "launcher-xl" &&
      slug !== "club-sets" &&
      slug !== "accessories" &&
      slug !== "wedges" &&
      slug !== "putters" ? (
        <>
          <div>{categoryInfo}</div>
          <div className="padding">
            <div className="product-list">{productList}</div>
          </div>
        </>
      ) : null}
    </>
  );
};

export const categoryQuery = graphql`
  query categoryQuery {
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

    allContentfulAccessoiresSubCategory(sort: { fields: index }) {
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

    allContentfulLauncherSubCategory(sort: { fields: index }) {
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

    allContentfulFullSetSubCategory(sort: { fields: index }) {
      nodes {
        id
        category
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
        subCategory
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

export default CategoryPage;
