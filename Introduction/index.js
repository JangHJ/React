//Library.jsx
import Library from './chaptor_03/Library';
ReactDOM.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>,
  document.getElementById('root')
);

//Clock.jsx
import Clock from './chaptor_04/Clock';
setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);

//CommentList.jsx
import CommentList from './chaptor_05/CommentList';
ReactDOM.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>,
  document.getElementById('root')
);
