import React from 'react'
import { Slider, InputNumber, Row, Col } from 'antd';

const TimeSlider = (props) => {
    const intervals = (props.vcdObj.hasOwnProperty('endtime') ? props.vcdObj.endtime / props.vcdObj.timescale.substring(0, props.vcdObj.timescale.length - 2) : 0)
    const min = 0
    return (
        <div>
            <Row>
                <Col span={12}>
                    <Slider
                        min={min}
                        max={intervals}
                        onChange={(value) => props.setIndex(value)}
                        value={typeof props.index === 'number' ? props.index : 0}
                        step={1}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={min}
                        max={intervals}
                        style={{ margin: '0 16px' }}
                        value={props.index}
                        onChange={(value) => props.setIndex(value)}
                        step={1}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default TimeSlider