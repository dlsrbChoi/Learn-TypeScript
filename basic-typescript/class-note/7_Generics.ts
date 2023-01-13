function getText<T>(text: T): T {
  return text;
}
getText<string>('hi');
getText<number>(10);
getText<boolean>(true);

// 함수의 이름 바로 뒤에 <T>라는 코드를 추가
// 함수의 인자와 반환 값에 모두 T라는 타입을 추가
// 함수를 호출할 때 넘긴 타입에 대해 타입스크립트가 추정할 수 있음
// 함수의 입력 값에 대한 타입과 출력 값에 대한 타입이 동일한지 검증할 수 있음
function logText<T>(text: T): T {
  return text;
}
// 2가지 호출 방법
// #1 : 타입 추정이 안될 때 사용
const text = logText<string>("Hello Generic");
// #2 : 주로 사용
const text = logText("Hello Generic");

// 제네릭 타입 변수
function logText1<T>(text: T[]): T[] {
  console.log(text.length); // 제네릭 타입이 배열이기 때문에 `length`를 허용
  return text;
}