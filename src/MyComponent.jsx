import { useState, useEffect } from 'react'

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('red');

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count])

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === 'red' ? 'blue' : 'red');
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>
    </>)
}
export default MyComponent