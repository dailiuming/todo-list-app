/*
 * @Date: 2022-12-14 20:37:34
 * @author: dailiuming
 * @LastEditors: dlming 173051764@qq.com
 * @LastEditTime: 2022-12-14 21:40:39
 * @FilePath: /vite/todo-list-app/src/components/ToDoContainer/index.jsx
 * @Description:
 */
import React from "react"
import { List } from "antd"
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons"
import { STATUS } from "../../config/status"
const ToDoContainer = (props) => {
  const { todos = [], onOperate, filterStatus } = props
  const handleOperate = (operate, item) => {
    if (operate == 1) {
      onOperate &&
        onOperate({
          ...item,
          status: STATUS.IS_DELETE,
        })
    }
    if (operate == 2) {
      onOperate &&
        onOperate({
          ...item,
          status:
            item.status === STATUS.IS_DONE ? STATUS.IS_CREATE : STATUS.IS_DONE,
        })
    }
  }
  const showTodos = todos.filter((todo) => {
    return (
      todo.status !== STATUS.IS_DELETE &&
      // filterStatus.indexOf(todo.status.toString()) > -1
      filterStatus.includes(todo.status.toString())
    )
  })
  return (
    <div className="todo-container">
      <List
        dataSource={showTodos}
        renderItem={(todo) => (
          <List.Item
            className={
              todo.status == STATUS.IS_DONE
                ? "todo-container-list-done"
                : "todo-container-list"
            }>
            {todo.content}
            <div className="todo-item-operate">
              <CloseCircleOutlined onClick={() => handleOperate("1", todo)} />
              <CheckCircleOutlined onClick={() => handleOperate("2", todo)} />
            </div>
          </List.Item>
        )}></List>
    </div>
  )
}

export default ToDoContainer
