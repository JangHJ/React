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

//NotificationList.jsx
import NotificationList from './chaptor_06/NotificationList';
ReactDOM.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  document.getElementById('root')
);

