import React from 'react';
import styled from 'styled-components';
import { ChartBar } from './ChartBar';

export const Chart = ({ filteredYear }) => {
	const maxPrice = 2000;

	const months = [
		{ label: 'янв', currentPrice: 0 },
		{ label: 'фев', currentPrice: 0 },
		{ label: 'март', currentPrice: 0 },
		{ label: 'апр', currentPrice: 0 },
		{ label: 'Май', currentPrice: 0 },
		{ label: 'Июнь', currentPrice: 0 },
		{ label: 'Июль', currentPrice: 0 },
		{ label: 'авг', currentPrice: 0 },
		{ label: 'сек', currentPrice: 0 },
		{ label: 'окт', currentPrice: 0 },
		{ label: 'ноя', currentPrice: 0 },
		{ label: 'дек', currentPrice: 0 },
	];

	filteredYear.forEach((item) => {
		const monthNum = new Date(item.date).getMonth();
		months[monthNum].currentPrice += item.price;
	});
	return (
		<StyledChart>
			{months.map((el) => {
				return (
					<ChartBar
						key={el.label}
						label={el.label}
						currentPrice={el.currentPrice}
						maxPrice={maxPrice}
					/>
				);
			})}
		</StyledChart>
	);
};

const StyledChart = styled.div`
	padding: 1rem;
	border-radius: 12px;
	background-color: #f8dfff;
	text-align: center;
	display: flex;
	justify-content: space-around;
	height: 10rem;
	margin: 18px 10px 0px 10px;
	width: 740px;
	margin-left: 5px;
`;
