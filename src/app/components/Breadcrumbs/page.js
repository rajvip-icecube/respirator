'use client'
import Link from 'next/link';
export default  function Breadcrumbs({ category, categoryName }){
    return(
        <>
         <div className="breadcrumbs">
    <ul className="items">
      <li className="item home">
        <Link href="/" title="Go to Home Page">
          Home
        </Link>
      </li>
      <li className={`item category${category.id}`}>
        <Link href={`/${category.slug}`}>
          <strong>{categoryName}</strong>
        </Link>
      </li>
    </ul>
  </div>
        </>
    )
}