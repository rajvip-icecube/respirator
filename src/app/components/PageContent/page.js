'use client'
import React, { useState}  from "react";
import PriceFilterButtons from "../PriceFilterButtons/page";
import Item from "../item/page";
export default function PageContent({ category, category_id, pageName }) {
  const [priceRange, setPriceRange] = useState("0-100");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
  };

  const handleBrandChange = (brand) => {
    console.log("Selected Brand:", brand);
    setSelectedBrand(brand);
  };
  return (
    <>
      <main id="maincontent" className="page-main">
        <a id="contentarea" tabindex="-1"></a>
        <div className="page-title-wrapper">
          <h1
            className="page-title"
            id="page-title-heading"
            aria-labelledby="page-title-heading toolbar-amount"
          >
            <span className="base" data-ui-id="page-title-wrapper">
              {category.name}
            </span>
          </h1>
        </div>
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
              <input name="form_key" type="hidden" value="q93oaDgehjxoeIEm" />
              <div
                id="authenticationPopup"
                data-bind="scope:'authenticationPopup'"
              ></div>

              <div className="category-description">
                <div
                  dangerouslySetInnerHTML={{
                    __html: category.description,
                  }}
                ></div>
              </div>
              <Item category_id={category_id} pageName={pageName}   priceRange={priceRange}
          selectedBrand={selectedBrand}/>
              <div
                className="toolbar toolbar-products"
                data-mage-init='{"productListToolbarForm":{"mode":"product_list_mode","direction":"product_list_dir","order":"product_list_order","limit":"product_list_limit","modeDefault":"grid","directionDefault":"asc","orderDefault":"position","limitDefault":12,"url":"https:\/\/newdev.respiratorshop.co.uk\/ear-protection.html","formKey":"q93oaDgehjxoeIEm","post":false}}'
              >
                <a
                  href="#"
                  className="porto-product-filters-toggle sidebar-toggle d-inline-flex d-lg-none"
                >
                  <svg
                    data-name="Layer 3"
                    id="Layer_3"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      className="cls-1"
                      x1="15"
                      x2="26"
                      y1="9"
                      y2="9"
                    ></line>
                    <line className="cls-1" x1="6" x2="9" y1="9" y2="9"></line>
                    <line
                      className="cls-1"
                      x1="23"
                      x2="26"
                      y1="16"
                      y2="16"
                    ></line>
                    <line
                      className="cls-1"
                      x1="6"
                      x2="17"
                      y1="16"
                      y2="16"
                    ></line>
                    <line
                      className="cls-1"
                      x1="17"
                      x2="26"
                      y1="23"
                      y2="23"
                    ></line>
                    <line
                      className="cls-1"
                      x1="6"
                      x2="11"
                      y1="23"
                      y2="23"
                    ></line>
                    <path
                      className="cls-2"
                      d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
                    ></path>
                    <path
                      className="cls-2"
                      d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"
                    ></path>
                    <path
                      className="cls-3"
                      d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z"
                    ></path>
                    <path
                      className="cls-2"
                      d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
                    ></path>
                  </svg>{" "}
                  <span>Filter</span>
                </a>
                <div className="toolbar-sorter sorter">
                  <label className="sorter-label" for="sorter">
                    Sort By
                  </label>
                  <select
                    id="sorter"
                    data-role="sorter"
                    className="sorter-options"
                  >
                    <option value="position" selected="selected">
                      Position{" "}
                    </option>
                    <option value="name">Product Name </option>
                    <option value="price">Price </option>
                    <option value="brand">Brand </option>
                  </select>
                  <a
                    title="Set&#x20;Descending&#x20;Direction"
                    href="#"
                    className="action sorter-action sort-asc"
                    data-role="direction-switcher"
                    data-value="desc"
                  >
                    <span>Set Descending Direction</span>
                  </a>
                </div>

                <div className="modes">
                  <strong className="modes-label" id="modes-label">
                    View as
                  </strong>
                  <strong
                    title="Grid"
                    className="modes-mode active mode-grid"
                    data-value="grid"
                  >
                    <span>Grid</span>
                  </strong>
                  <a
                    className="modes-mode mode-list"
                    title="List"
                    href="#"
                    data-role="mode-switcher"
                    data-value="list"
                    id="mode-list"
                    aria-labelledby="modes-label mode-list"
                  >
                    <span>List</span>
                  </a>
                </div>

                <p className="toolbar-amount" id="toolbar-amount">
                  Items <span className="toolbar-number">1</span>-
                  <span className="toolbar-number">12</span> of{" "}
                  <span className="toolbar-number">22</span>{" "}
                </p>

                <div className="pages">
                  <strong className="label pages-label" id="paging-label">
                    Page
                  </strong>
                  <ul
                    className="items pages-items"
                    aria-labelledby="paging-label"
                  >
                    <li className="item current">
                      <strong className="page">
                        <span className="label">
                          You&#039;re currently reading page
                        </span>
                        <span>1</span>
                      </strong>
                    </li>
                    <li className="item">
                      <a
                        className="page"
                      >
                        <span className="label">Page</span>
                        <span>2</span>
                      </a>
                    </li>

                    <li className="item pages-item-next">
                      <a
                        className="action  next"
                        title="Next"
                      >
                        <span className="label">Page</span>
                        <span>Next</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="field limiter">
                  <label className="label" for="limiter">
                    <span>Show</span>
                  </label>
                  <div className="control">
                    <select
                      id="limiter"
                      data-role="limiter"
                      className="limiter-options"
                    >
                      <option value="12" selected="selected">
                        12{" "}
                      </option>
                      <option value="24">24 </option>
                      <option value="36">36 </option>
                    </select>
                  </div>
                  <span className="limiter-text">per page</span>
                </div>
              </div>
            </div>
            <PriceFilterButtons onPriceRangeChange={handlePriceRangeChange} 
      onBrandChange={handleBrandChange} />
         
          </div>
        </div>
      </main>
    </>
  );
}
