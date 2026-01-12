import React from 'react';
import { Typography } from 'antd';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const { Title, Paragraph } = Typography;

interface ContentSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'gradient';
  compact?: boolean;
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  id,
  title, 
  subtitle,
  icon,
  children,
  background = 'white',
  compact = false,
  className = ''
}) => {
  const backgrounds = {
    white: 'var(--white)',
    gray: 'var(--neutral-50)',
    gradient: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)'
  };

  return (
    <section 
      id={id}
      className={`content-section ${className}`}
      style={{
        padding: compact ? '48px 0' : '64px 0',
        background: backgrounds[background],
        borderTop: background !== 'white' ? '1px solid var(--neutral-200)' : 'none'
      }}
    >
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '0 16px'
      }}>
        <ScrollReveal>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: compact ? '32px' : '48px' 
          }}>
            {icon && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  fontSize: '56px',
                  marginBottom: '16px',
                  display: 'inline-block'
                }}
              >
                {icon}
              </motion.div>
            )}
            
            <Title 
              level={2} 
              style={{ 
                marginBottom: subtitle ? '12px' : '24px',
                background: 'linear-gradient(135deg, var(--axa-blue-primary), var(--axa-blue-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {title}
            </Title>
            
            {subtitle && (
              <Paragraph style={{ 
                fontSize: '18px', 
                color: 'var(--neutral-600)', 
                maxWidth: '768px', 
                margin: '0 auto',
                lineHeight: '1.7'
              }}>
                {subtitle}
              </Paragraph>
            )}
          </div>
        </ScrollReveal>

        {children}
      </div>
    </section>
  );
};

export default ContentSection;
