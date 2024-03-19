import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function Controls() {
  const dispatch = useDispatch();
  const number = useRef();
  const LightTheme = useSelector(store => store.LightTheme);

  function handleIncrement() {
    dispatch({ type: "INCREMENT" })
  }

  function handleDecrement() {
    dispatch({ type: "DECREMENT" })
  }

  function handleAdd() {
    dispatch({
      type: "ADD",
      payload: {
        number: number.current.value
      }
    })
    number.current.value = "";
  }

  function handleSubtract() {
    dispatch({
      type: "SUBTRACT",
      payload: {
        number: number.current.value
      }
    })
    number.current.value = "";
  }

  function toggleTheme() {
    dispatch({
      type: "THEME"
    })
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>+1</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleDecrement}>-1</button>
        <a className="ms-3" onClick={toggleTheme}>{LightTheme === true ? <FaMoon /> : <FaRegSun />}</a>
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