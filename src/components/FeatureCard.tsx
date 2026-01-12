import React from 'react';
import { Card, Typography, Badge } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  highlight?: boolean;
  hoverable?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  badge,
  highlight = false,
  hoverable = true
}) => {
  const motionWhileHover = hoverable ? { y: -8 } : undefined;
  const iconWhileHover = hoverable ? { scale: 1.1, rotate: 5 } : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      whileHover={motionWhileHover as any}
      className="feature-card-wrapper"
    >
      <Card
        className="feature-card"
        bordered={false}
        style={{
          height: '100%',
          borderRadius: '16px',
          border: highlight ? '2px solid var(--axa-blue-primary)' : '1px solid var(--neutral-200)',
          boxShadow: highlight 
            ? '0 8px 24px rgba(0, 51, 160, 0.12)' 
            : '0 2px 8px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          background: highlight ? 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)' : '#ffffff'
        }}
      >
        {badge && (
          <Badge.Ribbon 
            text={badge} 
            color="var(--axa-blue-primary)"
            style={{ top: 12, right: -8 }}
          />
        )}
        
        <div style={{ textAlign: 'center', padding: '8px 0' }}>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              fontSize: '48px',
              color: 'var(--axa-blue-primary)',
              marginBottom: '20px',
              display: 'inline-block'
            }}
          >
            {icon}
          </motion.div>
          
          <Title level={4} style={{ marginBottom: '12px' }}>
            {title}
          </Title>
          
          <Paragraph style={{ 
            color: 'var(--neutral-600)', 
            marginBottom: 0,
            fontSize: '15px',
            lineHeight: '1.6'
          }}>
            {description}
          </Paragraph>
        </div>

        {/* Decorative element */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: highlight 
            ? 'linear-gradient(90deg, var(--axa-blue-primary), var(--axa-blue-light))' 
            : 'var(--neutral-100)',
          transition: 'all 0.3s ease'
        }} />
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
