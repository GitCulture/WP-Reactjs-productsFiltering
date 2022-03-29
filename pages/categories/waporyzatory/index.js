/**
 * Internal Dependencies.
 */
 import Products from '../../../src/components/products';
 import gql from 'graphql-tag'
 import { HEADER_FOOTER_ENDPOINT } from '../../../src/utils/constants/endpoints';
 import { PRODUCTS_SIDEBAR_ENDPOINT } from '../../../src/utils/constants/endpoints';
 
 /**
  * External Dependencies.
  */
 import axios from 'axios';
 import {getProductsData} from '../../../src/utils/products';
 import Layout from '../../../src/components/layout';
 import classNames from 'classnames';
 import client from '../../../src/components/ApolloClient';

 // import { getProductsCategories } from '../../../src/utils/prodCategories';

 const PRODUCT_BY_CATEGORY_ID= gql` query Product_Category( $id: ID! ){
        productCategory(id: $id) {
          name
          products {
            edges {
              node {
                id
                slug
                description
                image {
                  altText
                  uri
                  sourceUrl
                }
              }
            }
          }
        }
      
 }`
 
 export default function Waporyzatory({ headerFooter, products}) {

     
     // console.log(catdata)
     return (
         <Layout headerFooter={headerFooter || {}}>
             
         </Layout>
     )
 }
//  Category.getInitialProps  = async (context) => {
//     const id='';
//     const result = await client.query({
//         query: PRODUCT_BY_CATEGORY_ID,
//         variables: id
//     })
//  }


 export async function getStaticProps() {
     
     const { data: headerFooterData } = await axios.get( HEADER_FOOTER_ENDPOINT );
     const { data: products } = await getProductsData();
     // const { data: products_categories_data } = await getProductsCategories();
     
     return {
         props: {
             headerFooter: headerFooterData?.data ?? {},
             products: products ?? {}
             // products_categories: products_categories_data ?? {}
         },
         
         /**
          * Revalidate means that if a new request comes to server, then every 1 sec it will check
          * if the data is changed, if it is changed then it will update the
          * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
          */
         revalidate: 1,
     };
 }
 