import React, { useState } from 'react';
import { Link } from 'gatsby';

export default ({ items, curr, prev, next }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className='toc-toggle' onClick={() => setShow(!show)}>
         📖 Table of Contents
      </button>
      <aside className={`toc${show ? ` show` : ``}`}>
        <p className='toc-current'>{curr}</p>
        <p className='toc-title'>Table of Contents</p>
        <nav
          className='toc-content'
          dangerouslySetInnerHTML={{ __html: items }}
        />
        <nav className='toc-navigation'>
          <Link to={prev} className={!prev ? 'hide' : ''}>
            &larr; Previous Page
          </Link>
          <Link to={next} className={!next ? 'hide' : ''}>
            Next Page &rarr;
          </Link>
        </nav>
      </aside>
    </>
  );
};
