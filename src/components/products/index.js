import { isArray, isEmpty } from 'lodash';
import Link from 'next/link'
import Image from '../image';

const Products = ({products}) => {
    if( isEmpty(products) || !isArray(products)) {
        return null; 
    }

// const productsByCategories = products.filter(product => products.categories === '33563');
    
// console.log(productsByCategories)
// console.log(products.id === '33563')

  return (
    

    <div className="flex flex-wrap -mx-1 overflow-hidden z-10 ">
        
        { products.length ? products.map( product => {
            const img = product?.images?.[0] ?? {};
            return (
                <div key={product?.id} className="my-1 flex-shrink w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4 ">
                 <Link href={product?.permalink ??'/'} className="">
                    <a>
                        <Image 
                            sourceUrl={ img.src ?? ''}
                            altText={img?.alt}
                            title={ product?.name ?? ''}
                            width='378'
                            height='378'
                        />
                        <h3>{product.name}</h3>
                        
                    </a>
                 </Link>
                </div>
            
            )
        }) : null }




    </div>
  )
}

export default Products

// const result = products.filter(product => products.categories === 2116);

// console.log(result);