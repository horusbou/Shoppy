import React from 'react'
import { Header } from '../components'
import {GridComponent, ColumnDirective,ColumnsDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter} from '@syncfusion/ej2-react-grids'
import {customersData,customersGrid} from '../data/dummy'

function Customers() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header title="Customers" category={"Page"} />
    <GridComponent
        id="gridcomp"
        dataSource={customersData}
        allowPaging
        allowSorting
        Toolbar={['Delete']}
        editSettings={{allowDeleting:true, allowEditing:true}}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
      </GridComponent>
      <Inject services={[Page,Toolbar, Selection,Edit,Sort,Filter]} />
      </div>
  )
}

export default Customers
