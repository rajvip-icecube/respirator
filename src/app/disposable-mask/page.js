"use client";


import { GET_CATEGORY } from "../api/category/page";
import { useQuery } from "@apollo/client";
import Item from "../components/item/page";
import Link from "next/link";
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
      (category) => category.name === "Disposable Dust Masks"
    );
    console.log("category wise =====>", fullFaceMasksCategory);
  const category_id= 4;
const pageName = 'disposable-mask';
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
        <div className="feq-main">
          <div className="feq-row">
            <h3 className="respiratory-title">FREQUENTLY ASKED QUESTIONS</h3>
            <div className="feq-col">
              <h3>01: What dust mask do I require?</h3>
              <p>
                It is vitally important that the correct grade of dust mask
                protection is selected dependent on the particulate hazard.
              </p>
              <p>
                Respiratory masks for dust protection can be either disposable
                or reusable dust half masks & are rated based on the level of
                respiratory protection provided against airborne particles such
                as fine dusts & powders.
              </p>
              <p>
                The masks are classified as EN 149 with either FFP1, FFP2 & FFP3
                dust rating, FFP3 dust masks providing the highest level of
                protection.
              </p>
              <p>
                Reusable masks will have the relevant filters classified as
                follows FFP1 (P1 Protection) FFP2 (P2 Protection) & FFP3 (P3
                Protection)
              </p>
            </div>
            <div className="feq-col">
              <h3>02: Why should you wear a dust mask?</h3>
              <p>
                Whilst wearing any dust mask on your face may feel
                uncomfortable, the correctly selected RPE will help protect you
                against developing serious long term lung conditions such as
                mesothelioma, farmers lung & cancer.
              </p>
            </div>
            <div className="feq-col">
              <h3>03: What are FFP1 Dust Masks?</h3>
              <p>
                FFP1 Dust Masks (P1 filters) protect against low levels of
                non-toxic dust & liquid aerosols. FFP1 masks provide an APF (4)
                x TLV protection level with a filtration efficiency of 80% for
                airborne particles. The particle sizes filtered are larger than
                5 microns.{" "}
              </p>
              <p>
                FFP1 mask are often used in demolition, sanding & DIY jobs
                involving plaster or filler dust.
              </p>
            </div>
            <div className="feq-col">
              <h3>04: What jobs use FFP1 Dust Masks?</h3>
              <p>
                FFP1 mask are often used in demolition, sanding & DIY jobs
                involving plaster or filler dust.{" "}
              </p>
            </div>
            <div className="feq-col">
              <h3>05: What are FFP2 Dust Masks?</h3>
              <p>
                FFP2 Dust Masks (P2 filters) provide higher protection than FFP1
                masks & protect against slightly toxic dust & liquid aerosols.
                FFP2 masks provide an APF (10) x TLV protection level with a
                filtration efficiency of 94% for airborne particles. FFP2 will
                filter smaller particles between 2-5 microns.
              </p>
              <p>
                FFP2 masks are used more widely than FFP1 masks due to the
                increased protection levels they provide & are used in
                construction such as demolition & groundworks: metal working
                such as grinding, polishing: trades requiring protection such as
                boiler maintenance, soft wood dust or glass fibre.
              </p>
            </div>
            <div className="feq-col">
              <h3>06: What jobs use FFP2 Dust Masks?</h3>
              <p>
                <strong>Construction</strong> such as demolition & groundworks:{" "}
                <strong>metal working</strong> such as grinding, polishing:
                trades requiring protection such as boiler maintenance, soft
                wood dust or glass fibre.
              </p>
            </div>
            <div className="feq-col">
              <h3>07: What are FFP3 Dust Masks?</h3>
              <p>
                FFP3 Dust Masks (P3 filters) provide higher protection than both
                FFP1 & FFP2 masks, protecting against toxic dust & aerosols.
                FFP3 masks provide an APF (20) x TLV protection level with a
                filtration efficiency of 99%. FFP3 will filter smaller particles
                smaller than 2 microns.
              </p>
              <p>
                FFP3 masks are used more widely than either FFP1 or FFP2 masks
                due to the increased protection levels they provide. This grade
                of protection is used for protection in very dangerous
                environments & is the correct grade of protection for viruses
                such as Covid 19, SARS etc.{" "}
              </p>
              <p>
                FFP3 (P3) masks provide the highest level of protection from
                aerosols (coughs/sneezes). NHS & dental guidelines stipulating
                FFP3 masks (P3) for aerosol protection. FFP3 masks are used in
                healthcare, pharmaceutical industry as widely for all
                construction jobs, metal working or trades requiring the highest
                dust mask protection.{" "}
              </p>
            </div>
            <div className="feq-col">
              <h3>08: What jobs use FFP3 Dust Masks?</h3>
              <p>
                FFP3 masks are used in healthcare, pharmaceutical industry as
                widely for all <strong>construction</strong> jobs,{" "}
                <strong>metal working</strong> or trades requiring the highest
                dust mask protection.{" "}
              </p>
            </div>
            <div className="feq-col">
              <h3>09: What are the best Dust Masks for work?</h3>
              <table className="feq-table">
                <tr>
                  <th>WORKPLACE</th>
                  <th>HAZARD</th>
                  <th>FFP1 (APF 4)</th>
                  <th>FFP2 (APF 10)</th>
                  <th>FFP3 (APF 20)</th>
                </tr>
                <tr>
                  <td>CONSTRUCTION</td>
                  <td>
                    <p>DEMOLITION</p>
                    <p>GROUNDWORKS</p>
                    <p>MAINTENANCE</p>
                  </td>
                  <td>
                    <p>x</p>
                    <p></p>
                    <p>x</p>
                  </td>
                  <td>
                    <p>x</p>
                    <p>x</p>
                    <p>x</p>
                  </td>
                  <td>
                    <p>x</p>
                    <p>x</p>
                    <p>x</p>
                  </td>
                </tr>
              </table>
            </div>
            <div className="feq-col">
              <h3>10: Will a dust mask stop asbestos? </h3>
              <p>
                Dust masks come in a number of grades ranging from simple
                convenience masks through to FFP1, FFP2 & FFP3 masks each
                increasing in the level of filtration & protection provided.
                Only the FFP3 dust mask provides the correct level or protection
                APF 20 for unlicensed asbestos.
              </p>
            </div>
            <div className="feq-col">
              <h3>11: How to wear a dust mask correctly? </h3>
              <p>
                Wash your hands prior to putting on your mask, always check the
                dust mask for damage. If the mask appears damaged use a
                different mask. Place the mask onto the face positioning the
                straps 1. Around the neck, 2. Around the back of the head. If
                the dust mask has a nose clip, this needs to be pinched and
                slipe your fingers down either side to mold to the nose.
              </p>
              <p>
                Checking for a good seal. Place both hands on the mask and take
                a breath. You should feel the masks seal against the face & then
                exhale. If you feel leakage above the nose re pinch and mold the
                nose clip. If you feel leakage around the sides, readjust the
                head straps until a proper seal is achieved.
              </p>
            </div>
            <div className="feq-col">
              <h3>12: How to wear a dust mask with glasses? </h3>
              <p>
                When the mask is placed on the head it is important that the
                correct procedures are followed & importantly that the nose clip
                is pinched over the bridge of the nose and molded down the
                sides. Glasses will very often mist up due to the fact that this
                has not been done correctly.
              </p>
            </div>
            <div className="feq-col">
              <h3>13: Are N95 dust masks APF 10 ? </h3>
              <p>
                N95 is a US safety standard which is not legally allowed to be
                sold in the UK. Products sold in the UK must pass strict safety
                standards. The UK safety standard FFP2 mask provides an AP 10.
              </p>
            </div>
            <div className="feq-col">
              <h3>14: Can a dust mask protect you from asbestos? </h3>
              <p>
                Not all dust masks will protect against asbestos so it is very
                important for long term health that the correct dust mask is
                selected. The only dust masks that can be used are FFP3 masks
                with and APF 20.
              </p>
            </div>
            <div className="feq-col">
              <h3>15: Do dust masks work? </h3>
              <p>
                Dust masks are a lightweight alternative to the heavier reusable
                masks. All disposable dust masks should have the CE markings EN
                149: 2001 that show that the masks have been tested to a
                recognised standard for the UK. The masks will also be tested to
                the different protection levels.
              </p>
            </div>
            <div className="feq-col">
              <h3>16: Which masks protect me from viruses? </h3>
              <p>
                FFP3 masks provide the highest level of protection available
                filtering out particulates as small as viruses such as Covid 19
                & SARS.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
   </div>
    </div>
    </>
  );
}
