import { useState } from "react";

function SmallerText({text}) {

    let [sosto, setSosto] = useState(true);
    const maxlenght = 100;
    const smal = () => {
        setSosto(!sosto);
    }


    return (
        <div>
            {sosto ? text : text.slice(0, maxlenght) + "..." }
            <span onClick={smal}> {sosto ? "Свернуть" : "Развернуть"} </span>
        </div>
    );
}

export default SmallerText;