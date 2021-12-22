import React, { useEffect, useState } from 'react';

export default () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(window.scrollY > 50);
  const handleClick = () => window[`scrollTo`]({ top: 0, behavior: `smooth` });

  useEffect(() => {
    document.addEventListener(`scroll`, handleShow);
    return () => document.removeEventListener(`scroll`, handleShow);
  }, []);

  return (
    <button
      className={`back-to-top${show ? ` show` : ``}`}
      onClick={handleClick}
      aria-label='Back to top'
    >
      &uarr;
    </button>
  );
};
