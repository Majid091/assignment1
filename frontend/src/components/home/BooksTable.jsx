import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { MdOutlineAddBox } from 'react-icons/md';

const BooksTable = ({ books }) => {
  const [filter, setFilter] = useState('');

  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
    <div className=' h-screen'>
      <div className='flex items-center justify-between p-4 '>
        <h1 className='text-yellow-500 font-bold text-4xl'>Book List</h1>
        <div className='flex gap-x-1'>
        <Link to='/books/create'>
            <MdOutlineAddBox className='text-sky-800 text-5xl ' />
          </Link>
        <input
          type='text'
          placeholder='Filter by title...'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='p-2 border border-yellow-600 rounded-md'
        />
        </div>
      </div>
      <table className='w-full h- border-separate border-spacing-2 '>
        <thead>
          <tr>
            <th className='border border-yellow-600 rounded-md text-yellow-400'>
              ID
            </th>
            <th className='border border-yellow-600 rounded-md text-yellow-400'>
              Title
            </th>
            <th className='border border-yellow-600 rounded-md text-yellow-400 max-md:hidden'>
              Author
            </th>
            <th className='border border-yellow-600 rounded-md text-yellow-400 max-md:hidden'>
              Publish Year
            </th>
            <th className='border border-yellow-600 rounded-md text-yellow-400'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <tr key={book._id} className='h-8'>
              <td className='border border-slate-700 rounded-md text-center'>
                {index + 1}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                {book.title}
              </td>
              <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                {book.author}
              </td>
              <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                {book.publishYear}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800' />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default BooksTable;