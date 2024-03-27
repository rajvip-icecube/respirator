'use client'
import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { GET_PRODUCTS } from "@/app/api/itemQuery/route";

export default function Item({ category_id, pageName, sku,  priceRange, selectedBrand }) {
 
  const [count, setCount] = useState(0);
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      id: category_id,
      priceRange: priceRange,
      brand: selectedBrand,
    },
  });

 
  const inc = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };
 

  console.log("Data======>", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const filteredProducts = data.products.items.filter((product) => {
    const productPrice = parseFloat(product.price.regularPrice.amount.value);
    const [minPrice, maxPrice] = priceRange.split("-").map(parseFloat);
    const passesPriceFilter =
      productPrice >= minPrice && productPrice <= maxPrice;
    console.log("Product Price", passesPriceFilter);

    const passesBrandFilter = selectedBrand
      ? parseInt(product.brand) === parseInt(selectedBrand)
      : true;

    return passesPriceFilter && passesBrandFilter;
  });

  return (
    <div className="product-grid product-list">
   
      <>
        <div
          className="products wrapper grid columns4  products-grid"
       
        >
          {data && data.products && (
            <ol className="products list items product-items ">
              {filteredProducts.map((item) => (
                <li  key={index} class="item product product-item ">
                  <div class="product-item-info" data-container="product-grid">
                    <div class="product photo product-item-photo">
                      <a
                       
                        tabindex="-1"
                      >
                        <img
                          class="product-image-photo default_image porto-lazyload"
                          data-src="https://newdev.respiratorshop.co.uk/media/catalog/product/cache/c0858dd776f9aeca0c31a9acc5d639a6/s/t/st30_navy_1_1.jpg"
                          width="300"
                          height="400"
                          src={
                            item.small_image.url
                              ? item.small_image.url
                              : "https://newdev.respiratorshop.co.uk/media/wysiwyg/disposablemasks.jpg"
                          }
                        />
                      </a>
                    </div>
                    <div class="product details product-item-details">
                      <strong class="product name product-item-name">
                        <Link
                          class="product-item-link"
                          href={`/${pageName}/${item.sku}`}
                        
                        >
                          {item.name}
                        </Link>
                      </strong>

                      <div
                        class="price-box price-final_price"
                        data-role="priceBox"
                        data-product-id="109"
                        data-price-box="product-id-109"
                      >
                        <span class="price-container price-final_price tax weee">
                          <span
                            id="product-price-109"
                            data-price-amount="3.349999"
                            data-price-type="basePrice"
                            class="price-wrapper "
                          >
                            <span class="price">
                              {" "}
                              {item.price.regularPrice.amount.value}
                              {item.price.regularPrice.amount.currency}
                            </span>{" "}
                          </span>
                        </span>
                      </div>
                      <div class="product-item-inner">
                        <div class="product actions product-item-actions">
                          <div class="actions-primary">
                            <form
                              data-role="tocart-form"
                          
                            >
                           
                              <button
                                type="submit"
                                title="Add to Cart"
                                class="action tocart primary"
                                value={count}
                                onClick={inc}
                              >
                                <span>Add to Cart</span>
                              </button>
                            </form>
                            {item.stockStatus === "unavailable" && (
                              <div className="stock unavailable">
                                <span>Out of stock</span>
                              </div>
                            )}
                          </div>
                          <a
                            href="#"
                            class="action tocompare actions-secondary "
                            title="Add to Compare"
                            aria-label="Add to Compare"
                            data-post='{"action":"https:\/\/newdev.respiratorshop.co.uk\/catalog\/product_compare\/add\/","data":{"product":"109","uenc":"aHR0cHM6Ly9uZXdkZXYucmVzcGlyYXRvcnNob3AuY28udWsvcHJvdGVjdGl2ZS1jb3ZlcmFsbHMuaHRtbA~~"}}'
                            role="button"
                          >
                            <span>Add to Compare</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </>
    </div>
  );
}
