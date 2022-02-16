import * as React from 'react';
import { DivProps } from 'react-html-props';

import { Spinner } from './Spinner';

export interface DefaultEmbedProps extends DivProps {
  url: string;
  image?: string;
}

export function EmbedPlaceholder({ url, image, ...divProps }: DefaultEmbedProps) {
  return (
    <div
      {...divProps}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid 1px rgb(219, 219, 219)',
        borderRadius: '5px',
        boxSizing: 'border-box',
        width: 540,
        height: 540,
        backgroundImage: image ? `url("${image}")` : undefined,
        backgroundRepeat: image ? 'no-repeat' : undefined,
        backgroundPosition: image ? 'center' : undefined,
        backgroundSize: image ? 'cover' : undefined,
        ...divProps.style,
      }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              rowGap: '10px',
              width: '100%',
              height: '100%',
              fontFamily: 'sans-serif',
            }}
          >
            <div>
              <Spinner size={30} />
            </div>
            <div>View this post</div>
          </div>
        </div>
      </a>
    </div>
  );
}
