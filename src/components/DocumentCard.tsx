import React from 'react';
import { Card, Typography, Space, Tag, Button } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

interface DocumentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: Array<{ text: string; color: string }>;
  linkTo: string;
  buttonText: string;
  featured?: boolean;
  readTime?: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
  icon,
  title,
  description,
  tags,
  linkTo,
  buttonText,
  featured = false,
  readTime
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      style={{ height: '100%' }}
    >
      <Card
        className="document-card"
        bordered={false}
        style={{
          height: '100%',
          borderRadius: '16px',
          border: featured ? '2px solid var(--axa-blue-primary)' : '1px solid var(--neutral-200)',
          boxShadow: featured 
            ? '0 8px 24px rgba(0, 51, 160, 0.15)' 
            : '0 2px 12px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: featured 
            ? 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)'
            : '#ffffff'
        }}
        styles={{ body: { padding: featured ? '32px' : '24px' } }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ 
              fontSize: featured ? '28px' : '24px', 
              color: 'var(--axa-blue-primary)',
              marginTop: '4px'
            }}
          >
            {icon}
          </motion.div>
          
          <div style={{ flex: 1 }}>
            <Title 
              level={featured ? 3 : 4} 
              style={{ marginBottom: '12px' }}
            >
              {title}
            </Title>
            
            <Paragraph 
              style={{ 
                marginBottom: '16px',
                color: 'var(--neutral-600)',
                lineHeight: '1.6'
              }}
            >
              {description}
            </Paragraph>
            
            <Space wrap style={{ marginBottom: '16px' }}>
              {tags.map((tag, index) => (
                <Tag key={index} color={tag.color}>
                  {tag.text}
                </Tag>
              ))}
              {readTime && <Tag>{readTime}</Tag>}
            </Space>
            
            <Link to={linkTo}>
              <Button 
                type={featured ? "primary" : "link"}
                icon={featured ? undefined : <ArrowRightOutlined />}
                style={featured ? {} : { padding: 0 }}
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom accent */}
        {featured && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, var(--axa-blue-primary), var(--axa-blue-light))'
          }} />
        )}
      </Card>
    </motion.div>
  );
};

export default DocumentCard;
