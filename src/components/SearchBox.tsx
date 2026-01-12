import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const SearchBox: React.FC = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const doSearch = (q?: string) => {
    const query = (q ?? value).trim();
    if (!query) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="searchbox desktop-search">
      <Search
        placeholder="Search docs..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSearch={doSearch}
        enterButton={false}
        aria-label="Search documentation"
        ref={(instance: any) => { if (instance) inputRef.current = instance.input as HTMLInputElement; }}
        style={{ width: '100%' }}
        prefix={<SearchOutlined style={{ color: 'var(--neutral-400)' }} />}
      />
    </div>
  );
};

export default SearchBox;
