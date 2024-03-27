'use client'
import Link from 'next/link';
export default  function BreadCrumbSecond({ category, productName  }){
    return(
        <>
         <div className="breadcrumbs">
    <ul className="items pull-right">
      <li className="item home">
        <Link href="/" title="Go to Home Page">
          Home
        </Link>
      </li>
      <li>
        
          <strong>{productName }</strong>
      </li>
    </ul>
  </div>
        </>
    )
}