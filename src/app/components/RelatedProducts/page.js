'use client'
import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { GET_PRODUCTS } from "@/app/api/itemQuery/route";
export default function RelatedProducts({ category_id }) {
    const { loading, error, data } = useQuery(GET_PRODUCTS, {
        variables: {
          id: category_id,
        },
      });
      const allProducts = data.products.items.slice(0, 5);
  return (
    <div
      className="block-content content"
      aria-labelledby="block-related-heading"
    >
      <div className="products wrapper grid  products-grid products-related">
        <div className="products list items product-items  ">
          <div
            className="item product product-item"
            style={{ display: "none" }}
          >
            {allProducts.map((item) => (
            <div className="product-item-info related-available">
              <a
               
                className="product photo product-item-photo"
                tabindex="-1"
              >
                <img
                  className="product-image-photo default_image"
                  src={item.small_image.url}
                  alt="Prduct Image"
                />
              </a>
              <div className="product details product-item-details">
                <strong className="product name product-item-name">
                  <a
                    className="product-item-link"
                    title="Portwest P201 FFP2 Valved Dust Mist Respirator - 10 Box"
                    
                  >
                    {item.name}
                  </a>
                </strong>

                <div className="product-reviews-summary short">
                  <div className="rating-summary">
                    <span className="label">
                      <span>Rating:</span>
                    </span>
                    <div className="rating-result" title="0%">
                      <span style={{ width: "0" }}>
                        <span>0%</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="price-box price-final_price"
                  data-role="priceBox"
                  data-product-id="20"
                  data-price-box="product-id-20"
                >
                  <span className="price-container price-final_price tax weee">
                    <span
                      id="product-price-20"
                      data-price-amount="15.699999"
                      data-price-type="basePrice"
                      className="price-wrapper "
                    >
                      <span className="price">{item.price.regularPrice.amount.value}
                          {item.price.regularPrice.amount.currency}</span>{" "}
                    </span>
                  </span>
                </div>

                <div className="product actions product-item-actions">
                  <div
                    className="secondary-addto-links actions-secondary"
                    data-role="add-to-links"
                  >
                    <a
                      href="#"
                      className="action tocompare"
                      data-post='{"action":"https:\/\/newdev.respiratorshop.co.uk\/catalog\/product_compare\/add\/","data":{"product":"20","uenc":"aHR0cHM6Ly9uZXdkZXYucmVzcGlyYXRvcnNob3AuY28udWsvcG9ydHdlc3QtcDEwMS1mZnAxLXZhbHZlZC1kdXN0LW1hc2stcmVzcGlyYXRvci0xMC1ib3guaHRtbA~~"}}'
                      data-role="add-to-links"
                      title="Add to Compare"
                    >
                      <span>Add to Compare</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
           ))}
          </div>
        </div>
      </div>
    </div>
  );
}
