# React_study

리액트 공부 기록 Document

<br>

JSX?
A syntax extension to JavaScript
=> JavaScript + XML/HTML

<br>

JSX코드 예제
const element = ```<h1>Hello, world!</h1>```

<br>

JSX의 역할
내부적으로 xml/html코드를 Java Script로 변환하는 과정을 거침 -> React.createElement

<br>
 
리액트에서 JSX를 쓰는것이 필수는 아니지만
JSX를 사용하면 장점들이 많기 때문에 편리함

<br>

JSX를 사용한 코드
const element = ( ```<h1 className="greeting">Hello, world!</h1>``` )

<br>

JSX를 사용하지 않은 코드
const element = React.createElement( 'h1', { className:'greeting' }, 'Hello, world!' )

<br>

React.createElement()의 결과로 아래와 같은 객체가 생성
const element = {
type: 'h1',
props: {
  className: 'greeting',
  children: 'Hello, wolrd!'
  }
}

<br>

React.createElement(
type,
[props],
[...children]
)
