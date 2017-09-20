/**
 * Created by huzhang on 2017/9/15.
 */
import React, {Component} from 'react'
import moment from 'moment'
import './index.scss'

class UploadImages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      innerHTML: ''
    }
  }

  render() {
    return (
      <div className="uploadImg">
        <div className="slider">
          {/*<button>上传图片</button>*/}
        </div>
        <div id="uploadArea">
          {/*<ul id="uploadImage-tips">
           <li>你可以将多张图片拖动到下方区域，释放鼠标后自动上传文件。</li>
           </ul>*/}
          <ul className="imgList">

          </ul>
        </div>
      </div>
    )
  }

  componentDidMount() {
    // 检测是否支持File API
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      //  支持
    } else {
      alert('不支持拖拽上传');
    }

    const uploadArea = document.getElementById('uploadArea');
    uploadArea.addEventListener('dragover', this.dragOver, false)
    uploadArea.addEventListener('drop', this.fileSelect, false);
  }

  dragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }

  fileSelect(evt) {

    evt.stopPropagation();
    evt.preventDefault();

    const files = evt.dataTransfer.files; // 文件对象
    let output = '';
    const imgList = $('.imgList');
    // 处理多文件
    for (let i = 0, f; f = files[i]; i++) {
      console.log(f);

      const url = window.URL ? window.URL.createObjectURL(f) : window.webkitURL.createObjectURL(f)
      output += "<li>" +
        "<img class='imgBox' src='" + url + "'/>" +
        "<div class='fileInfo'>" + f.name +"</div>" +
        "<div class='fileInfo'>" + moment().format('YYYY-MM-DD') +"</div>" +
        "</li>";
    }
    imgList.append(output)


    /*for (var i = 0, f; f = files[i]; i++) {
     output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
     f.size, ' bytes, last modified: ',
     f.lastModifiedDate.toLocaleDateString(), '</li>');
     }
     // 显示文件信息
     document.getElementById('list').innerHTML = output.join('');*/
  }
}

export default UploadImages;