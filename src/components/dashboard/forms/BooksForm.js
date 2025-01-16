import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function BooksForm() {
  const [books, setBooks] = useState([
    {
      title: '',
      titleEnglish: '',
      isbn: '',
      publicationYear: '',
      publisher: '',
      links: {}
    }
  ]);

  const handleAdd = () => {
    setBooks([...books, {
      title: '',
      titleEnglish: '',
      isbn: '',
      publicationYear: '',
      publisher: '',
      links: {}
    }]);
  };

  const handleRemove = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newBooks = [...books];
    if (field.startsWith('links.')) {
      const linkType = field.split('.')[1];
      newBooks[index].links = {
        ...newBooks[index].links,
        [linkType]: value
      };
    } else {
      newBooks[index][field] = value;
    }
    setBooks(newBooks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(books);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {books.map((book, index) => (
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
                  onChange={(e) => handleChange(index, 'title', e.target.value)}
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
                  onChange={(e) => handleChange(index, 'titleEnglish', e.target.value)}
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
                  value={book.isbn}
                  onChange={(e) => handleChange(index, 'isbn', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Publication Year
                </label>
                <input
                  type="text"
                  value={book.publicationYear}
                  onChange={(e) => handleChange(index, 'publicationYear', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Publisher
                </label>
                <input
                  type="text"
                  value={book.publisher}
                  onChange={(e) => handleChange(index, 'publisher', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900 dark:text-white">Purchase Links</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Amazon URL
                  </label>
                  <input
                    type="url"
                    value={book.links.amazon || ''}
                    onChange={(e) => handleChange(index, 'links.amazon', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Google Play URL
                  </label>
                  <input
                    type="url"
                    value={book.links.googlePlay || ''}
                    onChange={(e) => handleChange(index, 'links.googlePlay', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Flipkart URL
                  </label>
                  <input
                    type="url"
                    value={book.links.flipkart || ''}
                    onChange={(e) => handleChange(index, 'links.flipkart', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Publisher URL
                  </label>
                  <input
                    type="url"
                    value={book.links.publisher || ''}
                    onChange={(e) => handleChange(index, 'links.publisher', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>
          {books.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="mt-4 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" />
              Remove
            </button>
          )}
        </div>
      ))}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleAdd}
          className="flex items-center gap-2 text-primary-light dark:text-primary-dark hover:text-primary-light/80 dark:hover:text-primary-dark/80"
        >
          <Plus className="w-4 h-4" />
          Add Book
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
