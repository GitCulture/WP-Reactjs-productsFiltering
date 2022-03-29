import React from 'react'
import ParentCategoryBlock from './ParentCategoryBlock';

const ParentCategoriesBlock = (props) => {

    const { productCategories } = props;  //pulling out of a props product categories

  return (
    <div className='container flex flex-wrap  justify-center mx-auto'>
            { productCategories.length ? (
                productCategories.map( productCategory => <ParentCategoryBlock key={productCategory.id} //when you looping through items in an array REACTJS want us to use a 'key'
                category={productCategory} /> )
                ) : '' }
    </div>
  )
}

export default ParentCategoriesBlock