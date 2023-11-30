### Component
- Function Component
  + state 사용 불가
  + Lifecycle에 따른 기능 구현 불가
  + Hooks
- Class Component
  + 생성자에서 state를 정의
  + setState() 함수를 통해 state 업데이트
  + Lifecycle methods 제공

 <br>

### Hooks 갈고리
- state 관련 함수
- Lifecycle 관련 함수
- 최적화 관련 함수

<br>

useState() : state를 사용하기 위한 함수

```
const [변수명, set함수명] = useState(초기값);
```

<br>

useEffect() : Side effect를 수행하기 위한 Hook
```
Side effect = 효과, 영향
```

<br>

```
useEffect(() => {
  // 컴포넌트가 마운트 된 이후,
  // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
  // 의존성 배열에 빈 배열([])을 넣으면 마운트와    언마운트시에 단 한 번씩만 실행됨
  // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨

  return () => {
  // 컴포넌트가 마운트 해제되기 전에 실행됨.
  }
}, [의존성 변수1, 의존성 변수2, ...]);
```
