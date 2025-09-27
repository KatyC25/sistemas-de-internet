import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { db } from "../components/database/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import TablaCategorias from "../components/categorias/TablaCategorias";

const Categorias = () => {
	const [categorias, setCategorias] = useState([]);
	const categoriasCollection = collection(db, "categorias");

	const cargarCategorias = async () => {
		try {
			const consulta = await getDocs(categoriasCollection);
			const datosCategorias = consulta.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setCategorias(datosCategorias);
			console.log("Categorías cargadas desde Firestore:", datosCategorias);
		} catch (error) {
			console.error("Error al cargar categorías:", error);
		}
	};
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		cargarCategorias();
	}, []);
	return (
		<Container className="mt-4">
			<h4>Gestión de Categorías</h4>
			<TablaCategorias categorias={categorias} />
		</Container>
	);
};
export default Categorias;
