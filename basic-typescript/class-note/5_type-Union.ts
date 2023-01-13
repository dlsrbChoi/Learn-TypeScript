// 유니온 타입
function logText(text: string | number) {
  // ...
}

// any를 사용하는 경우
function getAge(age: any) {
  age.toFixed(); // 에러 발생, age의 타입이 any로 추론되기 때문에 숫자 관련된 API를 작성할 때 코드가 자동 완성되지 않는다.
  return age;
}
// 유니온 타입을 사용하는 경우
function getAge1(age: number | string) {
  if (typeof age === 'number') {
    age.toFixed(); // 정상 동작, age의 타입이 `number`로 추론
    return age;
  }
  if (typeof age === 'string') {
    return age;
  }
  return new TypeError('age must be number or string');
}

// Intersection Type
// 인터섹션 타입은 여러 타입을 모두 만족하는 하나의 타입을 의미
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: number;
}
// A 라는 타입에 할당
type A = Person & Developer;
// A의 타입
// {
//   name: string;
//   age: number;
//   skill: string;
// }