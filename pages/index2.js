import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/components/layout/header'
import Footer from '../src/components/layout/footer'
import { GET_PRODUCTS_ENDPOINT,HEADER_FOOTER_ENDPOINT } from '../src/utils/constants/endpoints'
import Products from '../src/components/products'


import axios from 'axios'


export default function Home({ headerFooter, products }) {
  
  const { header, footer} = headerFooter || {};

  return (
    <div>
      <Header  header={header} />
      <main className='container mx-auto p-4'>
        <Products products={products}/>
      </main>
      <Footer footer= {footer}/>
    </div>
  )
}


export async function getStaticProps() {
  const {data: headerFooterData} = await axios.get(HEADER_FOOTER_ENDPOINT)
  const {data: productsData} = await axios.get(GET_PRODUCTS_ENDPOINT)
  

  return {
    props:   { 
      headerFooterData: headerFooterData?.data ?? {}, 
      products: productsData?.products ?? {} 
    },
  
    revalidate: 1, 
  }
}