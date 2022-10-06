import React, { useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import SignaturePad from 'react-signature-canvas';
import './App.css';
import "./sigCanvas.css"



function App() {
  const [imageURL, setImageURL] =useState(null);

  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();

  const save = () => 
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  return (
    <div className="App">
    <div className="cf-title-01">
    <h1> E-Signature </h1>
    </div>
      <Popup modal trigger={<button>Box</button>}
      closeOnDocumentClick={false}
      >
      {close => (
        <>
          <SignaturePad
            ref={sigCanvas}
            canvasProps={{
              className: "signatureCanvas"
            }}
          />
          <br/>
          <button onClick={save}>Save</button>
          <button onClick={clear}>Clear</button>
          <button onClick={close}>Close</button>
        </>
      )}
      </Popup>
      <br />
      <br />
      {imageURL ? (
        <img
          src={imageURL}
          alt="my signature"
          style={{
            display: "block",
            margin: "0 auto",
            border: "1px solid black",
            width: "150px" 
        }}
        />
      ) : null}

    </div>
  );
}

export default App;






