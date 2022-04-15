import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("useEffect called on update")
        document.title = `Title Number ${count}`
    },[count])

  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}> Click {count} times</button>
    </div>
  )
}

export default HookCounterOne