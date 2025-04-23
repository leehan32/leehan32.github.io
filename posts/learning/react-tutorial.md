# React 기초 튜토리얼

리액트(React)는 UI 구축을 위한 JavaScript 라이브러리입니다. 이 튜토리얼에서는 React의 기본 개념과 간단한 애플리케이션을 만드는 방법을 알아보겠습니다.

## React란 무엇인가?

React는 Facebook에서 개발한 오픈 소스 JavaScript 라이브러리로, 사용자 인터페이스를 만들기 위한 도구입니다. React는 다음과 같은 특징을 가지고 있습니다:

- **컴포넌트 기반**: UI를 작은 독립적인 조각(컴포넌트)으로 나누어 개발
- **선언적**: 어떻게 동작할지가 아니라 UI가 어떻게 보여야 하는지 선언
- **가상 DOM**: 실제 DOM 변경을 최소화하여 성능 향상
- **단방향 데이터 흐름**: 부모에서 자식으로의 데이터 흐름 명확화

## 개발 환경 설정

React 프로젝트를 시작하는 가장 쉬운 방법은 Create React App을 사용하는 것입니다:

```bash
npx create-react-app my-app
cd my-app
npm start
```

## 첫 번째 컴포넌트 만들기

React 컴포넌트는 함수형 또는 클래스형으로 만들 수 있습니다. 요즘은 주로 함수형 컴포넌트를 사용합니다:

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>안녕하세요, {props.name}님!</h1>;
}

export default Welcome;
```

## JSX 소개

JSX는 JavaScript XML의 약자로, React에서 UI를 표현하는 문법입니다:

```jsx
const element = <h1>Hello, world!</h1>;
```

JSX는 HTML처럼 보이지만 실제로는 JavaScript 객체를 생성합니다. JSX 내에서는 중괄호(`{}`)를 사용하여 JavaScript 표현식을 포함할 수 있습니다.

## 상태(State) 관리하기

함수형 컴포넌트에서는 useState 훅을 사용하여 상태를 관리합니다:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
    </div>
  );
}
```

## 이벤트 처리하기

React에서 이벤트 처리는 HTML과 유사하지만, camelCase를 사용하고 함수를 전달합니다:

```jsx
function Button() {
  function handleClick() {
    alert('버튼이 클릭되었습니다!');
  }
  
  return (
    <button onClick={handleClick}>
      클릭하세요
    </button>
  );
}
```

## 조건부 렌더링

React에서는 JavaScript 조건문을 사용하여 조건부 렌더링을 구현할 수 있습니다:

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>환영합니다!</h1> : <h1>로그인해주세요.</h1>}
    </div>
  );
}
```

## 리스트 렌더링

배열의 map 메서드를 사용하여 리스트를 렌더링할 수 있습니다:

```jsx
function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map(number => (
        <li key={number}>
          {number}
        </li>
      ))}
    </ul>
  );
}
```

## 다음 단계

이 기본 튜토리얼을 통해 React의 핵심 개념을 살펴보았습니다. 다음으로 배울 만한 주제들은:

- React Router를 사용한 라우팅
- Context API 또는 Redux를 사용한 상태 관리
- React Hooks의 심화 사용법
- 서버와의 API 통신

React 공식 문서와 다양한 온라인 리소스를 통해 더 깊이 학습해보세요! 