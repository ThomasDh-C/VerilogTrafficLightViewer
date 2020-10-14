import React from 'react'
import { Slider, InputNumber, Row, Col } from 'antd';
import styled from 'styled-components'

const WideDiv = styled.div`
    width: 100%;
`

const TimeSlider = (props) => {
    const totalTime = (props.vcdObj.hasOwnProperty('endtime') ? props.vcdObj.endtime : 0)
    const min = 0

    return (
        <WideDiv>
            <Row >
                <Col span={12}>
                    <Slider
                        min={min}
                        max={totalTime}
                        onChange={(value) => props.setIndex(value)}
                        value={typeof props.index === 'number' ? props.index : 0}
                        step={1}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={min}
                        max={totalTime}
                        style={{ margin: '0 16px' }}
                        value={props.index}
                        onChange={(value) => props.setIndex(value)}
                        step={1}
                    />
                </Col>
            </Row>
        </WideDiv>
    )
}

export default TimeSlider