import React from 'react'
import VCDParser from 'vcd-parser'
import { Upload, message, Button, Typography } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import read from 'file-reader'
import * as Papa from 'papaparse'
import { parse } from 'path'

const { Title } = Typography
const FileReader = (vcdObjSetter) => {
    const uploadProps = {
        name: 'file',
        accept: ".vcd",
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`)
                const string = info.file.originFileObj


                const test = read.file(string);

                console.log(string)
                console.log(test)
                VCDParser.parse(string)
                    .then(parsedData => {
                        console.log(parsedData)
                        vcdObjSetter(parsedData)
                    })
                    .catch(err => {
                        console.error(err);
                    });
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`)
            }
        },
    }

    return (
        <>
            <Title level={2}>CSV upload</Title>
            <Upload {...uploadProps}>
                <Button>
                    <UploadOutlined /> Click to Upload
        </Button>
            </Upload>
        </>
    )
}

export default FileReader


