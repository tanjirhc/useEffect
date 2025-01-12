import { useState, useEffect } from 'react'

function MyComponent() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted");
        return () => {
            console.log("Component unmounted");
        }
    })

    function addCount() {
        setCount(c => c + 1);
    }

    return(<>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
    </>)
}
export default MyComponent