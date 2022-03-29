const WooCommerceRestApi = require( '@woocommerce/woocommerce-rest-api' ).default;

const api = new WooCommerceRestApi( {
	url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
	consumerKey: process.env.WC_CONSUMER_KEY,
	consumerSecret: process.env.WC_CONSUMER_SECRET,
	version: 'wc/v3',
} );

/**
 * Get Products.
 *
 * @return {Promise<void>}
 */
export const getProductsData = async (perPage) => {
	return await api.get(
		`products`,
		{
			per_page: perPage || 6
			
		},
		// 'products/categories' /wp-json/wc/v3/products/<id>

	);
};

export const getCategories = async (perPage) => {
	return await api.get(
		'products/categories?parent=0',
      {
        per_page: 100
      }
    );
		// 'products/categories' /wp-json/wc/v3/products/<id>
};
// export const getProductsCategories = async ( perPage ) => {
// 		return await api.get(
// 			'products/categories',
// 			{
// 				per_page: perPage || 1,
// 			},
// 		);
// };



// 	await api.get('products/categories')
	// 		.then((res) => {
	// 			console.log(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error.response.data);
	// 		})
	// 