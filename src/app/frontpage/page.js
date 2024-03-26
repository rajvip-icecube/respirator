"use client";

import Footer from "../components/Footer/page";
import Header from "../components/Header/page";
import HomePageProducts from "../components/HomePageProducts/page";

export default function Page() {
  return (
    <div className="front-page page-layout-1columns-left">
      <div className="page-wrapper">
      <Header />
      <div style={{backgroundColor: '#e9e9e9'}}>
        <div className="container containerone">
          <div className="page messages">
            <div data-placeholder="messages"></div>
            <div data-bind="scope: 'messages'"></div>
          </div>
          <div className="slider-with-side">
            <div className="side-area">
              <div className="item1">
                <a
                  className="text-right"
                  title="Disposable Masks"
                  href="/disposable-mask"
                >
                  <img
                    title="Disposable Dust Masks"
                    src="https://newdev.respiratorshop.co.uk/media/wysiwyg/disposablemasks.jpg"
                    alt="Disposable Dust Masks"
                  />
                  <span>
                    DISPOSABLE<br></br>MASKS
                  </span>
                </a>
              </div>
              <div className="item2">
                <a
                  className="text-right"
                  title="REUSABLE Masks"
                  href="/reusable-respiratory"
                >
                  <img
                    title="Reusable Masks"
                    src="https://newdev.respiratorshop.co.uk/media/wysiwyg/reusablemasks.jpg"
                    alt="Reusable Masks"
                  />
                  <span>
                    REUSABLE<br></br>MASKS
                  </span>
                </a>
              </div>
              <div className="item3">
                <a
                  className="text-right"
                  title="PROTECTIVE COVERALLS"
                  href="/protective-coveralls"
                >
                  <img
                    title="Protective Coveralls"
                    src="https://newdev.respiratorshop.co.uk/media/wysiwyg/coveralls.jpg"
                    alt="Protective Coveralls"
                  />
                  <span>
                    PROTECTIVE<br></br>COVERALLS
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main id="maincontent" className="page-main">
        <a id="contentarea" tabindex="-1"></a>
        <div className="page-main-inner">
          <div className="columns">
            <div className="column main">
              <input name="form_key" type="hidden" value="2vqRMvrDp86mWQPO" />
              <div
                id="authenticationPopup"
                data-bind="scope:'authenticationPopup', style: {display: 'none'}"
              ></div>

              <div className="allblock">
                <div className="blockone">
                  <div className="widget block block-static-block">
                    <div className="colone">
                      <h3 className="pone poneone">
                        <span className=" fa fa-square squreone"> </span>P1
                        Respirator Dust Masks (FFP1)
                        <a
                          className="linkone"
                          href="/ffp1-masks"
                        >
                          View All P1 Masks
                        </a>
                      </h3>
                      <p className="ponetext textone">
                        P1 respirator dust masks or
                        <a
                          title="FFF1 Masks"
                          href="/ffp1-masks"
                        >
                          FFP1 Masks
                        </a>
                        have a protection factor of APF4, they will protect you
                        against low level fine dust and oil/water based mists.
                        These masks are suitable for activities such as hand
                        sanding, drilling and cutting, they can usually be
                        identified by a yellow strap.
                      </p>
                      <p></p>
                      <div className="block widget block-products-list grid">
                        <div className="block-content">
                     <HomePageProducts category_id= '14' pageName = 'ffp1-masks'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blocktwo">
                  <div className="widget block block-static-block">
                    <div className="coltwo">
                      <h3 className="pone ponetwo">
                        P2 Respirator Dust Masks (FFP2)
                        <a
                          className="linktwo"
                          href="/ffp2-masks"
                        >
                          View All P2 Masks
                        </a>
                      </h3>
                      <p className="ponetext texttwo">
                        P2 respirator dust masks or
                        <a
                          title="FFF2 Masks"
                          href="/ffp2-masks"
                        >
                          FFP2 Masks
                        </a>
                        have a protection factor of APF10, they will protect you
                        against moderate level fine dust and oil/water based
                        mists. These masks are suitable for activities such as
                        plastering and sanding (wood dusts), they can usually be
                        identified by a blue strap.
                      </p>
                      <p></p>
                      <div className="block widget block-products-list grid">
                        <div className="block-content">
                        <HomePageProducts category_id= '15' pageName = 'ffp2-masks'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blockthree">
                  <div className="widget block block-static-block">
                    <div className="colthree">
                      <h3 className="pone ponethree">
                        <span className=" fa fa-square squarethree"> </span>P3
                        Respirator Dust Masks (FFP3)
                        <a
                          className="linkthree"
                          href="/ffp3-face-masks"
                        >
                          View All P3 Masks
                        </a>
                      </h3>
                      <p className="ponetext textthree">
                        P3 respirator dust masks or
                        <a
                          title="FFP3 Masks"
                          href="/ffp3-face-masks"
                          target="_blank"
                        >
                          FFP3 Masks
                        </a>
                        have a protection factor of APF20, they will protect you
                        against higher level fine dust and oil/water based
                        mists. These masks are suitable for activities that
                        involve hazardous pharmaceutical powders, biological
                        agents and fibres. This grade is the recommended level
                        for protection against <strong>viruses</strong>.
                      </p>
                      <p></p>
                      <div className="block widget block-products-list grid">
                        <div className="block-content">
                       <HomePageProducts category_id= '16' pageName = 'ffp3-face-masks'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blockfour">
                  <div className="widget block block-static-block">
                    <div className="colfour">
                      <h3 className="pone ponefour">
                        <span className=" fa fa-square squarefour"> </span>REUSABLE
                        RESPIRATOR MASKS
                        <a
                          className="linkfour"
                          href="/reusable-respiratory"
                        >
                          View All Reusable Masks
                        </a>
                      </h3>
                      <p className="ponetext textfour">
                        We stock a good selection of half and full face
                        <a
                          title="reusable respirator mask"
                          href="/reusable-respiratory"
                          target="_blank"
                        >
                          reusable respirator masks
                        </a>
                        , perfect for high level hazard protection. We also have
                        the complete range of interchangeable replacement
                        filters for all the popular brands.
                      </p>
                      <p></p>
                      <div className="block widget block-products-list grid">
                        <div className="block-content">
                    <HomePageProducts category_id= '5' pageName = 'reusable-respiratory'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blockfive">
                  <div className="widget block block-static-block">
                    <div className="hometext">
                      <h1 className="headingone">
                        Dust Masks and Respirators - Respiratory Protective
                        Equipment
                      </h1>
                      <p className="par">
                        The Respirator Shop stocks a wide range of
                        <strong>dust masks</strong>,
                        <strong>respirator,</strong>
                        <a
                          title="respirator filters"
                          href="/filters"
                          target="_blank"
                          rel="noopener"
                        >
                          respirator filters
                        </a>
                        and&nbsp;
                        <a
                          title="protective mask"
                          href="/protective-masks"
                          target="_blank"
                          rel="noopener"
                        >
                          protective mask
                        </a>
                        equipment. The lowest prices on the top brands,
                        including 3M, Moldex &amp; Portwest. Our high
                        quality&nbsp;
                        <strong>dust masks and respirators</strong> can protect
                        you during cleaning or construction activities, it’s
                        essential to wear protective mask after measuring that
                        it’s a tight/perfect fit with the help of
                        <a
                          title="face fit testing kit"
                          href="/face-fit-testing"
                          target="_blank"
                          rel="noopener"
                        >
                          face fit testing kit
                        </a>
                        , when working with concrete, drywall, fiberglass or
                        wood.
                      </p>
                      <p className="par">
                        If you need any help or advice when ordering don't
                        hesitate to contact our friendly team, call us on:
                        <strong>
                          <a title="01435 510749" href="tel:01435510749">
                            01435 510749
                          </a>
                        </strong>
                        (Mon - Fri / 9am - 5pm)
                      </p>
                      <h2>
                        Fitting and Removing your Disposable Dust Mask &amp;
                        Respirators
                      </h2>
                      <p className="par">
                        First you should check the expiry date on the box and
                        read the instructions provided. Facial hair can prevent
                        a good seal between the respirator and face, so make
                        sure you're clean shaven before fitting your disposable
                        respirator. Remove all jewelry and make sure long hair
                        is tied back.
                      </p>
                      <p className="par">
                        Ensure your hands are clean before handling, check the
                        respirator is in good condition. Form a cup shape by
                        splitting the bottom and top panels of the respirator,
                        using the tab make sure the reverse side is up. Make
                        sure both panels are fully unfolded and slightly bend
                        the nose clip at the center. Take both the straps in one
                        hand and cup the respirator with the other, place the
                        respirsator under your chin with the nose piece upwards
                        facing. Making sure the straps are not twisted, pull the
                        upper strap over the crown of your head and the lower
                        straps just below your ears. Ensure that the tabs and
                        panels are not folded in by adjusting for a comfortable
                        fit. Now you can mold the nose clip to ensure a good
                        seal with a close fit.
                      </p>
                      <p className="par">
                        To test the effectiveness of the respirator, cover the
                        front with both hands to check for leaked air. Readjust
                        the respirator to eliminate leaks and repeat the fit
                        check.&nbsp;Do not enter hazardous areas without
                        achieving an adequate seal between the respirator and
                        your face.
                      </p>
                      <p className="par">
                        Avoid touching the face piece when removing your
                        respirator. With both hands remove the straps from your
                        head, and pull the respirator away from your face.
                        Carefully dispose of your contaminated respirators.
                      </p>
                      <h2>Best Selling 3M Respirators</h2>
                      <p className="par">
                        The 3M Aura range are recognised within the industry as
                        the market leader, protecting users from fine dust, oil
                        and water based mist.
                      </p>
                      <ul>
                        <li>Low Breathing Resistance Filter Technology</li>
                        <li>3M Cool Flow Valve</li>
                        <li>Innovative Chin Tab</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="trustpilot-widget"
                  data-locale="en-GB"
                  data-template-id="539adbd6dec7e10e686debee"
                  data-businessunit-id="5e54b72965fc2a0001248083"
                  data-style-height="500px"
                  data-style-width="100%"
                  data-theme="light"
                  data-stars="5"
                  data-review-languages="en"
                >
                  <a
                   
                    target="_blank"
                    rel="noopener"
                  >
                    Trustpilot
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </div>
  );
}
