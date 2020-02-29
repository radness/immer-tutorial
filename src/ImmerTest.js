import produce from "immer";
import { useCallback } from "react";

const originalState = [
  {
    id: 1,
    todo: "전개 연산자와 배열 내장 함수로 불변성 유지하기",
    checked: true
  },
  {
    id: 2,
    todo: "immer로 불변성 유지하기",
    checked: false
  }
];

const nextState = produce(originalState, draft => {
  // id가 2인 항목의 checked값을 true로 설정
  const todo = draft.find(t => t.id === 2); // id로 항목 찾기
  todo.checked = true;
  // 혹은 draft[1].checked = true;

  // 배열에 새로운 데이터 추가
  draft.push({
    id: 3,
    todo: "일정 관리 App에 immer 적용하기",
    checked: false
  });

  // id가 1인 항목 제거하기
  draft.splice(
    draft.findIndex(t => t.id === 1),
    1
  );
});

// useState의 함수형 업데이트
// 예제 코드
const [number, setNumber] = useState(0);
// prevNumbers는 현재 number 값을 가리킵니다.
const onIncrease = useCallback(
  () => setNumber(prevNumber => prevNumber + 1),
  []
);

// immer에서 제공하는 produce함수를 호출할 때, 첫번째 파라미터가 함수형태라면 업데이트 함수를 반환합니다.
const update = draft => {
  draft.value = 2;
};

const originalState = {
  value: 1,
  foo: "var"
};

const nextState = update(originalState);
console.log(nextState); // { value: 2, foo: "bar" }
