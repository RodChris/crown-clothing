import { Fragment } from 'react'
import { useSelector } from 'react-redux'

import { selectCategoriesMap } from '../../store/categories/categories.selector'

import CategoryPreiew from '../../components/category-preview/category-preview.component'

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)

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