"use client";


import { GET_CATEGORY } from "../api/category/route";
import { useQuery } from "@apollo/client"; 
import Breadcrumbs from "../components/Breadcrumbs/page";
import PageContent from "../components/PageContent/page";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
export default function Page() {
    const { loading, error, data } = useQuery(GET_CATEGORY);
    console.log("Data ====>", data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;
    const fullFaceMasksCategory = data.categoryList[0].children.find(
      (category) => category.name === "Face Fit Testing Kits"
    );
    console.log("category wise =====>", fullFaceMasksCategory);
  const category_id= 8; 
  const pageName ='face-fit-testing'

  return (
    <>
    
    <div className="product_page page-layout-2columns-left  catalog-category-view">
      <div className="page-wrapper">
      <Header />
    <Breadcrumbs category={fullFaceMasksCategory} categoryName="Ear Protection" />
   
   <PageContent
    category={fullFaceMasksCategory}
    category_id={category_id}
    pageName={pageName} 
   />
  
      <div className="page-bottom">
        <div className="feq-row">
          <h3 className="respiratory-title">FREQUENTLY ASKED QUESTIONS</h3>
          <div className="feq-col">
            <h3>01: Why do we need to undertake a face fit test?</h3>
            <p>
              An ill-fitting mask or a mask that has been put on incorrectly can
              leave small gaps between the face and respirator reducing
              protection. A face fit test will ensure that the correct mask
              &amp; advice is provided &amp; the full protection is afforded for
              the wearer.
            </p>
            <p>
              A correct fitting mask is vital to prevent exposure to dangerous
              hazards.
            </p>
          </div>
          <div className="feq-col">
            <h3>02: Are all masks required to be face fitted?</h3>
            <p>
              All tight face fitting masks such as disposable masks (FFP Masks)
              (EN 149) as well as reusable half masks (EN 140)&amp; Full Face
              Masks (EN 136) are required to be face fitted by the employer.
            </p>
            <p>
              There is a legal requirement that all employees should be face
              fitted if wearing any tight face fitting masks such as FFP dust
              masks (EN 149) (including FFP1, FFP2 &amp; FFP3 Dust Masks),
              reusable half masks (EN140) &amp; Full Face Masks (EN136).
            </p>
            <p>
              Powered Air Purifying Respirators (PAPR) (EN12941) and compressed
              air units (EN139 &amp; (EN270) are not required to be face fitted.
            </p>
          </div>
          <div className="feq-col">
            <h3>03: What Respiratory Face Fit Testing is required?</h3>
            <p>
              There are two methods of face fit testing available for Disposable
              masks, Reusable Half Masks &amp; Full Face masks:
            </p>
            <p>
              <strong>• Qualitative fit testing</strong>
            </p>
            <p>
              Approved by the HSE, Qualitative face fit testing is a simple 20
              minutes subjective assessment of leakage, incorporating a face fit
              test hood &amp; strong tasting / smelling solutions using a
              nebuliser.
            </p>
            <p>
              If the wearer cannot taste or smell the additives an adequate
              facial seal has been shown. This test can be carried out by a
              competent person trained to HSE standard.
            </p>
            <p>
              <strong>Applicable Masks:</strong>
            </p>
            <p>Disposable Dust Masks</p>
            <p>Reusable Half Masks</p>
            <p>
              <strong>• Quantitative fit testing</strong>
            </p>
            <p>
              Quantitative face fit testing is a far more accurate test
              measuring the level of particles both within &amp; outside the
              mask creating a fit factor ratio. The higher the fit factor the
              better the seal.
            </p>
            <p>
              <strong>Applicable Masks:</strong>
            </p>
            <p>Disposable Dust Masks</p>
            <p>Reusable Half Masks</p>
            <p>Full Face Masks</p>
          </div>
          <div className="feq-col">
            <h3>04: What could make a face fit test Fail?</h3>
            <p>
              All testing must be undertaken on a clean shaven face. Outstanding
              facial features including facial hair, scars &amp; jewellery can
              all prevent an adequate seal between mask &amp; face being
              achieved.
            </p>
            <p>
              The results of the taste test could also be compromised if the
              wearer has impaired taste of smell or is a smoker. (Must not smoke
              for 24hrs)
            </p>
          </div>
          <div className="feq-col">
            <h3>
              05: How can I organise Face Fit Testing for Disposable &amp;
              Reusable Masks?
            </h3>
            <p>
              Respirator shop have HSE approved qualitative face fit test kits
              available for the testing of disposable &amp; reusable masks &amp;
              can be carried out by a competent person trained to HSE standard.
            </p>
            <p>
              Alternatively, we provide a nationwide service so If you would
              like us to face fit your staff please <strong>email us</strong>{" "}
              your full company details to include number of staff requiring
              testing, RPE products being used.
            </p>
          </div>
          <div className="feq-col">
            <h3>
              06: How can I organise Face Fit Testing for Full Face Masks?
            </h3>
            <p>
              We provide a nationwide service providing quantitative face fits
              testing for Full Face Mask testing. If you would like us to face
              fit your staff please <strong>email us</strong> your full company
              details to include number of staff requiring testing, RPE products
              being used.
            </p>
          </div>
          <div className="feq-col">
            <h3>07: Can I buy spare parts for my Face Fit Test Kit?</h3>
            <p>
              Respirator shop stock all the different elements of the testing
              kits including the Bitrex testing &amp; sensitivity solutions,
              nebulisers &amp; face fit testing hoods.
            </p>
          </div>
          <div className="feq-col">
            <h3>
              08: How many tests can I carry out with one ampoule of test
              solution?
            </h3>
            <p>
              Each ampoule contains 2.5ml of solution and can test between 3-4
              people per test ampoule.
            </p>
          </div>
        </div>
      </div>
      <Footer />
   </div>
    </div>
    </>
  );
}
