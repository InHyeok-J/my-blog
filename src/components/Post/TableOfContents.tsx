import styled from '@emotion/styled'
import React, { createElement, FunctionComponent } from 'react'
import COLORS from 'utils/Colors'

export type TableOfContentsProps = {
  contents: {
    items: ItemType[]
  }
}

export type ItemType = {
  url?: string
  title?: string
  items?: ItemType[]
}

const TableOfContentsWrapper = styled.div`
  width: 200px;
  height: fit-content;
  position: fixed;
  right: calc((100vw - 1080px) * 0.45);
  top: 300px;
  font-size: 18px;
  color: ${COLORS.grey_semi_dark};
  z-index: 3;
  li {
    margin-top: 4px;
  }
  ul {
    margin: 13px;
    list-style: none;
  }
  a {
    padding-left: 5px;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }
  a:hover {
    border-left: 4px solid rgb(203, 102, 93);
    color: rgb(203, 102, 93);
  }
  .depth1 {
    padding-left: 0px;
  }
  .depth2 {
    padding-left: 15px;
  }
  .depth3 {
    padding-left: 30px;
  }
`

const TableOfContents: FunctionComponent<TableOfContentsProps> = ({
  contents,
}) => {
  const { items } = contents
  const Test = CreateTOC(items)
  return (
    <TableOfContentsWrapper>
      <ul>{Test}</ul>
    </TableOfContentsWrapper>
  )
}
export default TableOfContents

const CreateTOC = (items: ItemType[]) => {
  let ElementArray: React.DetailedReactHTMLElement<
    { className: string },
    HTMLElement
  >[] = []
  items.forEach(depth1 => {
    depth1.title &&
      ElementArray.push(
        createElement(
          'li',
          { className: 'depth1' },
          createElement('a', { href: depth1.url }, depth1.title),
        ),
      )
    if (depth1.items) {
      depth1.items.map(depth2 => {
        depth2.title &&
          ElementArray.push(
            createElement(
              'li',
              { className: 'depth2' },
              createElement('a', { href: depth2.url }, depth2.title),
            ),
          )
        if (depth2.items) {
          depth2.items.map(depth3 => {
            depth3.title &&
              ElementArray.push(
                createElement(
                  'li',
                  { className: 'depth3' },
                  createElement('a', { href: depth3.url }, depth3.title),
                ),
              )
          })
        }
      })
    }
  })
  return ElementArray
}
