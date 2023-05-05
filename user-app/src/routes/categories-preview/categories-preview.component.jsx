import { Fragment, useContext } from 'react'

import { CategoriesContext } from '../../context/categories.context'

import CategoryPreiew from '../../components/category-preview/category-preview.component'

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title]
                return <CategoryPreiew key={title} title={title} products={products} />
            })}
        </Fragment>
    )
}

export default CategoriesPreview