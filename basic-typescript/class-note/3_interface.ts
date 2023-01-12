let person = { name: 'aaa', age: 28 };

function logAge(obj: { age: number }) {
  console.log(obj.age); // 28
}
// logAge() 함수에서 받는 인자의 형태는 age 를 속성으로 갖는 객체이다.
// 인자를 받을 때 단순한 타입 뿐만 아니라 객체의 속성 타입까지 정의할 수 있다.
logAge(person); // 28

// 인터페이스 적용
interface personAge {
  age: number;
}

function logAge1(obj: personAge) {
  console.log(obj.age);
}
let person1 = { name: 'bbb', age: 28};
// logAge1()의 인자는 personAge라는 타입을 가져야 한다.
logAge1(person1);

// 옵션 속성 : 인터페이스에 정의되어 있는 속성을 모두 다 꼭 사용하지 않아도 된다.
interface 인터페이스_이름 {
  속성?: 타입;
}

interface CraftBeer {
  name: string;
  hop?: number;
}

let myBeer = {
  name: 'Saporo'
};
function brewBeer(beer: CraftBeer) {
  console.log(beer.name);
}
brewBeer(myBeer); // Saporo

// 읽기 전용 속성 : 인터페이스로 객체를 처음 생성할 때만 값을 할당하고 그 이후에는 변경할 수 없는 속성
interface CraftBeer1 {
  readonly brand: string;
}

let myBeer1: CraftBeer1 = {
  brand: 'Belgian Monk'
};
// 인터페이스로 객체를 선언하고 나서 수정하려고 하면 오류 발생
myBeer1.brand = 'Horean Carpenter'; // error

// 읽기 전용 배열
let arr: ReadonlyArray<number> = [1,2,3];
arr.splice(0,1); // error
arr.push(4); // error
arr[0] = 100; // error

// 객체 선언과 관련된 타입 체킹
interface CraftBeer2 {
  brand?: string;
  // 인터페이스에 정의하지 않은 속성들을 추가로 사용
  [propName: string]: any;
}

function brewBeer2(beer: CraftBeer2) {
  // ..
}
brewBeer2({ brandon: 'what' }); // error: 오탈자 점검을 요하는 오류
// 타입 추론 무시
let myBeer2 = { brandon: 'what' };
brewBeer2(myBeer2 as CraftBeer2);

// 함수 타입
interface login {
  (username: string, password: string): boolean;
}

let loginUser: login;
loginUser = function (id: string, pw: string) {
  console.log('로그인 했습니다');
  return true;
}

// 클래스 타입
interface CraftBeer3 {
  beerName: string;
  nameBeer(beer: string): void;
}

class mybeer3 implements CraftBeer3 {
  beerName: string = 'Guinness';
  nameBeer(beer: string) {
    this.beerName = b;
  }
  constructor() {}
}

// 인터페이스 확장
interface Person {
  name: string;
}
interface Developer extends Person {
  skill: string;
}
let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';