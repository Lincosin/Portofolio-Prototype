import React from 'react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;