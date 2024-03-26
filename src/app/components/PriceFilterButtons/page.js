import React from 'react';

const PriceFilterButtons = ({ onPriceRangeChange, onBrandChange }) => {
  const handlePriceRangeChange = (newRange) => {
    onPriceRangeChange(newRange);
    
  };
  const handleBrandChange = (brand) => {
    onBrandChange(brand);
  };

  return (
    <>
    <div className="sidebar sidebar-main mobile-sidebar">
        <div className="sidebar-content">
          <div
            className="block filter"
            id="layered-filter-block"
            data-mage-init='{"collapsible":{"openedState": "active", "collapsible": true, "active": false, "collateral": { "openedState": "filter-active", "element": "body" } }}'
          >
            <div className="block-title filter-title" data-count="0">
              <strong data-role="title">Shop By</strong>
            </div>
            <div className="block-content filter-content">
              <strong
                role="heading"
                aria-level="2"
                className="block-subtitle filter-subtitle"
              >
                Shopping Options
              </strong>
              <div
                class="filter-options mage-accordion-disabled"
                id="narrow-by-list"
                data-role="content"
                role="tablist"
              >
                <div
                  data-role="collapsible"
                  class="filter-options-item allow active"
                  role="presentation"
                  data-collapsible="true"
                >
                  <div
                    data-role="title"
                    class="filter-options-title"
                    role="tab"
                    aria-selected="false"
                    aria-expanded="false"
                    tabindex="0"
                  >
                    Price<span class="toggle"></span>
                  </div>
                  <div
                    data-role="content"
                    class="filter-options-content"
                    role="tabpanel"
                    aria-hidden="true"
                  >
                    <ol class="items">
                      <li class="item">
                        <a
                          rel="nofollow"
                          onClick={() => handlePriceRangeChange('0-9')}
                        >
                          <span class="price">£0.00</span> -{" "}
                          <span class="price">£9.99</span>
                          <span class="count">
                            6<span class="filter-count-label">item</span>
                          </span>
                        </a>
                      </li>
                      <li class="item">
                        <a
                         onClick={() => handlePriceRangeChange('10-19.99')}
                          rel="nofollow"
                        >
                          <span class="price">£10.00</span> -{" "}
                          <span class="price">£19.99</span>
                          <span class="count">
                            7<span class="filter-count-label">item</span>
                          </span>
                        </a>
                      </li>
                      <li class="item">
                        <a
                          onClick={() => handlePriceRangeChange('20-29.99')}
                          rel="nofollow"
                        >
                          <span class="price">£20.00</span> -{" "}
                          <span class="price">£29.99</span>
                          <span class="count">
                            4<span class="filter-count-label">item</span>
                          </span>
                        </a>
                      </li>
                      <li class="item">
                        <a
                          onClick={() => handlePriceRangeChange('30-39.99')}
                          rel="nofollow"
                        >
                          <span class="price">£30.00</span> -{" "}
                          <span class="price">£39.99</span>
                          <span class="count">
                            2<span class="filter-count-label">item</span>
                          </span>
                        </a>
                      </li>
                      <li class="item">
                        <a
                          onClick={() => handlePriceRangeChange('40-49.99')}
                          rel="nofollow"
                        >
                          <span class="price">£40.00</span> -{" "}
                          <span class="price">£49.99</span>
                          <span class="count">
                            2<span class="filter-count-label">item</span>
                          </span>
                        </a>
                      </li>
                      <li class="item">
                        <a
                          onClick={() => handlePriceRangeChange('60-200')}
                          rel="nofollow"
                        >
                          <span class="price">£60.00</span> and above
                          <span class="count">
                            1<span class="filter-count-label"> item</span>
                          </span>
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
               
                <div
                  data-role="collapsible"
                  class="filter-options-item active"
                  role="presentation"
                  data-collapsible="true"
                >
                  <div
                    data-role="title"
                    class="filter-options-title"
                    role="tab"
                    aria-selected="false"
                    aria-expanded="true"
                    tabindex="0"
                  >
                    Brand<span class="toggle"></span>
                  </div>
                  <div
                    data-role="content"
                    class="filter-options-content"
                    role="tabpanel"
                    aria-hidden="false"
                  >
                    <ol class="items">
                      <li class="item">
                        <a
                         onClick={() => handleBrandChange('2')}
                          rel="nofollow"
                        >
                          PMD
                          <span class="count">
                            2<span class="filter-count-label">item</span>
                          </span>
                        </a>
                      </li>
                      <li class="item">
                        <a
                         onClick={() => handleBrandChange('9')}
                          rel="nofollow"
                        >
                          Moldex
                          <span class="count">
                            9<span class="filter-count-label">item</span>
                          </span>
                        </a>
                      </li>
                      <li class="item">
                        <a
                          onClick={() => handleBrandChange('6')}
                          rel="nofollow"
                        >
                          Portwest
                          <span class="count">
                            6<span class="filter-count-label">item</span>
                          </span>
                        </a>
                      </li>
                      <li class="item">
                        <a
                          onClick={() => handleBrandChange('1')}
                          rel="nofollow"
                        >
                          JSP
                          <span class="count">
                            1<span class="filter-count-label"> item</span>
                          </span>
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
               
             
              </div>
            </div>
          </div>
          <div className="side-custom-block"></div>
        </div>
      </div></>
  );
};

export default PriceFilterButtons;
