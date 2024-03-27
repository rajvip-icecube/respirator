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
    (category) => category.name === "FFP3 Masks"
  );
  console.log("category wise =====>", fullFaceMasksCategory);
  const category_id= 16; 
  const pageName ='ffp3-face-masks'
  return (
    <>+

<div className="product_page page-layout-2columns-left catalog-category-view ">
      <div className="page-wrapper ">
      <Header />
    <Breadcrumbs category={fullFaceMasksCategory} categoryName="Ear Protection" />
   
   <PageContent
    category={fullFaceMasksCategory}
    category_id={category_id}
    pageName={pageName} 
   /> 
  
      <div className=" page-bottom ">
        <div className="ffp-mask">
          <h3 className="respiratory-title">FREQUENTLY ASKED QUESTIONS</h3>
        </div>
        <div className="ffp-mask">
          <h3>What is an FFP3 mask?</h3>
          <p>
            This grade of protective mask&nbsp;provides&nbsp;a level of
            protection APF x 20 TLV and filter&nbsp;efficiency of at
            least&nbsp;98%. It is the highest grade of protection available in
            the UK. These can either be in the form of a disposable mask or a
            reusable mask with the correct P3 filter.&nbsp; The reusable mask
            could be a half mask such as the Sundstrom SR100 &amp; P3 filter or
            a full face mask such as the Force 10.&nbsp; The full face mask
            offers an&nbsp;increased&nbsp;level of protection when used with a
            P3 filter (40APF)
          </p>
          <h3>What is FFP3 protection?</h3>
          <p>
            FFP3 protection is the highest level of protection available in the
            UK with filters providing 99% filtration efficiency with APF 20 TLV
            protection.&nbsp; These masks will protect down to particle sizes of
            0.3 microns (The size of a virus)
          </p>
          <h3>Is P3 the same as FFP3?</h3>
          <p>
            P3 is a term that is used more for filters and provides the same
            level of protection as FFP3. Both will provide an APF 20 and filter
            efficiency from 0.3 microns.&nbsp; The American terminology for the
            same protective mask&nbsp;is the N100 mask.
          </p>
          <h3>What are FFP3 Face&nbsp;Masks used for?</h3>
          <p>
            FFP3 respiratory&nbsp;masks are used in dangerous environments
            providing the highest level of protection at APF 20x TLV. They are
            used for protection against <strong>viruses</strong>, asbestos
            fibers, silica dust aerosols etc.
          </p>
          <h3>What is the difference between FFP2 &amp; FFP3?</h3>
          <p>
            FFP3 respirator&nbsp;masks provide a far higher level of protection
            than FFP2 masks. FFP2 masks protect from slightly toxic or
            irritating solid aerosols &amp; liquids at 94% filtration offering
            an APF 10x TLV. The highest grade of protection offered by a
            disposable mask is&nbsp;graded as&nbsp;FFP3 providing 99%
            particulate filtration with an APF 20 x TLV and protection from
            highly toxic materials.
          </p>
          <p>
            FFP3 grade&nbsp;masks (P3) (N100)&nbsp;tend to be used in more
            dangerous environments where the highest level of protection is
            required. It will stock particles as small as 0.3 microns whereas an
            FFP2 mask protects from particle sizes upwards of 2-5 microns.
          </p>
          <p>
            When deciding between using them take into account is the hazard
            slightly toxic or highly toxic.&nbsp;{" "}
            <strong>
              For protection against viruses, only FFP3 Respirator masks should
              be used.
            </strong>
          </p>
          <h3>Is FFP3 the same as P3?</h3>
          <p>
            Both offer the same protection level. FFP3 refers to disposable
            masks, P3 is the same protection level provided by filters.&nbsp;
            The American equivalent is the N100 grade.
          </p>
          <h3>What jobs would use an FFP3 Face Mask?</h3>
          <p>
            These face masks provide the highest level of protection. Examples
            of jobs requiring <strong>FFP3 Respirator masks</strong> would be
            Pharmaceutical, Healthcare, Construction, Groundworks, Healthcare,
            Powder coating &amp; low-grade asbestos work.&nbsp; Primary &amp;
            Secondary Care including all key workers requiring the correct grade
            of protection against&nbsp;Covid.
          </p>
          <h3>Would an FFP3 Masks protect me against viruses?</h3>
          <p>
            The HSE (Health &amp; Safety Executive) recommends the use of
            protective masks classified as FFP3 respirators against viruses.
            This is the highest level of respiratory mask available with a
            protection level of at least 20 APF.&nbsp; This is the only
            protective grade that will protect to an adequate level against a
            virus with the filter media able to filter down to circa 0.03
            microns (Size of a&nbsp;Virus)
          </p>
          <h3>What is the Best Antiviral Mask?</h3>
          <p>
            The masks that we have selected in our range will protect against
            viruses, however, we have a number of favorites,&nbsp;our{" "}
            <a
              title="Most Popular Antiviral Mask"
              
            >
              most popular antiviral mask
            </a>
            , &amp; most popular{" "}
            <a
              title="individually wrapped antiviral mask"
             
            >
              valved antiviral&nbsp;respirator.
            </a>
          </p>
          <h3>
            What is the difference between a Surgical face Mask and an FFP3
            respirator?
          </h3>
          <p>
            Surgical masks are classified as loose-fitting facepieces because
            they leave gaps around the face. They provide very limited
            protection and would only reduce the level of covid load the user
            was exposed to however only&nbsp;an FFP3 respirator as recommended
            by the World Health Organisation (WHO) should be used for protection
            against viruses. An FFP3 mask (Tight-fitting facepiece) is when
            conducting infectious aerosol-generating procedures.
          </p>
          <p>
            Normal cloth face pieces made out of clothing offer no / limited
            protection.
          </p>
          <h3>
            What is the difference between a&nbsp;Non-Valved FFP3&nbsp;Face Mask
            &amp; a Valved FFP3&nbsp;Face Mask?
          </h3>
          <p>
            FFP3s both valved &amp; non-valved face masks provide the same
            protection. The valve on the mask makes it more comfortable when
            wearing for a longer time. The air exhaled is unfiltered. The mask
            without valve filters both inhaled and exhaled air protection both
            user and those nearby.
          </p>
          <h3>
            Are&nbsp;there&nbsp;any recent Research Studies regarding mask
            protection against Covid 19?
          </h3>
          <p>
            When Addenbrookes Hospital Cambridge upgraded their face masks for
            staff exposed to high levels of Covid load to P3 filtering
            facepieces (FFP3 Respirators), the hospital saw a 100% fall in
            hospital-acquired Sars-Cov-2 infection.&nbsp; To read more on the{" "}
            <a 
           
            >
              Addenbrookes&nbsp;FFP3 Mask Research
            </a>
            &nbsp;&amp;{" "}
            <a 
            
            >
              British Medical Journal Report.
            </a>
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
      <Footer />
   </div>
    </div>
    </>
  );
}
