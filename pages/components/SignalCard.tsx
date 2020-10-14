import React from 'react'
import { Card } from 'antd';
import TrafficLight from './TrafficLight'
import DropdownSelector from './DropdownSelector'



const SignalCard = (props) => {
    const [SignalAvailableIndex, setSignalAvailableIndex] = React.useState(0)

    let counter = 0
    if (props.vcdObj.hasOwnProperty('signal')) {
        const timeArray = props.vcdObj.signal[SignalAvailableIndex].wave
        // current requested time is props.index
        while (timeArray[counter][0] < props.index && counter < timeArray.length) {
            counter++
        }
        if (counter == timeArray.length) counter--
        else if (timeArray[counter][0] < props.index) counter--
    }

    const signalString = (props.vcdObj.hasOwnProperty('signal') ? props.vcdObj.signal[SignalAvailableIndex].wave[counter][1] : '000')

    return (
        <Card title={props.street} style={{ width: 300, marginRight: 10 }}>
            <DropdownSelector index={props.index} vcdObj={props.vcdObj} setSignalAvailableIndex={setSignalAvailableIndex} />
            <TrafficLight value={signalString} />
        </Card>
    )
}

export default SignalCard