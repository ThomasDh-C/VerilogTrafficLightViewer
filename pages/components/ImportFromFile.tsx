import React from 'react'
import VCDParser from 'vcd-parser'
import styled from 'styled-components'

const ImportFromFile = (props) => {

    const ThickBaseDiv = styled.div`
        padding-top: 60px;
        padding-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
    `
    let fileReader;

    const handleFileRead = (e) => {
        const content = fileReader.result;
        VCDParser.parse(content)
            .then(parsedData => {
                console.log(parsedData)
                props.setVCD(parsedData)
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleFileChosen = (file) => {
        fileReader = new FileReader()
        fileReader.onloadend = handleFileRead
        fileReader.readAsText(file)
    }

    return (
        <ThickBaseDiv>
            <input type='file'
                id='file'
                accept='.vcd'
                onChange={e => handleFileChosen(e.target.files[0])}
            />
        </ThickBaseDiv>)
};


export default ImportFromFile