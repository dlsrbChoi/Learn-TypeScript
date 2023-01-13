// readonly
class Developer {
  readonly name: string;
  constructor(readonly name: string) {
  }
}

// Accessor
class Developer1 {
  name: string;
}
const A = new Developer1();
A.name = 'Apple';
// 클래스로 생성한 객체의 name 속성에 Apple 라는 값을 대입
// A라는 객체의 name 속성은 Apple 이라는 값을 가진다.

// name 속성에 제약사항 추가(get, set)
class Developer2 {
  private name: string;

  get name(): string {
    return this.name;
  }

  set name(newValue: string) {
    if (newValue && newValue.length > 5) {
      throw new Error('이름이 너무 깁니다');
    }
    this.name = newValue;
  }
}
const B = new Developer2();
B.name = 'Banana' // error
B.name = 'BBQ';

// Abstract Class
abstract class Developer3 {
  abstract coding(): void; // 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현해야 함
  drink(): void {
    console.log('drink sth');
  }
}

class FrontEndDeveloper extends Developer3 {
  coding(): void {
    // Developer3 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
    console.log('develop web')
  }
  design(): void {
    console.log('design web');
  }
}
const dev = new Developer3(); // error: cannot create an instance of an abstract class
const C = new FrontEndDeveloper();
C.coding(); // develop web
C.drink(); // drink sth
C.design(); // design web