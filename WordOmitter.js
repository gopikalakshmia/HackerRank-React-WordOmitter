import React, { useEffect, useState } from "react";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function WordOmitter() {
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords(!omitWords);
  };

  const clearFields = () => {
    // TODO: Add your changes here
    setInputText("");
  };

  const getProcessedText = (element) => {
    if(element==='show'){
      let splitStr = inputText.split(' ');
      console.log(splitStr);
      let newStr=[];
      splitStr.forEach(element => {
        let count=0;
        OMITTED_WORDS.forEach((omit)=>{
          if(element!==omit)
            count=count+1;    
        })
        if(count===OMITTED_WORDS.length){
          newStr.push(element);
        }
      });
  
      return newStr.join(' ')
    }
   else
   return inputText

}
// TODO: Add your changes here


return (
  <div className="omitter-wrapper">
    <textarea
      placeholder="Type here..."
      value={inputText}
      onChange={handleInputChange}
      data-testid="input-area"
    />
    <div>
      <button onClick={toggleOmitWords} data-testid="action-btn">
        {omitWords ? "Show All Words" : "Omit Words"}
      </button>
      <button onClick={clearFields} data-testid="clear-btn">
        Clear
      </button>
    </div>
    <div>
      <h2>Output:</h2>
      {omitWords&&<p data-testid="output-text">{getProcessedText('show')}</p>}
      {!omitWords&&<p data-testid="output-text">{getProcessedText('omit')}</p>}
    </div>
  </div>
);
}

export { WordOmitter };
