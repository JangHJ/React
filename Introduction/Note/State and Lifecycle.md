### State and Lifecycle

State ( 상태 )
리액트 Componenet의 상태 -> 변경가능한 데이터
state는 개발자가 정의한다
렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야함!

<br>

state는 JavaScript 객체
state는 직접 수정할 수 없다. (수정이 가능하지만 하면안됨)

<br>

// state 직접 수정 ( 잘못된 사용법 )
```
this.state = { name: 'Inje' };
```

<br>

// setState 함수를 통한 수정 ( 정상적인 사용법 )
```
this.setState({ name: 'Inje' });
```

<br>

### Lifecycle 생명주기
#### 리액트 Component의 생명주기
- 출생 (Mounting) constructor
- 인생 (Updating) render
- 사망 (Unmounting) 화면에 더이상 표시되지 않을 때
  + componentWillUnmount

Component가 계속 존재하는 것이 아니라, 시간의 흐름에 따라 생성되고 업데이트 되다가 사라진다.



