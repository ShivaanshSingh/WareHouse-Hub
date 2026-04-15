"use client";
import React from 'react';

export default function CityDropdown({
  suggestions,
  showSuggestions,
  activeSuggestionIndex,
  onSuggestionClick,
  onSuggestionHover,
  customStyles = {}
}) {
  if (!showSuggestions || suggestions.length === 0) return null;

  return (
    <div style={{
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      marginTop: '8px',
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
      overflow: 'hidden',
      zIndex: 100,
      border: '1px solid rgba(226, 232, 240, 0.8)',
      textAlign: 'left',
      ...customStyles
    }}>
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          onMouseDown={(e) => {
            // Use onMouseDown instead of onClick to prevent onBlur from firing before selection is registered
            e.preventDefault();
            onSuggestionClick(suggestion);
          }}
          onMouseEnter={() => onSuggestionHover(index)}
          style={{
            padding: '12px 20px',
            fontSize: '0.9rem',
            color: '#1e293b',
            cursor: 'pointer',
            background: activeSuggestionIndex === index ? 'rgba(249, 115, 22, 0.1)' : 'transparent',
            borderBottom: index === suggestions.length - 1 ? 'none' : '1px solid rgba(241, 245, 249, 1)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'background 0.2s',
          }}
        >
          <svg style={{ width: '14px', height: '14px', color: '#94a3b8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span style={{ 
            fontWeight: activeSuggestionIndex === index ? 600 : 500,
            color: activeSuggestionIndex === index ? '#f97316' : '#1e293b'
          }}>
            {suggestion}
          </span>
        </div>
      ))}
    </div>
  );
}
