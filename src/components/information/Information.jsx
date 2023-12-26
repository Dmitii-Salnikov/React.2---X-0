import styles from './Information.module.css';
import React from 'react';

export const Info = ({ isDraw, isGameEnded, currentPlayer }) => {
	let status;

	if (isDraw === true) {
		status = 'Ничья';
	} else if (isDraw === false && isGameEnded === true) {
		status = `Победа: ${currentPlayer}`;
	} else if (isDraw === false && isGameEnded === false) {
		status = `Ходит: ${currentPlayer}`;
	}

	return <InfoLayout status={status} />;
};

const InfoLayout = ({ status }) => {
	return <p className={styles.info}>{status}</p>;
};
