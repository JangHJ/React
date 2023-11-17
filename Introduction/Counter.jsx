import React, { useState } from "react";

function Counter(props){
    const [count, setCount] = useCount(0);

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setcount(count + 1)}>
                클릭
            </button>
        </div>
    );
}
