"use client";

import { useQuery, gql } from "@apollo/client";

export const GET_CATEGORY_DATA = gql`
{
    categoryList(filters: {ids: {in: ["2"]}}) {
      children {
        id      
        name      
        url_path
        description
        children {
            id        
            name        
            url_path
            description
          }
      }
    }
  }
`;
export const GET_CATEGORY = gql`
  {
    categoryList(filters: { ids: { in: ["11"] } }) {
      children {
        id
        name
        url_path
        description
        
      }
    }
  }
`;

export default function Category() {
    const { loading, error, data } = useQuery(GET_CATEGORY_DATA);
    console.log("Data ====>",data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;
    const fullFaceMasksCategory = data.categoryList[0].children.find(category => category.name === 'Ear Protection');
    console.log("category wise =====>", fullFaceMasksCategory)
   
    return (
        <><div>
        <div>
          <h1>{fullFaceMasksCategory.name}</h1>
          <div>{fullFaceMasksCategory.url_path}</div>
          <div dangerouslySetInnerHTML={{ __html: fullFaceMasksCategory.description }}></div>
        </div>
      </div></>
    );
}

