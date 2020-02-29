import React, { useRef, useCallback, useState } from "react";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value]
      });
    },
    [form]
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      // array 에 새로운 항목 추가
      setData({
        ...data,
        array: data.array.concat(info)
      });

      // form init
      setForm({
        name: "",
        username: ""
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    id => {
      setData({
        ...data,
        array: data.array.filter(info => info.id !== id)
      });
    },
    [data]
  );

  return (
    <>
      <form onSubmit={onSubmit}></form>
    </>
  );
};

export default App;
