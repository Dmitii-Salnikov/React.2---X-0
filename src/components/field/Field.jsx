import styles from './Field.module.css';
import { getPath } from '../../utils/getImagePath';

export const FieldLayout = ({ field, onClick }) => {
	return (
		<div className={styles.field}>
			{field.map((cell, ind) => (
				<button onClick={() => onClick(ind)} key={ind} className={styles.cell}>
					{cell && (
						<img
							className={styles.image}
							draggable={false}
							src={getPath(cell)}
							alt="figure"
						/>
					)}
				</button>
			))}
		</div>
	);
};

export const Field = (props) => {
	return <FieldLayout {...props} />;
};
