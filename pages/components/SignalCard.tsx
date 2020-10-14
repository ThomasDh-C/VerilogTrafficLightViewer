import React from 'react'
import { Card } from 'antd';
import TrafficLight from './TrafficLight'
import DropdownSelector from './DropdownSelector'



const SignalCard = (props) => {
    const [SignalAvailableIndex, setSignalAvailableIndex] = React.useState(0)

    const lamp1 = (props.vcdObj.hasOwnProperty('signal') ? props.vcdObj.signal[SignalAvailableIndex].wave[props.index][1] : '000')

    return (
        <Card title="XXX street" style={{ width: 300 }}>
            <TrafficLight value={lamp1} />
            <DropdownSelector index={props.index} vcdObj={props.vcdObj} setSignalAvailableIndex={setSignalAvailableIndex} />
        </Card>
    )
}

export default SignalCard