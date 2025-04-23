# JavaScript의 최신 기능

최근 JavaScript 언어는 계속해서 발전하고 있습니다. 이 글에서는 최신 JavaScript 기능 중 개발자들이 꼭 알아야 할 몇 가지를 소개합니다.

## 1. 옵셔널 체이닝 (Optional Chaining)

옵셔널 체이닝은 객체의 중첩된 속성을 안전하게 접근할 수 있게 해주는 문법입니다.

```javascript
// 예전 방식
const name = user && user.profile && user.profile.name;

// 옵셔널 체이닝 사용
const name = user?.profile?.name;
```

이 문법은 특히 API 응답이나 객체의 깊은 속성에 접근할 때 매우 유용합니다.

## 2. Nullish 병합 연산자 (Nullish Coalescing)

Nullish 병합 연산자(`??`)는 `null`이나 `undefined`일 경우에만 대체값을 사용합니다.

```javascript
// || 연산자는 0, '', false 등도 대체값으로 대체함
const count = someValue || 10;

// ?? 연산자는 null이나 undefined일 때만 대체값을 사용
const count = someValue ?? 10;
```

## 3. 비동기 작업을 위한 top-level await

최신 JavaScript 환경에서는 비동기 함수 외부에서도 `await`를 사용할 수 있게 되었습니다.

```javascript
// 모듈 내에서 바로 await 사용 가능
const response = await fetch('https://api.example.com/data');
const data = await response.json();

console.log(data);
```

## 4. Private 클래스 필드

클래스 내부에서 private 필드를 선언할 수 있게 되었습니다:

```javascript
class User {
  #password; // private 필드
  
  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }
  
  validatePassword(input) {
    return this.#password === input;
  }
}

const user = new User('john', '1234');
console.log(user.username); // 'john'
console.log(user.#password); // Error: private field
```

## 마무리

JavaScript는 계속해서 발전하고 있으며, 이런 새로운 기능들이 개발자의 생산성을 높이고 코드의 가독성을 향상시킵니다. 앞으로도 더 많은 혁신적인 기능들이 추가될 것으로 기대됩니다.

최신 기능을 사용할 때는 브라우저 호환성을 항상 확인하고, 필요하다면 Babel과 같은 도구를 통해 이전 버전의 JavaScript로 변환하여 사용하는 것이 좋습니다. 