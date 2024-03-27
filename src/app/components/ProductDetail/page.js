'use client'
import React, {useState} from "react";
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from "../../api/itemQuery/route";
export default function ProductDetail({ product, imageUrl, goToPreviousProduct, goToNextProduct,category_id }) {
  const [quantity, setQuantity] = useState(1);
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { 
      id: category_id, 
    }, 
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const products = data.products.items.slice(0,5);
  const incrementQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
      if (quantity > 1) {
          setQuantity(prevQuantity => prevQuantity - 1);
      }
  };

  return (
    
    <>
     <main id="maincontent" className="page-main">
        <a id="contentarea" tabindex="-1"></a>
        <div className="page messages">
          <div data-placeholder="messages"></div>
          <div data-bind="scope: 'messages'">
            <div
              aria-atomic="true"
              role="alert"
              data-bind="foreach: { data: cookieMessages, as: 'message' }"
              className="messages"
            >
              <div
                data-bind="attr: {
            className: 'message-' + message.type + ' ' + message.type + ' message',
            'data-ui-id': 'message-' + message.type
        }"
              >
                <div data-bind="html: $parent.prepareMessageForHtml(message.text)"></div>
              </div>
            </div>

            <div
              aria-atomic="true"
              role="alert"
              className="messages"
              data-bind="foreach: {
        data: messages().messages, as: 'message'
    }"
            >
              <div
                data-bind="attr: {
            className: 'message-' + message.type + ' ' + message.type + ' message',
            'data-ui-id': 'message-' + message.type
        }"
              >
                <div data-bind="html: $parent.prepareMessageForHtml(message.text)"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-main-inner">
          <div className="columns">
            <div className="column main">
              <div className="product media">
                <a id="gallery-prev-area" tabindex="-1"></a>
                <div className="action-skip-wrapper">
                  <a
                    className="action skip gallery-next-area"
                    href="#gallery-next-area"
                  >
                    <span>Skip to the end of the images gallery </span>
                  </a>
                </div>
            
                <img src={imageUrl} alt="Product" />
               
                <div className="action-skip-wrapper">
                  <a
                    className="action skip gallery-prev-area"
                    href="#gallery-prev-area"
                  >
                    <span>Skip to the beginning of the images gallery </span>
                  </a>
                </div>
                <a id="gallery-next-area" tabindex="-1"></a>
              </div>
              <div className="product-info-main">
                <div className="prev-next-products">
                  <div className="product-nav product-prev" onClick={goToPreviousProduct}>
                    <a
                      title="Previous Product"
                    >
                      <em className="porto-icon-left-open"></em>
                    </a>
                    <div className="product-pop">
                      <img
                        className="product-image"
                        alt="Portwest P005 Respirator Dust Mask"
                      />
                      <h3 className="product-name">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <div className="product-nav product-next" onClick={goToNextProduct}>
                    <a
                      title="Next Product"
                    >
                      <em className="porto-icon-right-open"></em>
                    </a>
                    <div className="product-pop">
                      <img
                        className="product-image"
                        alt="Portwest P250 FFP2 Dust Fold Flat Respirator"
                      />
                      <h3 className="product-name">
                      {product.name}

                      </h3>
                    </div>
                  </div>
                </div>
                <div className="page-title-wrapper product">
                  <h1 className="page-title">
                    <span
                      className="base"
                      data-ui-id="page-title-wrapper"
                      itemprop="name"
                    >
                                             {product.name}

                    </span>{" "}
                  </h1>
                </div>
                <div className="product-info-price">
                  <div
                    className="price-box price-final_price"
                    data-role="priceBox"
                    data-product-id="23"
                    data-price-box="product-id-23"
                  >
                    <span
                      className="price-container price-final_price tax weee"
                      itemprop="offers"
                      itemscope
                      itemtype="http://schema.org/Offer"
                    >
                      <span
                        id="product-price-23"
                        data-price-amount="12.416665666667"
                        data-price-type="basePrice"
                        className="price-wrapper "
                      >
                        <span className="price">{product.price.regularPrice.amount.currency}{product.price.regularPrice.amount.value}
                        </span>{" "}
                      </span>
                      <meta itemprop="price" content="12.416665666667" />
                      <meta itemprop="priceCurrency" content="GBP" />
                      <link
                        itemprop="availability"
                        href="http://schema.org/InStock"
                      />
                      <a
                        itemprop="url"
                        style={{display: "none"}}

                      >
                        {product.name} -10 Box
                      </a>
                    </span>
                  </div>
                  <div className="product-info-stock-sku">
                    <div className="stock available" title="Availability">
                      <span className="label">Availability:</span>
                      <span>In stock</span>
                    </div>

                    <div className="product attribute sku">
                      <strong className="type">SKU</strong>
                      <div className="value" itemprop="sku">
                       {product.sku}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product attribute overview">
                  <div className="value" itemprop="description">
                 {product.meta_description}
                    
                  </div>
                </div>

                <div className="product-add-form">
                  <form
                    data-product-sku="P101"
                    action="https://newdev.respiratorshop.co.uk/checkout/cart/add/uenc/aHR0cHM6Ly9uZXdkZXYucmVzcGlyYXRvcnNob3AuY28udWsvcG9ydHdlc3QtcDEwMS1mZnAxLXZhbHZlZC1kdXN0LW1hc2stcmVzcGlyYXRvci0xMC1ib3guaHRtbA~~/product/23/"
                    method="post"
                    id="product_addtocart_form"
                  >
                    <input type="hidden" name="product" value="23" />
                    <input
                      type="hidden"
                      name="selected_configurable_option"
                      value=""
                    />
                    <input
                      type="hidden"
                      name="related_product"
                      id="related-products-field"
                      value=""
                    />
                    <input type="hidden" name="item" value="23" />
                    <input
                      name="form_key"
                      type="hidden"
                      value="EBQz52Mp9CEc2lLi"
                    />{" "}
                    <div className="box-tocart">
                      <div className="fieldset">
                        <div className="field qty">
                          <label className="label" for="qty">
                            <span>Qty:</span>
                          </label>
                          <div className="control">
                            <input
                             type="number"
                             name="qty"
                             id="qty"
                             maxLength="12"
                             value={quantity}
                             title="Qty"
                             className="input-text qty"
                            />
                          <div className="qty-changer">
                <a href="javascript:void(0)" className="qty-inc" onClick={incrementQuantity}>
                    <i className="porto-icon-up-dir"></i>
                </a>
                <a href="javascript:void(0)" className="qty-dec" onClick={decrementQuantity}>
                    <i className="porto-icon-down-dir"></i>
                </a>
            </div>
                          </div>
                        </div>
                        <div className="actions test">
                          <button
                            type="submit"
                            title="Add to Cart"
                            className="action primary tocart"
                            id="product-addtocart-button"
                          >
                            <span>Add to Cart</span>
                          </button>
                          <button
                            type="button"
                            title="Add to Cart"
                            className="custom-addtocart"
                            id="custom-addtocart"
                          >
                            <span>Add to Cart</span>
                          </button>

                          <div
                            id="instant-purchase"
                            data-bind="scope:'instant-purchase'"
                          ></div>
                        </div>
                      </div>
                    </div>
               
                  </form>
                </div>

                <div className="product-social-links">
                  <div className="product-addto-links" data-role="add-to-links">
                    <a
                      data-post='{"action":"https:\/\/newdev.respiratorshop.co.uk\/catalog\/product_compare\/add\/","data":{"product":"23","uenc":"aHR0cHM6Ly9uZXdkZXYucmVzcGlyYXRvcnNob3AuY28udWsvcG9ydHdlc3QtcDEwMS1mZnAxLXZhbHZlZC1kdXN0LW1hc2stcmVzcGlyYXRvci0xMC1ib3guaHRtbA~~"}}'
                      data-role="add-to-links"
                      className="action tocompare"
                    >
                      <span>Add to Compare</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="clearer"></div>{" "}
             
              <div
                className="block related"
                data-mage-init='{"upsellProducts":{}}'
                data-limit="0"
                data-shuffle="0"
              >
                <div className="clearer"></div>
                <div className="block-title title">
                  <strong
                    id="block-related-heading"
                    role="heading"
                    aria-level="2"
                  >
                    Related Products
                  </strong>
                </div>
                <div
                  className="block-content content"
                  aria-labelledby="block-related-heading"
                >
                  <div className="products wrapper grid  products-grid products-related">
                    <div className="products list items product-items  ">
                      <div
                        className="item product product-item"
                      >
                        {" "}
                        {products.map(product => (
                        <div className="product-item-info related-available">
                          <a
                          
                            className="product photo product-item-photo"
                            tabindex="-1"
                          >
                            <img
                              className="product-image-photo default_image"
                              src={product.small_image.url}
                           
                            />
                          </a>
                          <div className="product details product-item-details">
                            <strong className="product name product-item-name">
                              <a
                                className="product-item-link"
                              >
                               {product.name}
                              </a>
                            </strong>

                            <div className="product-reviews-summary short">
                              <div className="rating-summary">
                                <span className="label">
                                  <span>Rating:</span>
                                </span>
                                <div className="rating-result" title="0%">
                                  <span style={{width: "0"}}>
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
                                  <span className="price">  {product.price.regularPrice.amount.value}
                          {product.price.regularPrice.amount.currency}</span>{" "}
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
              </div>
              <div className="custom-faq"></div>
              <div className="product_bottom_snippets"></div>
              <input name="form_key" type="hidden" value="EBQz52Mp9CEc2lLi" />
              <div
                id="authenticationPopup"
                data-bind="scope:'authenticationPopup', style: {display: 'none'}"
              ></div>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
}
