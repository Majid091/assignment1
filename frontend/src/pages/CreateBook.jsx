import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import LoadingComp from '../components/LoadingComp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      description,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5174/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Stored successfully.', { variant: 'success' });
        navigate('/home');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error!', { variant: 'error' });
        console.log(error);
      });
  };
  const backgroundImageStyle = {
    background: `url("data:image/jpeg;base64,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")`, // Replace with the actual base64 image data
    backgroundSize: 'cover',
    // backgroundPosition: 'center',
    minHeight: '100vh',
    
  };

  return (
    <div className='p-4' style={backgroundImageStyle}>
        

      <BackButton />
      <h1 className='text-3xl my-4 text-black'>Create Book</h1>
      {loading ? <LoadingComp /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-black'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-black'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-black'>Description</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-black'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBook