import React from 'react'
import { GridComponent,ColumnsDirective, Toolbar, ColumnDirective,Page,Selection,Inject,Edit,Sort,Filter } from '@syncfusion/ej2-react-grids'
import { customersData,customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-t-3xl'>
      <Header category="Page" title="Customers"/>
      <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      width='auto'
     toolbar={['Delete']}
     editSettings={{allowEditing:true,allowDeleting:true}}
      >
        <ColumnsDirective>
         {
          customersGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))
         }   
         </ColumnsDirective>   
         <Inject services={[Page, Toolbar,Selection,Sort,Filter,Edit]}/>     
      </GridComponent>
    </div>
  )
}

export default Customers