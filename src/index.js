import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './Counter'; // 导入计数器组件

// 找到页面根容器（对应 public/index.html 里的 <div id="root"></div>）
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 渲染 App 组件 */}
    <App /> 
    <Counter />
  </React.StrictMode>
);