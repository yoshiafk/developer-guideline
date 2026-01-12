import React from 'react';
import { Card, Typography, Tag } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

interface QuickReferenceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags?: Array<{ text: string; color: string }>;
  borderColor?: string;
  delay?: number;
}

const QuickReferenceCard: React.FC<QuickReferenceCardProps> = ({
  icon,
  title,
  description,
  tags = [],
  borderColor = 'var(--axa-blue-primary)',
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{ height: '100%' }}
    >
      <Card
        className="quick-reference-card"
        bordered={false}
        style={{
          textAlign: 'center',
          height: '100%',
          borderRadius: '16px',
          border: `2px solid ${borderColor}`,
          boxShadow: `0 4px 16px ${borderColor}20`,
          background: '#ffffff',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            fontSize: '48px',
            color: borderColor,
            marginBottom: '16px',
            display: 'inline-block'
          }}
        >
          {icon}
        </motion.div>

        <Title 
          level={3} 
          style={{ 
            marginBottom: '12px',
            fontSize: '20px'
          }}
        >
          {title}
        </Title>

        <Paragraph 
          style={{ 
            marginBottom: tags.length > 0 ? '16px' : 0,
            color: 'var(--neutral-600)',
            lineHeight: '1.6'
          }}
        >
          {description}
        </Paragraph>

        {tags.length > 0 && (
          <div style={{ marginTop: '16px' }}>
            {tags.map((tag, index) => (
              <Tag 
                key={index} 
                color={tag.color}
                style={{ 
                  fontSize: '12px',
                  marginBottom: '4px'
                }}
              >
                {tag.text}
              </Tag>
            ))}
          </div>
        )}

        {/* Bottom accent bar */}
        <div style={{
          height: '4px',
          background: `linear-gradient(90deg, ${borderColor}, ${borderColor}80)`,
          borderRadius: '0 0 14px 14px'
        }} />
      </Card>
    </motion.div>
  );
};

export default QuickReferenceCard;
