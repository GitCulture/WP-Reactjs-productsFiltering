import Link from "next/link";

const ParentCategoryBlock = (props) => {

  const { category } = props;
  console.log(category)
  return (
    <div className="container xl:w-1/5 xl:w-1/4 md:w-1/3 sm:w-1/2 ">
     <h1 className="text-center" key={`category.categoryId`} >{category.name}</h1>
    <img src={null !== category.image ? category.image.sourceUrl : '' } alt="" />
    {/* <Link href={`/categories/${category?slug}`}> </Link>  */}
        

    </div>
  )
}

export default ParentCategoryBlock