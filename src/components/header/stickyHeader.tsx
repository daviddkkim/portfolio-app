import React, { Fragment, useEffect, useRef, useState } from 'react';
import Header from './header';
import './sticky.css'

export default () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  
  const handleScroll = () => {
    if (ref.current) {
        console.log(ref.current.getBoundingClientRect())
      setSticky(ref.current.getBoundingClientRect().top <= -65);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <Header title = {'David Kim'} navigation = {['Work', 'About', 'Resume']} sticky= {isSticky}></Header>
      </div>
    </Fragment>
  );
};