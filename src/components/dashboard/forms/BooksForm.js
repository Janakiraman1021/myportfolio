import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function BooksForm() {
  const [mainBook, setMainBook] = useState({
    title: '',
    titleEnglish: '',
    isbn: '',
    publicationYear: '',
    publisher: '',
    links: { amazon: '', googlePlay: '', flipkart: '', publisher: '' },
  });

  const [coAuthoredBooks, setCoAuthoredBooks] = useState([
    {
      title: '',
      titleEnglish: '',
      isbn: '',
      publicationYear: '',
      publisher: '',
      links: { amazon: '', googlePlay: '', flipkart: '', publisher: '' },
    },
  ]);

  const handleMainBookChange = (field, value) => {
    if (field.startsWith('links.')) {
      const linkType = field.split('.')[1];
      setMainBook((prev) => ({
        ...prev,
        links: {
          ...prev.links,
          [linkType]: value,
        },
      }));
    } else {
      setMainBook((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleAddCoAuthoredBook = () => {
    setCoAuthoredBooks([
      ...coAuthoredBooks,
      {
        title: '',
        titleEnglish: '',
        isbn: '',
        publicationYear: '',
        publisher: '',
        links: { amazon: '', googlePlay: '', flipkart: '', publisher: '' },
      },
    ]);
  };

  const handleRemoveCoAuthoredBook = (index) => {
    setCoAuthoredBooks(coAuthoredBooks.filter((_, i) => i !== index));
  };

  const handleCoAuthoredChange = (index, field, value) => {
    const updatedBooks = [...coAuthoredBooks];
    if (field.startsWith('links.')) {
      const linkType = field.split('.')[1];
      updatedBooks[index].links = {
        ...updatedBooks[index].links,
        [linkType]: value,
      };
    } else {
      updatedBooks[index][field] = value;
    }
    setCoAuthoredBooks(updatedBooks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Main Book:', mainBook);
    console.log('Co-Authored Books:', coAuthoredBooks);
  };

  const renderLinksInputs = (book, onChange) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {['amazon', 'googlePlay', 'flipkart', 'publisher'].map((platform) => (
        <div key={platform}>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {platform.charAt(0).toUpperCase() + platform.slice(1)} URL
          </label>
          <input
            type="url"
            value={book.links[platform] || ''}
            onChange={(e) => onChange(`links.${platform}`, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
      ))}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Main Book Section */}
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Main Book</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Title (Tamil)
              </label>
              <input
                type="text"
                value={mainBook.title}
                onChange={(e) => handleMainBookChange('title', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Title (English)
              </label>
              <input
                type="text"
                value={mainBook.titleEnglish}
                onChange={(e) => handleMainBookChange('titleEnglish', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                ISBN
              </label>
              <input
                type="text"
                value={mainBook.isbn}
                onChange={(e) => handleMainBookChange('isbn', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Publication Year
              </label>
              <input
                type="text"
                value={mainBook.publicationYear}
                onChange={(e) => handleMainBookChange('publicationYear', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Publisher
              </label>
              <input
                type="text"
                value={mainBook.publisher}
                onChange={(e) => handleMainBookChange('publisher', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          {renderLinksInputs(mainBook, handleMainBookChange)}
        </div>
      </div>

      {/* Co-Authored Books Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Co-Authored Books</h3>
        {coAuthoredBooks.map((book, index) => (
          <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title (Tamil)
                  </label>
                  <input
                    type="text"
                    value={book.title}
                    onChange={(e) => handleCoAuthoredChange(index, 'title', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title (English)
                  </label>
                  <input
                    type="text"
                    value={book.titleEnglish}
                    onChange={(e) => handleCoAuthoredChange(index, 'titleEnglish', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              {renderLinksInputs(book, (field, value) =>
                handleCoAuthoredChange(index, field, value)
              )}
            </div>
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
        <button
          type="button"
          onClick={handleAddCoAuthoredBook}
          className="flex items-center gap-2 text-primary-light dark:text-primary-dark hover:text-primary-light/80 dark:hover:text-primary-dark/80"
        >
          <Plus className="w-4 h-4" />
          Add Co-Authored Book
        </button>
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        Save Changes
      </button>
    </form>
  );
}
