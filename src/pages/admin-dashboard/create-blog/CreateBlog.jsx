import { useState } from 'react';
import SunEditor from 'suneditor-react';
import { blockquote, align, font, fontColor, fontSize, formatBlock, hiliteColor, horizontalRule, image, lineHeight, list, paragraphStyle, table, textStyle } from 'suneditor/src/plugins';
import 'suneditor/dist/css/suneditor.min.css';
import './createBlog.scss';

function CreateBlog() {
  const [formData, setFormData] = useState({
    title: '',
    imgUrl: '',
    body: ''
  });

  const { title, imgUrl } = formData;

  const options = {
    plugins: [
      blockquote,
      align,
      font,
      fontColor,
      fontSize,
      formatBlock,
      hiliteColor,
      horizontalRule,
      image,
      lineHeight,
      list,
      paragraphStyle,
      table,
      textStyle,
    ],
    showPathLabel: false,
    defaultStyle: "text-align:left",
    buttonList: [
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["paragraphStyle", "blockquote"],
      ["fontColor", "hiliteColor", "textStyle"],
      ["removeFormat"],
      ["font", "fontSize", "formatBlock"],
      ['image'],
      ["list"],
      ["undo", "redo"]
    ],
    font: [
      "Arial",
      "Courier New",
      "Impact",
      "Georgia",
      'Roboto',
      "tahoma",
      "Trebuchet MS",
      "Verdana"
    ],
    fontSize: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72],
    toolbar: {
      font: "Roboto"
    },
    colorList: [
      "rgb(0,0,0)",
      "rgb(97,189,109)",
      "rgb(26,188,156)",
      "rgb(84,172,210)",
      "rgb(44,130,201)",
      "rgb(147,101,184)",
      "rgb(71,85,119)",
      "rgb(204,204,204)",
      "rgb(65,168,95)",
      "rgb(0,168,133)",
      "rgb(61,142,185)",
      "rgb(41,105,176)",
      "rgb(85,57,130)",
      "rgb(40,50,78)",
      "rgb(247,218,100)",
      "rgb(251,160,38)",
      "rgb(235,107,86)",
      "rgb(226,80,65)",
      "rgb(163,143,132)",
      "rgb(239,239,239)",
      "rgb(255,255,255)",
      "rgb(250,197,28)",
      "rgb(243,121,52)",
      "rgb(209,72,65)",
      "rgb(184,49,47)",
      "rgb(124,112,107)",
      "rgb(209,213,216)",
      "rgb(255, 255, 255, 0)"
    ],
    minHeight: 100,
    attributesWhitelist: [
      {
        all: "style", // Apply to all tags
        span: ""
      }
    ]
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log(formData.body.toString('html'))
  };

  const onChange = e => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  const handleBodyChange = content => {
    setFormData((prevState) => ({
      ...prevState,
      body: content
    }));
  };

  return (
    <div className='create-blog'>
      <div className='dashboard__header'>
        <h1>Create Blog Post</h1>
      </div>
      <div className="dashboard__section">
        <form className='create-blog__form' onSubmit={onSubmit}>
          <input className='create-blog__form-input' type="text" id='title' name="blog_title" placeholder='Title' onChange={onChange} value={title} />
          <input className='create-blog__form-input' type="text" id='imgUrl' name="blog_img" placeholder='Cover Image URL' onChange={onChange} value={imgUrl} />
          <SunEditor className='create-blog__form-body' setOptions={options} onChange={handleBodyChange} />
          <button className='btn' type='submit'>Post</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlog;