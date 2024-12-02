import React from 'react';
import ReactDOM from 'react-dom';

export function message(msg, onclick) {
  // 创建容器
  const div = document.createElement('div');
  document.body.appendChild(div);
  
  // 定义移除方法
  const destroy = () => {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  // 渲染消息组件
  ReactDOM.render(
    <div className="message" onClick={() => {
      onclick?.();
      destroy();
    }}>
      {msg}
    </div>,
    div
  );

  // 3秒后自动移除
  setTimeout(destroy, 3000);
}

