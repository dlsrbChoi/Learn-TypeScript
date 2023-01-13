// 매개변수와 함수의 반환 값에 타입을 추가
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // error, too few parameters

// ? 를 이용
function sum1(a: number, b?: number): number {
  return a + b;
}

sum1(10, 20); // 30
sum1(10, 20, 30); // error
sum1(10); // 타입 에러 없음

// REST 문법이 적용된 매개변수
function sum2(a: number, ...nums: number[]): number {
  let totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
}

// this
function 함수명(this: 타입) {
  //...
}

// this 실습
interface Vue {
  el: string;
  count: number;

  init(this: Vue): () => {};
}

let vm: Vue = {
  el: '#app',
  count: 10,
  init: function (this: Vue) {
    return () => {
      return this.count
    }
  }
}

let getCount = vm.init();
let count = getCount();
console.log(count); // 10

// 콜백에서의 this
interface UIElement {
  // 아래 함수의 `this: void` 코드는 함수에 `this` 타입을 선언할 필요가 없다는 의미
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  info: string;
  onClick(this: Handler, e: Event) {
    // 위의 `UIElement` 인터페이스의 스펙에 `this`가 필요없다고 했지만 사용했기 때문에 에러가 발생
    this.info = e.message;
  }
}
let handler = new Handler();
let uiElement;
uiElement.addClickListener(handler.onClick); // error

class Handler1 {
  info: string;
  onClick(this: void, e: Event) {
    // `this`의 타입이 void이기 때문에 여기서 `this`를 사용할 수 없음
    console.log('clicked');
  }
}
let handler1 = new Handler1();
let uiElement1;
uiElement1.addClickListener((handler1.onClick));