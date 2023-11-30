### Component 합성

Component 안에 또 다른 Component를 쓸 수 있다.
복잡한 화면을 여러 개의 Component로 나눠서 구현가능!
  
```
function Welcome(props){
   return <h1>Hello, {props.name}</h1>;
}

function App(props) {
   return (
      <div>
         <Welcome name="Mike" />
         <Welcome name="Steve" />
         <Welcome name="Jane" />
      </div>
   )
}
```

```
ReactDOM.render(
   <App />
   document.getElementById('root)
)
App 컴포넌트 내에 3개의 Welcome 컴포넌트 존재함
각 Welcome 컴포넌트는 다른 props를 가지고 있음
```

### Component 추출

큰 컴포넌트를 산산조각 내자 ( 재사용성 ↑, 개발 속도↑ )

### Comment 컴포넌트
- avatar
- user info
- comment text
- comment date
- UserInfo > Avatar
