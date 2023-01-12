// string 타입을 사용할 때
const name: string = 'A';

// 타입 별칭을 사용할 때
type Myname = string;
const name: Myname = 'A';

// interface 레벨의 복잡한 타입에도 별칭을 부여할 수 있음
type Developer = {
  name: string;
  skill: string;
}

// 제네릭에서 타입 별칭 사용
type User<T> = {
  name: T;
}