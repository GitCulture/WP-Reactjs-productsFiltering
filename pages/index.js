/**
 * Internal Dependencies.
 */
//import Products from '../src/components/products';
import React, { useEffect, useState} from "react";
import { HEADER_FOOTER_ENDPOINT } from '../src/utils/constants/endpoints';
import { PRODUCTS_SIDEBAR_ENDPOINT } from '../src/utils/constants/endpoints';
import Buttons from './../src/components/layout/Buttons'
/**
 * External Dependencies.
 */
import axios from 'axios';
import { getProductsData } from '../src/utils/products';
import { getCategories} from '../src/utils/products';
import Layout from '../src/components/layout';
import classNames from 'classnames';
import Card from '../src/components/layout/Card';
// import { getProductsCategories } from '../src/utils/prodCategories';


// useState tutaj ? 

export default function Home({ headerFooter, products, mainCats}) {
	
	const [item, setItem] = useState(products);

	
	// const menuItems = [...new Set(products.map((Val) => Val.categories[0].name))];
	const menuItems = [...new Set(mainCats.map((Val) => Val.name))];

	const filterItem = (curcat) => {
		const newItem = products.filter((newVal) => {
		  return newVal.categories[0].name === curcat;
		});
		setItem(newItem);
	};
	

	return (
		
		<Layout headerFooter={headerFooter || {}}>
			<Buttons 
				filterItem={filterItem}
            	setItem={setItem}
            	menuItems={menuItems}
                products={products}
			/>
			<Card item={item}/>
			{/* <Products products={products}/> */}
		</Layout>
	)
}

export async function getStaticProps() {
	// this.state = { catId: 2963}
	// const [catId, setCatId] = useState(2963);

	const { data: headerFooterData } = await axios.get( HEADER_FOOTER_ENDPOINT );
	const { data: products } = await getProductsData(100); // id
	// const { data: products_categories_data } = await getProductsCategories();
	const { data: categories} = await getCategories(1000);
	
	return {
		props: {
			headerFooter: headerFooterData?.data ?? {},
			products: products ?? {},
			mainCats: categories ?? {}
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
