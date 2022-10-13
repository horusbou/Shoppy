import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject } from '@syncfusion/ej2-react-grids'
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy'
import { Header } from '../components'

function Employees() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Employees" category={"Page"} />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {employeesGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
      </GridComponent>
      <Inject services={[Page, Search]} />
    </div>
  )
}

export default Employees
