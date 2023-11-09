import React, { useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Card, Progress, Skeleton } from 'antd';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  progress: number;
  coverImage: string;
  to: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, progress, coverImage, to }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Link
      to={to}
      style={{
        width: 'calc(33% - 2rem)',
        height: 'calc(33% - 1rem)',
        maxWidth: '26rem',
        maxHeight: '18.75rem',
        display: 'block',
      }}>
      <Card
        style={{
          color: 'white',
          backgroundColor: '#49566F',
          margin: '0.5rem',
          position: 'relative',
        }}>
        <div style={{ position: 'relative', marginBottom: '10px' }}>
          {!imageLoaded && (
            <Skeleton.Image
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          )}
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            src={coverImage}
            alt="course cover"
            onLoad={handleImageLoad}
          />
        </div>
        <div
          style={{
            gap: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <h3 style={{ marginBottom: '2rem' }}>{title}</h3>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
            <Progress percent={progress} style={{ flex: 1, marginLeft: '10px' }} />
            <ArrowRightOutlined style={{ color: 'white' }} />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard;
