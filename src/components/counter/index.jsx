import { useState } from "react";

function Counter() {

    let [count, setCount] = useState(0);

    const increasse = () => {
        setCount(count+1);

        console.log(count);
        
    }
    const disincreasse = () => {
        setCount(count-1);

        console.log(count);
        
    }
    return (
        <>
            <h1>Первый счетчик</h1>
            <h2>Счет: {count}</h2>
            <button onClick={increasse}>Увеличить</button>
            <br />
            <button onClick={disincreasse}>Уменьшить</button>
        </>
    );
}

 export default Counter;