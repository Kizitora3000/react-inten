"use client"

import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: body,
        userId: 1,
      });

      console.log(response.data)
      setTitle('')
      setBody('')
    } catch (error) {
      console.error("Error posintg data: ", error)
    }
  }

  return (
    <div>
      <h1>Create Post</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="Body"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}