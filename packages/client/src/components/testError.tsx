import React from 'react';

export default function MyComponent()  {
    
    throw new Error('Сообщение что именно сломалось в компоненте');
  
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
}
