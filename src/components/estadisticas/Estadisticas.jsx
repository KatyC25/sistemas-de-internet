import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../database/firebaseconfig";
import GraficosProductos from "./GraficosProductos";

const Estadistica = () => {
	const [productos, setProductos] = useState([]);
	const productosCollection = collection(db, "productos");

	useEffect(() => {
		const unsubscribe = onSnapshot(
			productosCollection,
			(snapshot) => {
				const fetchedProductos = snapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));
				setProductos(fetchedProductos);
			},
			(error) => {
				console.error("Error fetching productos: ", error);
				alert("Error fetching productos: " + error.message);
			},
		);
		return () => unsubscribe();
	}, []);
	const nombres = productos.map((producto) => producto.nombre);
	const precios = productos.map((producto) => parseFloat(producto.precio));
	return (
		<Container className="mt-5">
			<br />
			<h4>Estadisticas</h4>
			<Row className="mt-4">
				<Col xs={12} sm={12} lg={6} className="mb-4">
					<GraficosProductos nombres={nombres} precios={precios} />
				</Col>
			</Row>
		</Container>
	);
};
export default Estadistica;
