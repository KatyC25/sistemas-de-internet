import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BarraNavegacion = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Sistema
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/inicio">
							Inicio
						</Nav.Link>
						<Nav.Link as={Link} to="/catalogo">
							Catálogo
						</Nav.Link>
						<Nav.Link as={Link} to="/categorias">
							Categorías
						</Nav.Link>
						<Nav.Link as={Link} to="/productos">
							Productos
						</Nav.Link>
						<Nav.Link as={Link} to="/empleados">
							Empleados
						</Nav.Link>
						<Nav.Link as={Link} to="/contador">
							Contador
						</Nav.Link>
						<Nav.Link as={Link} to="/estadisticas">
							Estadisticas
						</Nav.Link>
						<Nav.Link as={Link} to="/login">
							Login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default BarraNavegacion;
