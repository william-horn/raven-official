
import Container from "../../Container";
import Title from '../../typography/Title';

const Footer = ({ children }) => {
  return (
    <footer className="footer h-[200px]">
      {children}
    </footer>
  );
};

Footer.Title = ({ children }) => {
  return (
    <Title className="text-center text-black">{children}</Title>
  )
}

export default Footer;

