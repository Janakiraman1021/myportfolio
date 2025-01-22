import React from 'react';
import { Upload, Trash2, Plus } from 'lucide-react';

export const MainBookForm = ({ mainBook, handleMainBookChange, renderLinksInputs }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => handleMainBookChange('coverImage', reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Main Book</h3>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Book Cover
        </label>
        <div className="flex items-center space-x-4">
          {mainBook.coverImage && (
            <img 
              src={mainBook.coverImage} 
              alt="Book cover preview" 
              className="w-32 h-48 object-cover rounded-lg"
            />
          )}
          <label className="cursor-pointer flex items-center justify-center w-32 h-48 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-light dark:hover:border-primary-dark">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="text-center">
              <Upload className="mx-auto w-6 h-6 mb-2" />
              <span className="text-sm">Upload Cover</span>
            </div>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Title (Tamil)"
          value={mainBook.title}
          onChange={(e) => handleMainBookChange('title', e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Title (English)"
          value={mainBook.titleEnglish}
          onChange={(e) => handleMainBookChange('titleEnglish', e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      {renderLinksInputs(mainBook, handleMainBookChange)}
    </div>
  );
};

export const CoAuthoredBooksForm = ({ 
  coAuthoredBooks, 
  handleCoAuthoredChange, 
  handleAddCoAuthoredBook, 
  handleRemoveCoAuthoredBook, 
  renderLinksInputs 
}) => {
  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => handleCoAuthoredChange(index, 'coverImage', reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Co-Authored Books</h3>
      {coAuthoredBooks.map((book, index) => (
        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Book Cover</label>
            <div className="flex items-center space-x-4">
              {book.coverImage && (
                <img 
                  src={book.coverImage} 
                  alt="Book cover preview" 
                  className="w-32 h-48 object-cover rounded-lg"
                />
              )}
              <label className="cursor-pointer flex items-center justify-center w-32 h-48 border-2 border-dashed border-gray-300 rounded-lg">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index, e)}
                  className="hidden"
                />
                <div className="text-center">
                  <Upload className="mx-auto w-6 h-6 mb-2" />
                  <span className="text-sm">Upload Cover</span>
                </div>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Title (Tamil)"
              value={book.title}
              onChange={(e) => handleCoAuthoredChange(index, 'title', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Title (English)"
              value={book.titleEnglish}
              onChange={(e) => handleCoAuthoredChange(index, 'titleEnglish', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          {renderLinksInputs(book, (field, value) => handleCoAuthoredChange(index, field, value))}
          <button
            type="button"
            onClick={() => handleRemoveCoAuthoredBook(index)}
            className="mt-4 text-red-600 flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" />
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddCoAuthoredBook}
        className="flex items-center gap-2 text-primary-light"
      >
        <Plus className="w-4 h-4" />
        Add Co-Authored Book
      </button>
    </div>
  );
};