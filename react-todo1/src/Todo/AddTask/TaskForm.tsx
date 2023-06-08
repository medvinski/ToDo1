import React from 'react';
import { useState } from 'react';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const onTitleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTitle(event.currentTarget.value);
  const onDescriptionChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setDescription(event.currentTarget.value);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div
        style={{
          marginBottom: '20px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #EAEAEA 100%)',
          border: '1px solid #CCCCCC',
          borderRadius: '5px',
          transform: 'translateY(2px)',
          marginTop: '30px',
        }}
      >
        <label
          style={{ fontSize: '18px', padding: '10px', fontFamily: 'cursive' }}
        >
          Title
        </label>
        <input
          type="text"
          required
          value={title}
          onChange={onTitleChange}
          style={{
            fontSize: '16px',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
          }}
        />
      </div>
      <div
        style={{
          marginBottom: '20px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #EAEAEA 100%)',
          border: '1px solid #CCCCCC',
          borderRadius: '5px',
          transform: 'translateY(2px)',
        }}
      >
        <label
          style={{ fontSize: '18px', padding: '10px', fontFamily: 'cursive' }}
        >
          Description
        </label>
        <textarea
          rows={3}
          value={description}
          onChange={onDescriptionChange}
          style={{
            fontSize: '16px',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
          }}
        ></textarea>
      </div>
      <div>
        <button
          style={{
            fontSize: '18px',
            padding: '10px 20px',
            borderRadius: '5px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #EAEAEA 100%)',
            border: '1px solid #CCCCCC',
            transform: 'translateY(2px)',
            fontFamily: 'cursive',
            fontWeight: 'bold',
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
