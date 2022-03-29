import React, { useEffect, useState } from "react";
import axios from "axios";


const WooCommerceRestApi = require( '@woocommerce/woocommerce-rest-api' ).default;

const api = new WooCommerceRestApi( {
	url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
	consumerKey: process.env.WC_CONSUMER_KEY,
	consumerSecret: process.env.WC_CONSUMER_SECRET,
	version: 'wc/v3',
} );

// export const getProductsCategories= async (perPage) => {
// 	return await api.get(
// 		'products/categories',
// 		{
// 			per_page: perPage || 5,
// 		},
// 	);
// };


export default function getProductsCategories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://hempcasual.shop/wp-json/wc/v3/products/categories")
      .then(result => setData(result.data));
  }, []);

  return (
    <div>
      console.log(result)
    </div>
  );
}