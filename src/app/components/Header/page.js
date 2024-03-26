'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Search from "../Search/page";
import '../../styles/custom1.css'

export default function Header() {
  const router = useRouter();
  const handleButton = () => {
    router.push("/protective-masks")
  }
  
  return (
    <>
  
    <header className="page-header type1 ">
      
      <div className="panel wrapper">
        <div className="panel header">
          <a className="action skip contentarea" href="#contentarea">
            <span>Skip to Content </span>
          </a>
          <ul className="header links">
            <li className="greet welcome" data-bind="scope: 'customer'">
              <span
                className="logged-in"
                data-bind="text: new String('Welcome, %1!').
              replace('%1', customer().fullname)"
              ></span>
              <span className="not-logged-in" data-bind="text: ''"></span>
            </li>
            <li
              className="item link compare "
              data-bind="scope: 'compareProducts'"
              data-role="compare-products-link"
            >
              <a
                className="action compare"
                title="Compare Products"
                data-bind="attr: {'href': compareProducts().listUrl}, css: {'': !compareProducts().count}"
              >
                <em className="porto-icon-chart hidden-xs"></em>
                Compare (
                <span
                  className="counter qty"
                  data-bind="text: compareProducts().countCaption"
                ></span>
                )
              </a>
            </li>
            <li className="email-contact">
              <a
                href="mailto:sales@respiratorshop.co.uk"
                className="top-link-email"
              >
                <span className="email-top"> Email Us </span>
              </a>{" "}
              | Tel{" "}
              <a className="mobile-tel-header" href="tel:01435 510749">
                01435 510749
              </a>{" "}
              | <span className="time-top">Monday - Friday / 9am - 5pm</span>
            </li>
            <li>
              <a href="/contact">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/blog">BLOG</a>{" "}
            </li>
            <li className="link authorization-link" data-label="or">
              <Link href="/signin">
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/create"
                id="idRthVka8e"
              >
                Create an Account
              </Link>
            </li>
          </ul>{" "}
        </div>
      </div>
      <div className="header content">

        <strong className="logo">
          <Link  href="/">
          <img
            src="https://newdev.respiratorshop.co.uk/media/logo/default/logo.png"
            alt="Respirator Shop"
            width="170"
            height="66"
          />
          </Link>
        </strong>

        <div data-block="minicart" className="minicart-wrapper cart-design-1">
          <a
            className="action showcart"
            data-bind="scope: 'minicart_content'"
          >
            <i className="minicart-icon porto-icon-shopping-cart"></i>
            <span className="text">Cart</span>
            <span
              className="counter qty empty"
              data-bind="css: { empty: !!getCartParam('summary_count') == false }, blockLoader: isLoading"
            >
               <span className="counter-number">0</span>
              <span className="counter-label"><span>Items</span></span>
            </span>
          </a>
          <a
            className="showcart action-subtotal d-none"
            data-bind="scope: 'minicart_content'"
          >
            <span className="cart-subtotal">
              Shopping Cart{" "}
              <span className="cart-price">
                <span
                  className="amount"
                  data-bind="html: getCartParam('subtotal')"
                ></span>
              </span>
            </span>
          </a>
          <div
            className="block block-minicart empty"
            data-role="dropdownDialog"
            data-mage-init='{"dropdownDialog":{
                "appendTo":"[data-block=minicart]",
                "triggerTarget":".showcart",
                "timeout": "2000",
                "closeOnMouseLeave": false,
                "closeOnEscape": true,
                "triggerclassName":"active",
                "parentclassName":"active",
                "buttons":[]}}'
          >
            <div
              id="minicart-content-wrapper"
              data-bind="scope: 'minicart_content'"
            ></div>
          </div>
        </div>
        <span data-action="toggle-nav" className="action nav-toggle">
          <span>Toggle Nav</span>
        </span>

        <div className="header-search-icon">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <div className="block block-search">
          <div className="block block-content">
            <form
              className="form minisearch"
              id="search_mini_form"
              action="https://newdev.respiratorshop.co.uk/catalogsearch/result/"
              method="get"
            >
              <div className="field search">
                <div className="control">
                <Search />
                </div>
              </div>
              <div className="actions">
                <button type="submit" title="Search" className="action search">
                  <span>Search</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="custom-block">
          <p>
            <em className="porto-icon-phone" style={{ marginRight: '5px' }}></em>
            <span>
              <a href="tel:01435 510749">01435 510749</a>
            </span>{" "}
            <span className="split"></span>{" "}
            <Link href="/contact">CONTACT</Link>
          </p>
        </div>
       
      </div>
      <div className="sections nav-sections">
        <div
          className="section-items nav-sections-items"
          data-mage-init='{"tabs":{"openedState":"active"}}'
        >
          <div
            className="section-item-title nav-sections-item-title"
            data-role="collapsible"
          >
            <a
              className="nav-sections-item-switch"
              data-toggle="switch"
              href="#store.menu"
            >
              Menu{" "}
            </a>
          </div>
          <div
            className="section-item-content nav-sections-item-content"
            id="store.menu"
            data-role="content"
          >
            <nav className="navigation sw-megamenu " role="navigation">
              <ul>
                <li className="ui-menu-item level0">
                  <Link
                    href="/"
                    className="level-top"
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li className="ui-menu-item level0 fullwidth parent ">
                  <div className="open-children-toggle"></div>
                  <Link
                     href="/protective-masks"
                    className="level-top"
                    title="Protective Masks"
                  >
                    <span>Protective Masks</span>
                  </Link>
                  <div className="level0 submenu">
                    <div className="container">
                      <div className="row">
                        <ul className="subchildmenu col-md-9 mega-columns columns2">
                          <li className="ui-menu-item level1 ">
                            <Link
                              href="/disposable-mask"
                              title="Disposable Dust Masks"
                            >
                              <span>Disposable Dust Masks</span>
                            </Link>
                          </li>
                          <li className="ui-menu-item level1 ">
                            <Link
                              href="/reusable-respiratory"
                              title="Reusable Respiratory Masks"
                            >
                              <span>Reusable Respiratory Masks</span>
                            </Link>
                          </li>
                          <li className="ui-menu-item level1 ">
                            <Link
                              href="/face-fit-testing"
                              title="Face Fit Testing Kits"
                            >
                              <span>Face Fit Testing Kits</span>
                            </Link>
                          </li>
                          <li className="ui-menu-item level1 ">
                            <Link
                              href="/filters"
                              title="Mask Filters"
                            >
                              <span>Mask Filters</span>
                            </Link>
                          </li>
                          <li className="ui-menu-item level1 ">
                            <Link
                              href="/ffp1-masks"
                              title="FFP1 Masks"
                            >
                              <span>FFP1 Masks</span>
                            </Link>
                          </li>
                          <li className="ui-menu-item level1 ">
                            <Link
                              href="/ffp2-masks"
                              title="FFP2 Masks"
                            >
                              <span>FFP2 Masks</span>
                            </Link>
                          </li>
                          <li className="ui-menu-item level1 ">
                            <Link
                              href="ffp3-face-masks"
                              title="FFP3 Masks"
                            >
                              <span>FFP3 Masks</span>
                            </Link>
                          </li>
                          <li className="ui-menu-item level1 ">
                            <Link
                              href="/full-face-masks"
                              title="Full Face Masks"
                            >
                              <span>Full Face Masks</span>
                            </Link>
                          </li>
                          <li className="ui-menu-item level1 ">
                            <Link
                              href="/half-face-masks"
                              title="Half Face Masks"
                            >
                              <span>Half Face Masks</span>
                            </Link>
                          </li>
                          <li className="ui-menu-item level1 ">
                            <Link
                              href="/air-powered-respirators"
                              title="Air Powered Respirators"
                            >
                              <span>Air Powered Respirators</span>
                            </Link>
                          </li>
                          <li className="ui-menu-item level1 ">
                            <Link
                              href="/surgical-masks"
                              title="Surgical Masks"
                            >
                              <span>Surgical Masks</span>
                            </Link>
                          </li>
                          <li className="ui-menu-item level1 ">
                            <Link
                              href="/face-coverings"
                              title="Face Coverings"
                            >
                              <span>Face Coverings</span>
                            </Link>
                          </li>
                        </ul>
                        <div className="menu-right-block col-md-3">
                          <p>
                            The Respirator Shop stocks a wide range of
                            protective disposable dust masks, full face
                            respirators &amp; half mask respirators, filters,
                            and face fit testing equipment. We also stock
                            specialist Asbestos PPE &amp; asbestos disposal
                            bags. The lowest prices on the top brands, including
                            3M, Moldex, Portwest, Alpha Solway &amp; JSP masks.
                          </p>
                          <p>
                            <button
                              className="button button-menu primary"
                              onClick={handleButton}
                            >
                              <span>
                                <span>learn more</span>
                              </span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="ui-menu-item level0 fullwidth ">
                  <Link
                    href="/protective-coveralls"
                    className="level-top"
                    title="Protective Coveralls"
                  >
                    <span>Protective Coveralls</span>
                  </Link>
                </li>
                <li className="ui-menu-item level0 fullwidth ">
                  <Link
                    href='/earprotection'
                    className="level-top"
                    title="Ear Protection"
                  >
                    <span>Ear Protection</span>
                  </Link>
                </li>
                <li className="ui-menu-item level0 fullwidth ">
                  <Link
                    href="/asbestos-protection"
                    className="level-top"
                    title="Asbestos Protection "
                  >
                    <span>Asbestos Protection </span>
                  </Link>
                </li>
                <li className="ui-menu-item level0 fullwidth ">
                  <Link
                    href="/head-protection"
                    className="level-top"
                    title="Head & Eye Protection"
                  >
                    <span>Head & Eye Protection</span>
                  </Link>
                </li>
                <li className="ui-menu-item level0 fullwidth ">
                  <Link
                    href="/hi-vis-clothing"
                    className="level-top"
                    title="Hi Vis Clothing & Kits"
                  >
                    <span>Hi Vis Clothing & Kits</span>
                  </Link>
                </li>{" "}
              </ul>
            </nav>
          </div>
          <div
            className="section-item-title nav-sections-item-title"
            data-role="collapsible"
          >
            <a
              className="nav-sections-item-switch"
              data-toggle="switch"
              href="#store.links"
            >
              Account{" "}
            </a>
          </div>
          <div
            className="section-item-content nav-sections-item-content"
            id="store.links"
            data-role="content"
          >
            {" "}
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
