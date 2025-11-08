import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import Chart, { plugins, scales } from "chart.js/auto";
import { data } from "react-router-dom";

const GraficosProductos = ({ nombres, precios }) => {
	const data = {
		labels: nombres,
		datasets: [
			{
				label: "Precio (C$)",
				data: precios,
				backgroundColor: "rgba(75, 192, 192, 0.6)",
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 1,
			},
		],
	};
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Gráfico de Precios de Productos",
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: "Precio (C$)",
				},
			},
			x: {
				title: {
					display: true,
					text: "Productos",
				},
			},
		},
	};
	return (
		<div
			style={{
				width: "100%",
				height: "400px",
			}}
		>
			<Card className="mt-4">
				<Card.Body>
					<Card.Title>Gráfico de Precios de Productos</Card.Title>
					<Bar data={data} options={options} />
				</Card.Body>
			</Card>
		</div>
	);
};
export default GraficosProductos;
