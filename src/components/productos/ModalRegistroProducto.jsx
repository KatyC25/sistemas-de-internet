import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ModalRegistroProducto = ({
	mostrarModal,
	setMostrarModal,
	nuevoProducto,
	manejoCambioInput,
	agregarProducto,
	categorias,
}) => {
	return (
		<Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Agregar Producto</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type="text"
							name="nombre"
							value={nuevoProducto.nombre}
							onChange={manejoCambioInput}
							placeholder="Ingresa el nombre"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Descripción</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							name="descripcion"
							value={nuevoProducto.descripcion}
							onChange={manejoCambioInput}
							placeholder="Ingresa la descripción"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Imagen</Form.Label>
						<Form.Control
							type="file"
							name="imagen"
							accept="image/*"
							onChange={manejoCambioInput}
						/>
						{nuevoProducto.imagen && (
							<div style={{ marginTop: 10 }}>
								<img
									src={nuevoProducto.imagen}
									alt="Previsualización"
									style={{
										width: 100,
										height: 100,
										objectFit: "cover",
										border: "1px solid #ccc",
										borderRadius: 4,
									}}
								/>
							</div>
						)}
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Precio</Form.Label>
						<Form.Control
							type="number"
							name="precio"
							value={nuevoProducto.precio}
							onChange={manejoCambioInput}
							placeholder="Ingresa el precio"
							min="0"
							step="0.01"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Stock</Form.Label>
						<Form.Control
							type="number"
							name="stock"
							value={nuevoProducto.stock}
							onChange={manejoCambioInput}
							placeholder="Ingresa el stock"
							min="0"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Categoría</Form.Label>
						<Form.Select
							name="categoria"
							value={nuevoProducto.categoria}
							onChange={manejoCambioInput}
						>
							<option value="">Selecciona una categoría</option>
							{categorias.map((cat) => (
								<option key={cat.id} value={cat.id}>
									{cat.nombre}
								</option>
							))}
						</Form.Select>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => setMostrarModal(false)}>
					Cancelar
				</Button>
				<Button variant="primary" onClick={agregarProducto}>
					Guardar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalRegistroProducto;
