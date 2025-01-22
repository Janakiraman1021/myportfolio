import React from 'react';
import { Upload } from 'lucide-react';

export function MainBookForm({ mainBook, handleMainBookChange, renderLinksInputs }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleMainBookChange('coverImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Main Book</h3>
      
      {/* Image Upload Section */}
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

      {/* Existing form fields */}
      <div className="space-y-4">
        {/* ...existing title and other inputs... */}
      </div>
      {renderLinksInputs(mainBook, handleMainBookChange)}
    </div>
  );
}

export function CoAuthoredBooksForm({ 
  coAuthoredBooks, 
  handleCoAuthoredChange, 
  handleAddCoAuthoredBook, 
  handleRemoveCoAuthoredBook,
  renderLinksInputs 
}) {
  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleCoAuthoredChange(index, 'coverImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Co-Authored Books</h3>
      {coAuthoredBooks.map((book, index) => (
        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Book Cover
            </label>
            <div className="flex items-center space-x-4">
              {book.coverImage && (
                <img 
                  src={book.coverImage} 
                  alt="Book cover preview" 
                  className="w-32 h-48 object-cover rounded-lg"
                />
              )}
              <label className="cursor-pointer flex items-center justify-center w-32 h-48 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-light dark:hover:border-primary-dark">
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
          
          {/* Existing form fields */}
          <div className="space-y-4">
            {/* ...existing title and other inputs... */}
          </div>
          {renderLinksInputs(book, (field, value) => handleCoAuthoredChange(index, field, value))}
          
          {/* Remove button */}
          <button
            type="button"
            onClick={() => handleRemoveCoAuthoredBook(index)}
            className="mt-4 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" />
            Remove
          </button>
        </div>
      ))}
      
      {/* Add button */}
      <button
        type="button"
        onClick={handleAddCoAuthoredBook}
        className="flex items-center gap-2 text-primary-light dark:text-primary-dark hover:text-primary-light/80 dark:hover:text-primary-dark/80"
      >
        <Plus className="w-4 h-4" />
        Add Co-Authored Book
      </button>
    </div>
  );
}