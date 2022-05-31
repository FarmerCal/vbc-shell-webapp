import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='cursor' id='cursor'></div>
    <div className='view-box' id='view-box'>
      <div className='x-cross' id='x-cross'></div>
      <div className='y-cross' id='y-cross'></div>
    </div>
    <div className='target' id='target'></div>
    <div className='prev-time' id='prev-time'>Previous time: ------ 0sec</div>
    <div className='keystrokes' id='keystrokes'>Keystrokes used: --- 4key</div>
  </>
);
