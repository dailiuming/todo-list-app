/*
 * @Date: 2022-12-08 23:39:00
 * @author: dailiuming
 * @LastEditors: dlming 173051764@qq.com
 * @LastEditTime: 2022-12-14 21:38:56
 * @FilePath: /vite/todo-list-app/src/App.jsx
 * @Description:
 */
import React, { useState } from "react"
import ToDoItem from "./components/ToDoItem"
import ToDoContainer from "./components/ToDoContainer"
import ToDoFilter from "./components/ToDoFilter"
import { STATUS } from "./config/status"

function App() {
  const [todos, setTods] = useState([])
  const [filterStatus, setFilterStatus] = useState(
    `${STATUS.IS_CREATE},${STATUS.IS_DONE}`
  )

  const handleSubmit = (todoItem) => {
    setTods([...todos, todoItem])
  }
  const handleOperate = (todoItem) => {
    const newToDos = todos.filter((todo) => todo.id !== todoItem.id)
    newToDos.push(todoItem)
    setTods(newToDos)
  }
  const handleStatusChange = (todoStatus) => {
    console.log(
      `🚀 ~ file: App.jsx:30 ~ handleStatusChange ~ todoStatus`,
      todoStatus
    )
    setFilterStatus(todoStatus)
    // const newToDos = todos.map((todo) => todo.status == todoStatus)
    // console.log(`🚀 ~ file: App.jsx:27 ~ handleFilter ~ newToDos`, newToDos)
    // setTods(newToDos)
  }
  return (
    <div className="todo-app">
      <h2 className="todo-title">代办清单</h2>
      <ToDoItem onSubmit={handleSubmit} />
      <ToDoFilter
        filterStatus={filterStatus}
        onFilterStatus={handleStatusChange}
      />
      <ToDoContainer
        filterStatus={filterStatus}
        todos={todos}
        onOperate={handleOperate}
      />
    </div>
  )
}

export default App
