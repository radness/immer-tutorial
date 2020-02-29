# immer-tutorial

immer를 사용하면 불변셩을 유지하는 작업을 매우 간단하게 처리할 수 있습니다.
immer는 라이브러리 입니다.

예시 코드
import produce from 'immer';
const nextState = produce(originalState, draft => {
// 바꾸고 싶은 값 바꾸기
draft.somewhere.deep.inside = 5;
})

produce는 두가지 파라미터를 받는 함수.
첫번째 파라미터는 수정하고 싶은 상태.
두번째 파라미터는 상태를 어떻게 업데이트할지 정의하는 함수.
두번째 파라미터로 전달되는 함수 내부에서 원하는 값을 변경하면, produce 함수가 불변성 유지를
대신해주면서 새로운 상태를 생성해줍니다.

\*immer 라이브러리의 핵심은 "불변성에 신경 쓰지 않는 것처럼 코드를 작성하되 불변성 관리는 제대로 해주는 것" 입니다.
