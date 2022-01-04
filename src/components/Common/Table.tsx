import styled from '@emotion/styled'
import React, { FunctionComponent, ReactNode } from 'react'

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 2rem;
`

type TableProps = {
  children: ReactNode
}

const Table: FunctionComponent<TableProps> = ({ children }) => {
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  )
}
export default Table
