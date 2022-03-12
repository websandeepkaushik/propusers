import { Container } from 'react-bootstrap';
import Header from '../../components/header/Header';

const Default = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Container>
          {children}
        </Container>
      </div>
    </>
  );
};

export default Default;