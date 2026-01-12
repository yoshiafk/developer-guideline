import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

interface LoadingScreenProps {
  delay?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ delay = 300 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--neutral-50)',
        zIndex: 9999,
      }}
    >
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 48, color: 'var(--axa-blue-primary)' }} spin />}
        tip="Loading..."
      />
    </div>
  );
};

export default LoadingScreen;
