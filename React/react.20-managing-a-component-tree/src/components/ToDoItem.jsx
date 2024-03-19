import React, { useState } from 'react'

function ToDoItem(props) {
    return <li onClick={() => props.checked(props.id)}>{props.text}</li>
}

export default ToDoItem;