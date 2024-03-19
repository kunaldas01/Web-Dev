import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { counterActions } from "../store/counter";
import { themeActions } from "../store/theme";

function Controls() {
  const dispatch = useDispatch();
  const number = useRef();
  const lightTheme = useSelector(store => store.lightTheme);

  function handleIncrement() {
    dispatch(counterActions.increment());
  }

  function handleDecrement() {
    dispatch(counterActions.decrement());
  }

  function handleAdd() {
    dispatch(counterActions.add(number.current.value));
    number.current.value = "";
  }

  function handleSubtract() {
    dispatch(counterActions.subtract(number.current.value));
    number.current.value = "";
  }

  function toggleTheme() {
    dispatch(themeActions.toggle());
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>+1</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleDecrement}>-1</button>
        <a className="ms-3" onClick={toggleTheme}>{lightTheme === true ? <FaMoon /> : <FaRegSun />}</a>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
        <input className="input" type="number" ref={number} placeholder="Enter a number" />
      </div >
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
        <button type="button" className="btn btn-outline-info btn-lg px-4" onClick={handleAdd}>Add</button>
        <button type="button" className="btn btn-outline-info btn-lg px-4" onClick={handleSubtract}>Subtract</button>
      </div >
    </>
  );
}

export default Controls;