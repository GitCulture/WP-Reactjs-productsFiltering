import React from 'react'
import Layout from '../../src/components/layout'
import gql from 'graphql-tag'
import client from '../../src/components/ApolloClient'
import { HEADER_FOOTER_ENDPOINT } from '../../src/utils/constants/endpoints';
import { PRODUCTS_SIDEBAR_ENDPOINT } from '../../src/utils/constants/endpoints';

import axios from 'axios';
import classNames from 'classnames';
import ParentCategoriesBlock from '../../src/components/category/category-block/ParentCategoriesBlock';

const CATEGORY_QUERY= gql` query {
    
productCategories(where: {termTaxonomId: "2916"}) {
    nodes {
      id
      name
      slug
      image {
        sourceUrl
      }
    }
  }
}`


const Categories = (props) => {


//   console.warn(props);

  const { productCategories, headerFooter } = props;

  return (
    <Layout headerFooter={headerFooter}>
      
      {/* <ParentCategoriesBlock
        productCategories={productCategories} // pushing into a props productCategries
      /> */}
    </Layout>
    
  )
}

Categories.getInitialProps = async () => {
    const { data: headerFooterData } = await axios.get( HEADER_FOOTER_ENDPOINT );
    const result = await client.query({
            query:  CATEGORY_QUERY
    });

    return {
        headerFooter: headerFooterData?.data ?? {},
        revalidate: 1

    }

    
}

// export async function getStaticProps() {
	
// 	const { data: headerFooterData } = await axios.get( HEADER_FOOTER_ENDPOINT );
// 	const { data: products } = await getProductsData();
// 	// const { data: products_categories_data } = await getProductsCategories();
	
// 	return {
// 		props: {
// 			headerFooter: headerFooterData?.data ?? {},
// 			products: products ?? {}
// 			// products_categories: products_categories_data ?? {}
// 		},
		
// 		/**
// 		 * Revalidate means that if a new request comes to server, then every 1 sec it will check
// 		 * if the data is changed, if it is changed then it will update the
// 		 * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
// 		 */
// 		revalidate: 1,
// 	};
// }

export default Categories