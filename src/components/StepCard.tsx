import React from 'react';
import { Card, Typography } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  action?: React.ReactNode;
  variant?: 'default' | 'primary' | 'success';
}

const StepCard: React.FC<StepCardProps> = ({ 
  number, 
  title, 
  description, 
  action,
  variant = 'default'
}) => {
  const variantColors = {
    default: { bg: '#0033A0', light: '#E3F2FD' },
    primary: { bg: '#00008F', light: '#EDE7F6' },
    success: { bg: '#10B981', light: '#D1FAE5' }
  };

  const colors = variantColors[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
      className="step-card-wrapper"
    >
      <Card 
        className="step-card"
        bordered={false}
        style={{
          borderRadius: '12px',
          border: '1px solid var(--neutral-200)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s ease',
          height: '100%'
        }}
      >
        <div style={{ display: 'flex', gap: '16px' }}>
          <div 
            style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '12px', 
              background: `linear-gradient(135deg, ${colors.bg}, ${colors.bg}dd)`,
              color: '#ffffff', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '20px', 
              fontWeight: 'bold',
              flexShrink: 0,
              boxShadow: `0 4px 12px ${colors.bg}40`
            }}
          >
            {number}
          </div>
          <div style={{ flex: 1 }}>
            <Title level={4} style={{ marginBottom: '8px', marginTop: '4px' }}>
              {title}
            </Title>
            <Paragraph style={{ color: 'var(--neutral-600)', marginBottom: action ? '16px' : 0 }}>
              {description}
            </Paragraph>
            {action && <div>{action}</div>}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default StepCard;
