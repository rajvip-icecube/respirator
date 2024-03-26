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
    (category) => category.name === "Air Powered Respirators"
  );
  console.log("category wise =====>", fullFaceMasksCategory);
  const category_id = 26;
  const pageName = "air-powered-respirators";
  return (
    <>
     <div className="product_page page-layout-2columns-left">
      <div className="page-wrapper">
      <Header />
    <Breadcrumbs category={fullFaceMasksCategory} categoryName="Ear Protection" />
   
   <PageContent
    category={fullFaceMasksCategory}
    category_id={category_id}
    pageName={pageName} 
   />
   <Footer />
   </div>
    </div>
    </>
  );
}
