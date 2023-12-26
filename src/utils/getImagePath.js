import { circle, cross } from "../assets";

export const getPath = (cell) => {
    return cell === "X" ? cross : circle;
};
