/*
 * @Date: 2022-12-08 23:55:32
 * @author: dailiuming
 * @LastEditors: dlming 173051764@qq.com
 * @LastEditTime: 2022-12-14 22:02:34
 * @FilePath: /vite/todo-list-app/src/components/ToDoItem/index.jsx
 * @Description:
 */
import React, { useState } from "react"
import { Input, Button, message } from "antd"
import { STATUS } from "./../../config/status"

const ToDoItem = (props) => {
  const { onSubmit } = props
  const [todoItem, setTodoItem] = useState({
    id: Math.random(),
    content: "",
    status: STATUS.IS_CREATE,
  })
  const handleSubmit = (e) => {
    if (!todoItem.content)
      return message.open({
        type: "warning",
        content: "内容不能为空",
      })
    onSubmit && onSubmit(todoItem)
    setTodoItem({
      content: '',
    })
  }

  const handleChange = (e) => {
    setTodoItem({
      id: Math.random(),
      status: STATUS.IS_CREATE,
      content: e.target.value,
    })
  }
  return (
    <div className="todo-item-input">
      <Input
        placeholder="请输入待办事项"
        value={todoItem.content}
        onPressEnter={handleSubmit}
        onChange={handleChange}
      />
      <Button size="large" type="primary" onClick={handleSubmit}>
        提交
      </Button>
    </div>
  )
}

export default ToDoItem
