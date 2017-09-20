/**
 * Created by huzhang on 2017/9/18.
 */
import React, {Component} from 'react'
import {Pagination} from 'element-react'
import data from './data.js'

import './index.scss'
import 'element-theme-default'

class ArticlePagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: data.content,
      currentContent: '',
      currentPage: 1,
      maxPage: 1
    }
    this.maxNumber = 10000;
    this.pArr = [];
    this.pageArr = [];
  }

  componentDidMount() {
    this.splitArticle()
    /*const article = this.state.content;
    let pArrTemp = article.split("</p>");
    if (pArrTemp.length > 0 && pArrTemp[0]) {
      pArrTemp.forEach(p=> {
        this.pArr.push(p + "</p>")
      })
    }
    let pageStr = '';
    this.pArr.forEach((p, i)=> {
      if (i == 0) {
        pageStr += p;
      } else {
        let pageStrLen = pageStr.length, pLen = p.length;
        if (pageStrLen + pLen <= this.maxNumber) {
          pageStr += p
        } else {
          this.pageArr.push(pageStr)
          pageStr = p;
        }
      }
    })
    this.pageArr.push(pageStr)
    // console.log(this.pageArr)
    this.setState({
      currentContent: this.pageArr[0],
      maxPage: this.pageArr.length,
      currentPage: 1
    })*/
  }

  splitArticle() {
    const article = data.content;
    let tempArr = [], tempStr = "", height = 700;
    $(".article_left p").each(function (i, m) {
      // console.log(m.outerHTML)
      console.log($(this).offset().top)
      var top = $(this).offset().top;
      if (top > height) {
        console.log(tempStr)
        tempArr.push(tempStr);
        tempStr = m.outerHTML;
        height += height
        // return false
      } else {
        tempStr += m.outerHTML;
      }
    });
    tempArr.push(tempStr)
    console.log(tempArr)
    this.setState({
      currentContent: tempArr[0],
      maxPage: tempArr.length
    })

  }

  createMarkup() {
    const {currentContent} = this.state;
    return {
      __html: currentContent
    }
  }

  onCurrentChange(currentPage) {
    this.setState({
      currentPage: currentPage,
      currentContent: this.pageArr[currentPage - 1]
    })
  }

  render() {
    const {currentPage, maxPage} = this.state;
    return (<div className="main">
        <div className="article" dangerouslySetInnerHTML={this.createMarkup()}>

        </div>
        <div className="article_left" dangerouslySetInnerHTML={{
          __html: data.content
        }}>

        </div>
        <div className="block">
          <Pagination layout="prev, pager, next"
                      pageCount={maxPage}
                      currentPage={currentPage}
                      onCurrentChange={this.onCurrentChange.bind(this)}/>
        </div>
      </div>

    )
  }
}

export default ArticlePagination;