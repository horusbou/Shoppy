import React from 'react'
import { Header } from '../components'
import {KanbanComponent,ColumnsDirective,ColumnDirective} from "@syncfusion/ej2-react-kanban"
import {kanbanData,kanbanGrid} from '../data/dummy'

function Kanban() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header title="Kanban" category={"App"} />
    <KanbanComponent 
    id="kanban"
    dataSource={kanbanData}
    cardSettings={{contentField:'Summary',headerField:'Id'}}
    keyField="Status"
    >
      <ColumnsDirective>
          {kanbanGrid.map((item,i)=>(<ColumnDirective key={i} {...item} />))}
      </ColumnsDirective>
    </KanbanComponent>
    </div>
  )
}

export default Kanban