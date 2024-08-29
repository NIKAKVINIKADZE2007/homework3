import React from 'react';
import styles from './Notodos.module.scss';
const Notodos = () => {
  return (
    <div className={styles.container}>
      <svg
        width='56'
        height='56'
        viewBox='0 0 56 56'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <rect width='56' height='56' fill='url(#pattern0_0_126)' />
        <defs>
          <pattern
            id='pattern0_0_126'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use xlinkHref='#image0_0_126' transform='scale(0.01)' />
          </pattern>
          <image
            id='image0_0_126'
            width='100'
            height='100'
            xlinkHref='data:image/png;base64,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'
          />
        </defs>
      </svg>
      <p className={styles.noTodosText}>
        You don't have any tasks registered yet Create tasks and organize your
        to-do items
      </p>
    </div>
  );
};

export default Notodos;
