import { OmitProps } from 'antd/lib/transfer/ListBody'
import React from 'react'
import styled from 'styled-components'


//write color in hex
//traffic-light color
// const whole = 333;
// //actual traffic-lights
// const color1 = FF0000 //red
// const color2 = FFFF00 //yellow
// const color3 = 00FF00 //green

const TrafficLightmain = styled.div`
    position: relative;
    display: block;
    left: 50%;
    top: 50%; 
    // margin-left: -60px;
    // margin-top: -160px;
    background-color: #333333;
    width:120px;
    height:320px;
    border-radius:30px;

`

const CustomLight = styled.input`
    //remove default style
    appearance: none;
    //make the traffic lights appear
    position: relative;
    left: 50%;
    width:80px;
    height:80px;
    margin-top: 20px;
    margin-left:-40px;
    background-color: grey;
    vertical-align: middle;
    border-radius: 100%;
    display: block;
`

const RedLight = styled(CustomLight)`
    background-color: ${props => props.red};
`
const YellowLight = styled(CustomLight)`
    background-color: ${props => props.yellow};
`
const GreenLight = styled(CustomLight)`
    background-color: ${props => props.green};
`

const TrafficLight = (props) => {
    const value = '0'.repeat(3 - props.value.length) + props.value
    const red = (value.charAt(2) == '1' ? "#FF0000" : "darken(#FF0000,15%)")
    const yellow = (value.charAt(1) == '1' ? "#FFFF00" : "darken(#FFFF00,15%)")
    const green = (value.charAt(0) == '1' ? "#FFFF00" : "darken(#FFFF00,15%)")


    return (
        <TrafficLightmain>
            <RedLight type="radio" red={red} />
            <YellowLight type="radio" yellow={yellow} />
            <GreenLight type="radio" green={green} />
        </TrafficLightmain>
    )
}

export default TrafficLight