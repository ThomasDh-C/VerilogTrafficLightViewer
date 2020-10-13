import React from 'react'
import VCDParser from 'vcd-parser'

const ImportFromFile = (vcdObjSetter) => {
    let fileReader;

    const handleFileRead = (e) => {
        const content = fileReader.result;
        console.log(content);
        VCDParser.parse(content)
            .then(parsedData => {
                console.log(parsedData)
                vcdObjSetter(parsedData)
            })
            .catch(err => {
                console.error(err);
            });
    };

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };

    return (
        <div className='upload-expense'>
            <input type='file'
                id='file'
                className='input-file'

                onChange={e => handleFileChosen(e.target.files[0])}
            />
        </div>)
};


export default ImportFromFile