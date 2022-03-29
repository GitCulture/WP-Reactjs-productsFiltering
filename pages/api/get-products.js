const { version } = require('dompurify');

const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3"
});

export default async function handler(req, res) {
  const responseData = {
    success: false, 
    products: [],
    categories: []
  }
  const { perPage } = req?.query ?? {};

  try {
    const {allProducts} = await api.get(
        'products', 
        {
          per_page: perPage || 50
        }
    );
    const {Categories} = await api.get(
      'products/categories?parent=0',
      {
        per_page: 100
      }
    );

    responseData.success = true;
    responseData.products = allProducts;
    responseData.categories = Categories;

    res.json(responseData);
    
  } catch (error) {
    responseData.error = error.message;
    res.status(500).json(responseData);
  }

}