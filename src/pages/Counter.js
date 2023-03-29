import {useSelector, useDispatch} from "react-redux";
import style from "./Conuter.module.css"

function Counter() {
    const dispatch = useDispatch()
    const {inCount} = useSelector(state => state)

    const plus = () => {
        dispatch({
            type:"PLUS"
        })
    }
    const minus = () => {
        dispatch({
            type:"MINUS",
        })
    }

    return (
        <div className={style.container}>
            <button className={style.plus} onClick={plus}>+</button>
            <h3>{inCount}</h3>
            <button className={style.minus} onClick={minus}>-</button>
        </div>
    );
}
export default Counter;

