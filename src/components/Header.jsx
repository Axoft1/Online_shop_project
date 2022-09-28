import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Онлайн магазин</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;