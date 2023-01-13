// 숫자형 이넘
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
// 위와 같이 숫자형 이넘을 선언할 때 초기 값을 주면 초기 값부터 차례로 1씩 증가
// 초기 값을 주지 않으면 0부터 1씩 증가

// 숫자형 이넘 사용
enum Response {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, meessage: Response): void {
  // ...
}

respond("aaa", Response.Yes);

// 문자형 이넘
// 이넘 값 전부 다 특정 문자 또는 다른 이넘 값으로 초기화
enum Direction1 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// 리버스 매핑
// 숫자형 이넘에만 존재
// 이넘의 키로 값을 얻을 수 있고 값으로 키를 얻을 수도 있다.
enum Enum {
  A
}
let a = Enum.A; // 키로 값을 획득 하기
let keyName = Enum[a]; // 값으로 키를 획득 하기