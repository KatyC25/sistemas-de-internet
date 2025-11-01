import { Card, Badge, Stack } from "react-bootstrap";

// Componente de Tarjeta de Producto
const TarjetaProducto = ({ producto, categorias }) => {
	// Encuentra el nombre de la categoría basándose en el ID.
	// Asumí que 'ld' era un typo y debía ser 'id'.
	const nombreCategoria =
		categorias.find((c) => c.id === producto.categoria)?.nombre ||
		"Sin categoría";

	return (
		<Card className="h-100 shadow-sm">
			<Card.Img
				variant="top"
				src={producto.imagen || "imagen_producto.jpg"} // Imagen de fallback
				style={{ height: "350px", objectFit: "cover" }}
				alt={producto.nombre}
			/>
			<Card.Body className="d-flex flex-column">
				<Card.Title className="fs-5 mb-2">{producto.nombre}</Card.Title>
				<Card.Text className="flex-grow-1 mb-2">
					{producto.descripcion}
				</Card.Text>

				{/* Stack para organizar los badges horizontalmente */}
				<Stack direction="horizontal" gap={2}>
					<Badge bg="success" className="mb-2 align-self-start">
						Precio: C${producto.precio}
					</Badge>
					<Badge bg="primary" className="mb-2 align-self-start">
						Stock: {producto.stock}
					</Badge>
					<Badge bg="dark" className="mb-2 align-self-start">
						{nombreCategoria}
					</Badge>
				</Stack>
			</Card.Body>
		</Card>
	);
};

export default TarjetaProducto;
