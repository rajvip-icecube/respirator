"use client";
import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { GET_PRODUCTS } from "@/app/api/itemQuery/route";
import Image from 'next/image'

export default function HomePageProducts({ category_id, pageName,sku }) {

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      id: category_id,
    },
  });
  console.log("data ===>", data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const allProducts = data.products.items.slice(0, 5);
 

  
  return (
    <>
      <div className="products-grid products-grid grid">
        <ol className="product-items widget-product-grid">
          {allProducts.map((item) => (
            <li  key={index} className="product-item">
              <div className="product-item-info">
        
              <img  src={item.small_image.url}/>

                <div className="product-item-details">
                  <Link
                    href={`/${pageName}/${item.sku}`}
                    className="product photo product-item-photo"
                    tabindex="-1"
                  >
                    <strong className="product-item-name">
                      <a
                        title="3M Aura 9312+ FFP1 Valved Dust/Mist Respirator - 10 Box"
                        className="product-item-link"
                      >
                        {item.name}
                      </a>
                    </strong>
                  </Link>

                  <div
                    className="product-reviews-summary"
                    itemprop="aggregateRating"
                    itemscope
                    itemtype="http://schema.org/AggregateRating"
                  >
                    <div className="rating-summary">
                      <span className="label">
                        <span>Rating:</span>
                      </span>
                      <div
                        className="rating-result"
                        id="rating-result_45"
                        title="100%"
                      >
                        <span>
                          <span>
                            <span itemprop="ratingValue">100</span>% of
                            <span itemprop="bestRating">100</span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="reviews-actions">
                      <a
                        className="action view"
                      >
                        <span itemprop="reviewCount">1</span>
                        &nbsp;
                        <span>Review </span>
                      </a>
                      <a
                        className="action add"
                      >
                        Add Your Review
                      </a>
                    </div>
                  </div>

                  <div
                    className="price-box price-final_price"
                    data-role="priceBox"
                    data-product-id="45"
                    data-price-box="product-id-45"
                  >
                    <span className="price-container price-final_price tax weee">
                      <span
                        id="old-price-45-widget-product-grid"
                        data-price-amount="22.699999"
                        data-price-type="basePrice"
                        className="price-wrapper "
                      >
                        <span className="price">
                          {item.price.regularPrice.amount.value}
                          {item.price.regularPrice.amount.currency}
                        </span>
                      </span>
                    </span>
                  </div>
                  <div className="product-item-actions">
                    <div className="actions-primary">
                      <button
                        className="action tocart primary"
                        data-post='{"action":"https:\/\/newdev.respiratorshop.co.uk\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly9uZXdkZXYucmVzcGlyYXRvcnNob3AuY28udWsv\/product\/45\/","data":{"product":"45","uenc":"aHR0cHM6Ly9uZXdkZXYucmVzcGlyYXRvcnNob3AuY28udWsv"}}'
                        type="button"
                        title="Add to Cart"
                      >
                        <span>Add to Cart</span>
                      </button>
                    </div>
                    <a
                      href="#"
                      className="action tocompare actions-secondary"
                      data-post='{"action":"https:\/\/newdev.respiratorshop.co.uk\/catalog\/product_compare\/add\/","data":{"product":"45","uenc":"aHR0cHM6Ly9uZXdkZXYucmVzcGlyYXRvcnNob3AuY28udWsv"}}'
                      title="Add to Compare"
                    >
                      <span>Add to Compare</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
