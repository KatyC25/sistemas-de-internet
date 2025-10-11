import React from "react";
import { Table, Button } from "react-bootstrap";

const styles = {
	container: {
		maxWidth: "700px",
		margin: "40px auto",
		background: "#fff",
		borderRadius: "16px",
		boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
		padding: "32px 24px",
	},
	titulo: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: "2rem",
		marginBottom: "24px",
		color: "#2c3e50",
		letterSpacing: "1px",
	},
	th: {
		background: "#34495e",
		color: "#fff",
		fontSize: "1.1rem",
		textAlign: "center",
		padding: "12px 0",
		border: "none",
	},
	td: {
		textAlign: "center",
		verticalAlign: "middle",
		fontSize: "1rem",
		padding: "10px 0",
		background: "#f8f9fa",
		border: "none",
	},
};

const TablaCategorias = ({ categorias, manejarEliminar }) => {
	return (
		<div style={styles.container}>
			<h2 style={styles.titulo}>Categorías</h2>
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th style={styles.th}>Nombre</th>
						<th style={styles.th}>Descripción</th>
						<th style={styles.th}>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{categorias.map((categoria) => (
						<tr key={categoria.id}>
							<td style={styles.td}>{categoria.nombre}</td>
							<td style={styles.td}>{categoria.descripcion}</td>
							<td>
								<Button
									variant="outline-danger"
									size="sm"
									className="m-1"
									onClick={() => manejarEliminar(categoria)}
								>
									<i className="bi bi-trash">borrar</i>
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default TablaCategorias;
