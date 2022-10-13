import React from 'react'
import { Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import { SparklineComponent } from '@syncfusion/ej2-react-charts';


const SparkLine = ({id,height,width,color,data,type,currentColor})=> {
    if(true)
    return <SparklineComponent
    id='id'
    height={height}
    width={width}
    dataSource={data}
    lineWidth={1}
    valueType="Numeric"
    xName='xval'
    yName='yval'
    fill={color}
    border={{color:currentColor, width:2}}
    type={type}
    tooltipSettings={{
        visible:true,
        // eslint-disable-next-line no-template-curly-in-string
        format:'${xval}: data ${yval}',
        trackLineSettings:{
            visible:true
        }
    }}
    >
    <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
}

export default SparkLine
