'use client'
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_PRODUCTS_BY_ID } from '@/app/api/skuQuery/route';
import ProductDetail from '@/app/components/ProductDetail/page';
import Header from '@/app/components/Header/page';
import Footer from '@/app/components/Footer/page';
import BreadCrumbSecond from '@/app/components/BreadCrumbSecond/page';
export default function Page({ params }) {
  const { sku } = params;
    console.log('SKU:', sku); 
    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_ID, {
        variables: { 
          id: sku
        },
      });
  console.log("data from singular product=====>", data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.products.items[0];
  const imageUrl = data.products.items[0].small_image.url;
  const productName = product.name;
  return (
    <div className='page-layout-1column catalog-product-view'>
      <div className='page-wrapper'>
        <Header />
        <BreadCrumbSecond productName={productName}/>
     {product && <ProductDetail product={product} imageUrl={imageUrl} category_id ='27' />}
     <Footer />
     </div>
    </div>
  );
}
