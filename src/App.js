import React from 'react';
// 导入子组件（注意文件名大小写，React 严格区分）
import A1234 from './a1234'; 

export default function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Hello React!</h1>
      {/* 传递属性给子组件 */}
      <A1234 name="水默" age="19" password="4567989" /> 
    </div>
  );
}