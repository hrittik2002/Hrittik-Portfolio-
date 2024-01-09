// src/declarations/react-github-calendar.d.ts

declare module 'react-github-calendar' {
    import React from 'react';
  
    interface GitHubCalendarProps {
      username: string;
      blockSize?: number;
      blockMargin?: number;
      theme?: 'standard' | 'default' | 'slim';
      fontSize?: number;
      tooltips?: boolean;
      responsive?: boolean;
      global_stats?: boolean;
      years_ago?: number;
      show_total?: boolean;
      cache?: number;
    }
  
    const GitHubCalendar: React.FC<GitHubCalendarProps>;
  
    export default GitHubCalendar;
  }
  