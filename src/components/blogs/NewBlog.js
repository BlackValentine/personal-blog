import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { useLocation, useNavigate } from 'react-router-dom';
import utils from '../../utils';
import 'react-markdown-editor-lite/lib/index.css';
import blogApi from '../../api/blogApi';

const mdParser = new MarkdownIt();

function NewBlog(props) {
  const { state } = useLocation();
  const navigate = useNavigate();

  const id = state?.id;

  const [titleBlog, setTitleBlog] = useState(state ? state.title : '')
  const [subtitleBlog, setSubtitleBlog] = useState(state ? state.subTitle : '')
  const [contentBlog, setContentBlog] = useState(state ? state.content : '')
  const [rawContentBlog, setRawContentBlog] = useState(state ? state.rawContent : '')
  const [imageBlog, setImageBlog] = useState(state ? state.image : '')
  const [previewImageURL, setPreviewImageURL] = useState(state ? state.image : '')
  const [typeBlog, setTypeBlog] = useState("Livestyle")

  const handleEditorChange = ({ html, text }) => {
    setContentBlog(html)
    setRawContentBlog(text)
  }

  const onImageUpload = (file) => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = data => {
        resolve(data.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  const handleInputTitleBlog = (e) => {
    setTitleBlog(e.target.value)
  }

  const handleInputSubtitle = (e) => {
    setSubtitleBlog(e.target.value)
  }

  const handleChooseBlogType = (e) => {
    setTypeBlog(e.target.value);
  }

  const hangelInputImage = async (e) => {
    let data = e.target.files;
    let file = data[0];
    if (file) {
      let base64 = await utils.getBase64(file)
      let objectUrl = URL.createObjectURL(file);
      setPreviewImageURL(objectUrl)
      setImageBlog(base64)
    }
  }

  const handleEditBlog = async () => {
    await blogApi.editBlog({
      id,
      titleBlog,
      subtitleBlog,
      contentBlog,
      rawContentBlog,
      typeBlog,
    })
    window.location.href='/'
  }

  const handleUploadBlog = async () => {
    await blogApi.createBlog({
      titleBlog,
      subtitleBlog,
      contentBlog,
      imageBlog,
      rawContentBlog,
      typeBlog
    })
    window.location.href='/'
  }

  return (
    <div className="bg-ghost-white dark:bg-eerie-black min-h-full w-full px-5 transition-mode">
      <div className="flex items-center justify-between gap-5 pt-12 w-full">
        <input
          type="text"
          name="title"
          className="mb-5 p-2.5 text-base border border-solid border-pastel-red dark:border-spanish-gray dark:bg-very-dark-gray dark:text-white hover:dark:bg-eerie-black focus:dark:bg-eerie-black rounded-lg w-full transition-mode"
          placeholder="Type Blog Title ..."
          onChange={handleInputTitleBlog}
          value={titleBlog}
        />
        <select 
          onClick={(e) => handleChooseBlogType(e)} 
          className="mb-5 p-3 text-base border border-solid border-pastel-red dark:border-spanish-gray dark:bg-very-dark-gray hover:dark:bg-eerie-black focus:dark:bg-eerie-black rounded-lg text-pastel-red dark:text-white outline-none cursor-pointer transition-mode"
        >
          <option value="Livestyle">Livestyle</option>
          <option value="Fashion">Fashion</option>
          <option value="Technology">Technology</option>
          <option value="Travel">Travel</option>
          <option value="Works">Works</option>
          <option value="Art&Design">Art&Design</option>
        </select>
      </div>

      <div className="flex">
        <div className="mr-5 mb-5">
          <input
            id="blogImg"
            type="file"
            hidden
            onChange={(e) => hangelInputImage(e)}
          />
          <label
            htmlFor="blogImg"
            className="flex text-center justify-center py-2.5 px-5 w-72 h-72 bg-white rounded-lg text-pastel-red text-base border border-solid border-pastel-red bg-center dark:border-spanish-gray dark:bg-very-dark-gray dark:text-white hover:dark:bg-eerie-black focus:dark:bg-eerie-black bg-no-repeat bg-contain cursor-pointer transition-mode"
            style={{ backgroundImage: `url(${previewImageURL})` }}
          >
            <span className="m-auto">{previewImageURL === '' ? 'Thêm ảnh' : ''}</span>
          </label>
        </div>
        <div className="h-72 w-full border border-solid border-pastel-red dark:border-spanish-gray rounded-lg overflow-hidden">
          <textarea
            className="h-full w-full py-2.5 px-5 outline-none resize-none dark:bg-very-dark-gray dark:text-white hover:dark:bg-eerie-black focus:dark:bg-eerie-black transition-mode"
            placeholder="Type Blog Subtitle ..."
            onChange={(e) => handleInputSubtitle(e)}
            value={subtitleBlog}
          />
        </div>
      </div>

      <MdEditor
        className="h-96"
        renderHTML={text => mdParser.render(text)}
        onChange={handleEditorChange}
        onImageUpload={onImageUpload}
        value={rawContentBlog}
        placeholder="Write something for your blog here ..."
      />

      <div className="flex justify-end">
        {state ?
          <button
            className="px-3 py-2 my-5 bg-transparent hover:bg-pastel-red hover:text-white rounded-full text-pastel-red text-base border border-solid border-pastel-red"
            onClick={handleEditBlog}
          >
            Complete Edit Blog
          </button> :
          <button
            className="px-3 py-2 my-5 bg-transparent hover:bg-pastel-red hover:text-white rounded-full text-pastel-red text-base border border-solid border-pastel-red"
            onClick={handleUploadBlog}
          >
            Upload New Blog
          </button>
        }
      </div>
    </div>
  );
}

export default NewBlog;