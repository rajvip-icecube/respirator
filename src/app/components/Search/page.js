'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { GET_SEARCH_PRODUCTS } from '@/app/api/searchQuery/route';
import Link from 'next/link';
export default function Search ()  {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_SEARCH_PRODUCTS, {
    variables: { searchTerm },
  });
  const handleSearch = () => {
   
    router.push(`/${pageName}/${sku}`);
  };

  return (
    
    <><input
          id="search"
          type="text"
          name="q"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="input-text"
          maxLength="128"
          role="combobox"
          aria-haspopup="false"
          aria-autocomplete="both"
          autoComplete="off" /><div id="search_autocomplete" className="search-autocomplete"></div><div className="nested">
              <a className="action advanced" data-action="advanced-search">
                  Advanced Search
              </a>
          </div>

    {loading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    {data && data.products && (
    <><div style={{ display: 'none' }}>
                  
                  <div id="searchsuite-autocomplete" className="searchsuite-autocomplete">
                      <div data-bind="visible: anyResultCount()">
                          <div className="product">
                          <ul id='product'>
                                {data.products.items.map((product) => (
                                    <li key={product.id}>
                                        <div className="qs-option-info">
                                            <div className="qs-option-title">
                                                <a>{product.name}</a>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                          </ul>
                              <div className="title">
                                  <a className="see-all" data-bind="attr: {href: result.product.url}"
                               
                                >
                                      
                                      <span>More Products</span>
                                      
                                      <span data-bind="text: result.product.size">12</span>
                                  </a>
                              </div>
                          </div>
                      </div>

                      <div className="no-result" >
                         
                          <span>No Result</span>
                         
                      </div>
                  </div>
                  
              </div><div>
                     
                      <ul id='product'>
                        
                      </ul>
                  </div></>
    )}
</>  
);
};

