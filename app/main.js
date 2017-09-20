import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login'
import UploadImages from './pages/uploadImages'
import ArticlePagination from './pages/articlePagination'
import {BrowserRouter, HashRouter, Route, Link} from 'react-router-dom';

import './main.scss';

ReactDOM.render(
  (<HashRouter>
    <div className="wrapper">
      {/*<ul className="nav navbar-nav">
        <div className="title">CMS系统</div>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/uploadImages">图片上传</Link></li>
        <li><Link to="/articlePagination">文章分页</Link></li>
      </ul>*/}
      {/*<Route exact path="/" component={Login}/>*/}
      {/*<Route exact path="/uploadImages" component={UploadImages}/>*/}
      {/*<Route exact path="/articlePagination" component={ArticlePagination}/>*/}
      <Route exact path="/" component={UploadImages}/>
    </div>
  </HashRouter>),
  document.getElementById('app')
)
