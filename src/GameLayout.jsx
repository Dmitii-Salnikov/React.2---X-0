import { Info } from './components/information/Information';
import { Field } from './components/field/Field';
import styles from './Game.module.css';
export const GameLayout = ({ props }) => {
	const { field, isDraw, isGameEnded, currentPlayer, handleReset, handleClick } = props;
	return (
		<>
			<div className={styles.container}>
				<div className={styles.gameField}>
					<h1 className={styles.title}>"Крестики-нолики"</h1>
					<Info
						isGameEnded={isGameEnded}
						isDraw={isDraw}
						currentPlayer={currentPlayer}
					/>
					<Field onClick={handleClick} field={field} />
					<button onClick={handleReset} className={styles.resetButton}>
						начать заново
					</button>
				</div>
			</div>
			;
		</>
	);
};
