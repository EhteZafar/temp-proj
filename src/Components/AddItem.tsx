"use client"

import React, { useState } from "react";

const AddItem = () => {
    const [item, setItem] = useState<string>("");
    const [items, setItems] = useState<string[]>([]);
    
    const addItem = () => {
        setItems([...items, item]);
        setItem("");
    };
    
    return (
        <div>
        <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
        <ul>
            {items.map((item) => (
            <li key={item}>{item}</li>
            ))}
        </ul>
        </div>
    );
}

export default AddItem;
