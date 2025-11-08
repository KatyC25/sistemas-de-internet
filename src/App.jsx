import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import BarraNavegacion from "./components/BarraNavegacion";
import Inicio from "./views/Inicio";
import Catalogo from "./views/Catalogo";
import Categorias from "./views/Categorias";
import Productos from "./views/Productos";
import Empleados from "./views/Empleados";
import Contador from "./views/Contador";
import Estadisticas from "./views/Estadisticas";
import Login from "./views/Login";
import "./App.css";

function App() {
	return (
		<div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
			<BarraNavegacion />
			<Container fluid className="flex-grow-1 p-4">
				<Routes>
					<Route path="/inicio" element={<Inicio />} />
					<Route path="/catalogo" element={<Catalogo />} />
					<Route path="/categorias" element={<Categorias />} />
					<Route path="/productos" element={<Productos />} />
					<Route path="/empleados" element={<Empleados />} />
					<Route path="/contador" element={<Contador />} />
					<Route path="/estadisticas" element={<Estadisticas />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Inicio />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
