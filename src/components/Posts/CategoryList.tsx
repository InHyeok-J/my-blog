import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import COLORS from 'utils/Colors'

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 20px auto;
  padding: 0 10px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`
export type CategoryListProps = {
  categoryList: string[]
  selectedCategory: string
}

const CategoryList: FunctionComponent<CategoryListProps> = ({
  categoryList,
  selectedCategory,
}) => {
  return (
    <CategoryListWrapper>
      {categoryList.map((item, index) => {
        return (
          <CategoryItem
            active={item === selectedCategory}
            key={index}
            to={`/posts?category=${item}`}
          >
            {item}
          </CategoryItem>
        )
      })}
    </CategoryListWrapper>
  )
}

type CategoryItemProps = {
  active: boolean
}
type CategoryLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

const CategoryItem = styled(({ active, ...props }: CategoryLinkProps) => (
  <Link {...props} />
))`
  border-style: none;
  border-radius: 5px;
  margin: 10px;
  padding: 5px 8px;
  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.grey_semi_dark};
  cursor: pointer;
  background-color: ${props =>
    props.active ? COLORS.grey_normal : COLORS.grey_light};
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px 6px;
    margin: 5px;
  }
`

export default CategoryList
