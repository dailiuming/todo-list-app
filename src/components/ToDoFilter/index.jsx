/*
 * @Date: 2022-12-14 21:15:59
 * @author: dailiuming
 * @LastEditors: dlming 173051764@qq.com
 * @LastEditTime: 2022-12-14 21:37:03
 * @FilePath: /vite/todo-list-app/src/components/ToDoFilter/index.jsx
 * @Description:
 */
import React from "react"
import { Radio } from "antd"
import { STATUS } from "../../config/status.js"

const ToDoFilter = (props) => {
  const { filterStatus, onFilterStatus } = props
  const handleChange = (e) => {
    console.log(`🚀 ~ file: index.jsx:6 ~ onChange ~ e`, e.target.value)
    const value = e.target.value
    onFilterStatus && onFilterStatus(value)
  }
  return (
    <div className="todo-filter">
      {/* <Radio.Group /> */}
      <Radio.Group value={filterStatus} onChange={handleChange}>
        <Radio.Button value={`${STATUS.IS_CREATE},${STATUS.IS_DONE}`}>
          全部
        </Radio.Button>
        <Radio.Button value={`${STATUS.IS_CREATE}`}>未完成</Radio.Button>
        <Radio.Button value={`${STATUS.IS_DONE}`}>已完成</Radio.Button>
      </Radio.Group>
    </div>
  )
}

export default ToDoFilter
