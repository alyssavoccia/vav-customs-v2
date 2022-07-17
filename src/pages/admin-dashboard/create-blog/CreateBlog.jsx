import { useState } from 'react';
import RichTextEditor from 'react-rte';
import './createBlog.scss';

function CreateBlog() {
  const [formData, setFormData] = useState({
    title: '',
    imgUrl: '',
    body: RichTextEditor.createEmptyValue()
  });

  const { title, imgUrl, body } = formData;

  const onSubmit = e => {

  };

  const onChange = e => {

  };

  const handleBodyChange = value => {
    setFormData(prevState => ({...prevState, body: value}));
  }

  return (
    <div className='create-blog'>
      <div className='dashboard__header'>
        <h1>Create Blog Post</h1>
      </div>
      <div className="dashboard__section">
        <form className='create-blog__form' onSubmit={onSubmit}>
          <input className='create-blog__form-input' type="text" id='title' name="blog_title" placeholder='Title' onChange={onChange} value={title} />
          <input className='create-blog__form-input' type="text" id='img' name="blog_img" placeholder='Cover Image URL' onChange={onChange} value={imgUrl} />
          <RichTextEditor className='create-blog__form-body' value={body} onChange={handleBodyChange} rootStyle={{ fontFamily: 'Roboto' }} />
          <button className='btn' type='submit'>Post</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlog;