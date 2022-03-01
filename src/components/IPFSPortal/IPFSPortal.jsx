import React, {useState} from 'react';
import ContentByAuthor from './ContentByAuthor.jsx'
import ContentByDate from './ContentByDate.jsx'

const actions = [
    { name: "Author", type: "b1" },
    { name: "Publication Date", type: "b2" },
  ];

function IPFSPortal() {
  const [contentType, setContentType] = React.useState("b1");

  let [PDF, setPDF] = useState("")


let handlePDFChange = (e) => {
  setPDF(e.target.value)
}

  return (
    <div className="App">
        <div>
        <div>
            Sort by {actions.map((action) => (
            <button
                key={action.type}
                style={{
                backgroundColor:
                    action.type === contentType ? "lightblue" : "white",
                }}
                onClick={() => setContentType(action.type)}
            >
                {action.name}
            </button>
            ))}
        </div>
        <div style={{ marginTop: 20 }}>
            {contentType === "b1" && <ContentByAuthor />}
            {contentType === "b2" && <ContentByDate />}
        </div>
    </div>
    </div>
  );
}

export default IPFSPortal;