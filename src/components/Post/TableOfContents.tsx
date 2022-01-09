import styled from '@emotion/styled'
import React, { createElement, FunctionComponent, useEffect } from 'react'
import COLORS from 'utils/Colors'
import { toFit } from 'utils//ScrollEvent'

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
  right: calc((100vw - 1180px) * 0.45);
  top: 350px;
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
  .active {
    border-left: 4px solid rgb(203, 102, 93);
    color: rgb(203, 102, 93);
  }
  @media (max-width: 1100px) {
    & {
      display: none;
    }
  }
`

const TableOfContents: FunctionComponent<TableOfContentsProps> = ({
  contents,
}) => {
  const { items } = contents
  const Toc = CreateTOC(items)
  let HeaderElementArray: any[]
  let findTocArray: any[]

  useEffect(() => {
    const HeaderElement = document.querySelectorAll('h1,h2,h3')
    HeaderElementArray = [...HeaderElement]
    const findToc = document.querySelectorAll('.depth1, .depth2, .depth3')
    findTocArray = [...findToc]
    if (findTocArray) {
      appendScrollEvent(findTocArray, HeaderElementArray)
      const currentTag = findCurrentTag(HeaderElementArray)
      findTOCTag(currentTag, findTocArray)
    }
  }, [])

  useEffect(() => {
    if (findTocArray[0]) {
      function onScroll() {
        const currentTag = findCurrentTag(HeaderElementArray)
        findTOCTag(currentTag, findTocArray)
      }
      window.addEventListener('scroll', toFit(onScroll, {}), {
        passive: true,
      })

      return () => {
        window.removeEventListener('scroll', toFit(onScroll, {}), {})
      }
    }
  })

  return <TableOfContentsWrapper>{<ul>{Toc}</ul>}</TableOfContentsWrapper>
}
export default TableOfContents

const findCurrentTag = (elementsArray: any[]) => {
  const navbarElement = document.getElementById('Navbar') // Navbar Element를 가져옴.
  const NavBarHeight =
    navbarElement !== (undefined || null) ? navbarElement.offsetHeight : 0 //navbar
  const middleHeight = window.scrollY + window.innerHeight / 2 - NavBarHeight

  return elementsArray.reduce((pre, cur) => {
    if (middleHeight < pre.offsetTop && middleHeight < cur.offsetTop) {
      //현재 스크롤의 중간 값보다 이전 의 offsetTop이 더크고
      //현재 스크롤의 중간 값보다 다음 의 offsetTop이 작은경우 -> 원래 로직
      return pre
    }

    if (pre.offsetTop < middleHeight && middleHeight <= cur.offsetTop) {
      //이전 offsetTop보다 중간 값이 더 크고
      //중간 값보다 다음 오프셋이 작거나 같은 경우.>???/

      return pre
    }

    return cur
  })
}

const findTOCTag = (currnetHeader: { id: string }, TOC: any[]) => {
  for (const element of TOC) {
    if (
      decodeURI(element.childNodes[0].href).split('#')[1] === currnetHeader.id
    ) {
      element.childNodes[0].classList.add('active')
    } else {
      element.childNodes[0].classList.remove('active')
    }
  }
}

const appendScrollEvent = (TOC: any[], headers: Element[]) => {
  headers.map(v => {
    const target = document.querySelector('#' + v.id) as HTMLElement
    for (const tocElement of TOC) {
      if (decodeURI(tocElement.childNodes[0].href).split('#')[1] === v.id) {
        tocElement.childNodes[0].addEventListener(
          'click',
          (e: { preventDefault: () => void }) => {
            e.preventDefault()
            window.scrollTo({
              top: target!.offsetTop - 150,
              behavior: 'smooth',
            })
          },
        )
      }
    }
  })
}

const CreateTOC = (items: ItemType[]) => {
  let ElementArray: any[] = []

  items.forEach(depth1 => {
    depth1.title &&
      ElementArray.push(
        createElement(
          'li',
          {
            className: 'depth1',
            key: depth1.url,
          },
          createElement('a', { href: depth1.url }, depth1.title),
        ),
      )
    if (depth1.items) {
      depth1.items.map(depth2 => {
        let dept2Class = 'depth2'
        if (ElementArray[ElementArray.length - 1] === undefined) {
          dept2Class = 'depth1'
        }
        depth2.title &&
          ElementArray.push(
            createElement(
              'li',
              { className: dept2Class, key: depth2.url },
              createElement('a', { href: depth2.url }, depth2.title),
            ),
          )

        if (depth2.items) {
          depth2.items.map(depth3 => {
            let dept3Class = 'depth3'
            if (ElementArray[ElementArray.length - 1] === undefined) {
              dept3Class = 'depth1'
            }
            if (
              ElementArray[ElementArray.length - 1].props.className === 'depth1'
            ) {
              dept3Class = 'depth2'
            }
            depth3.title &&
              ElementArray.push(
                createElement(
                  'li',
                  { className: dept3Class, key: depth3.url },
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
