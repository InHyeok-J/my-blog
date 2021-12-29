import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import COLORS from 'utils/Colors'

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 20px auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`
type CategoryListProps = {
  categoryList: string[]
}

const CategoryList: FunctionComponent<CategoryListProps> = ({
  categoryList,
}) => {
  const selectItem = 'WEB'
  return (
    <CategoryListWrapper>
      {categoryList.map((item, index) => {
        console.log(item, item === selectItem)
        return (
          <CategoryItem active={item === selectItem} key={index}>
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

const CategoryItem = styled.button<CategoryItemProps>`
  border-style: none;
  border-radius: 5px;
  margin-right: 20px;
  padding: 5px 8px;
  font-size: 18px;
  cursor: pointer;
  background-color: ${props =>
    props.active ? COLORS.grey_normal : COLORS.grey_light};
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px 6px;
    margin-right: 15px;
  }
`

export default CategoryList
