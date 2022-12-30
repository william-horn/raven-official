

import Container from "../../Container";
import Title from "../../typography/Title";
import buildClassName from "../../../lib/helpers/buildClassName";
import React from 'react';

const Footer = React.forwardRef(({ children, className, remove, style }, ref) => {
  return (
    <footer 
    ref={ref} 
    style={style} 
    className={buildClassName({
      base: "py-4 bg-zinc-800",
      extend: className,
      remove
    })}>
      {children}
    </footer>
  );
});

Footer.Title = ({ children, className }) => {
  return (
    <Title
    className={buildClassName({
      extend: className
    })}>
      {children}
    </Title>
  );
}

export default Footer;