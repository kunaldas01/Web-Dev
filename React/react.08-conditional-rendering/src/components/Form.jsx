import React from "react";
import Input from "./Input";

function Form() {
    return (
        <form className="form">
            <Input type="text" placeHolder="Username" />
            <Input type="password" placeHolder="password" />
            <button type="submit">Login</button>
        </form>
    );
}

export default Form;