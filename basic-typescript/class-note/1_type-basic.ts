// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS Boolean
let isLoggedIn: boolean = false;

// TS 배열
let items: number[] = [1,2,3];
let arr: Array<number> = [1,2,3];
let strArr: Array<string> = ['가', '나', '다'];

// TS Tuple : 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식
let arr2: [string, number] = ['hi', 10];

// TS Enum : 특정 값(상수)들의 집합
enum strArr2 {a, b, c}
let arr3: strArr2 = strArr2.a;

// TS Any : 모든 타입에 대해 허용
let str2: any = 'hi';
let num2: any = 10;
let arr4: any = ['a', 2, true];

// TS Void : 변수에는 undefined 와 null 만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입
let unuseful: void = undefined;
function notuse(): void {
    console.log('sth');
}

// TS Never : 함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입
function neverEnd(): never{
    while (true) {

    }
}