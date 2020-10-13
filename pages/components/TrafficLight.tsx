import React from 'react'
import styled from 'styled-components'


const TrafficLightmain = styled.div`
    position: relative;
    display: block;
    top: 50%; 
    margin-right: 10px;
    background-color: #333333;
    width:120px;
    height:320px;
    border-radius:30px;

`

const CustomLight = styled.div`
    position: relative;
    left: 50%;
    width:80px;
    height:80px;
    margin-top: 20px;
    margin-left:-40px;
    vertical-align: middle;
    border-radius: 100%;
    display: block;
    background-color: ${props => props.colour};
`

const TrafficLight = (props) => {
    const value = '0'.repeat(3 - props.value.length) + props.value
    const red = (value.charAt(2) == '1' ? "#FF0000" : "grey")
    const yellow = (value.charAt(1) == '1' ? "#FFFF00" : "grey")
    const green = (value.charAt(0) == '1' ? "#00FF00" : "grey")

    return (
        <TrafficLightmain>
            <CustomLight type="radio" colour={red} />
            <CustomLight type="radio" colour={yellow} />
            <CustomLight type="radio" colour={green} />
        </TrafficLightmain>
    )
}

export default TrafficLight