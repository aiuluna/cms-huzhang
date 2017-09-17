/**
 * Created by huzhang on 2017/9/15.
 */
import React, {Component} from 'react'
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
      <div>
        <div>请拖拽上传</div>
        <div id="uploadArea"></div>
        <div>{this.state.innerHTML}</div>
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
    // alert(123123)
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }

  fileSelect(evt) {

    evt.stopPropagation();
    evt.preventDefault();

    const files = evt.dataTransfer.files; // 文件对象
    let output = '';
    const uploadArea = document.getElementById('uploadArea');
    // 处理多文件
    for (let i = 0, f; f = files[i]; i++) {
      console.log(f);
      const url = window.URL.createObjectURL(f)
      // window.url.createObjectURL(f)
      console.log(url)
      output += "<li><img style='width: 100%;height: 100%' src='" + url +"'/></li>";
    }
    uploadArea.innerHTML=output


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