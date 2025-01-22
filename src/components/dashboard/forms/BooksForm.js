import React, { useState } from 'react';
import { MainBookForm, CoAuthoredBooksForm } from './BookFormComponents';

export default function BooksForm() {
  const [mainBook, setMainBook] = useState({
    title: '',
    titleEnglish: '',
    isbn: '',
    publicationYear: '',
    publisher: '',
    coverImage: null,
    links: { amazon: '', googlePlay: '', flipkart: '', publisher: '' },
  });

  const [coAuthoredBooks, setCoAuthoredBooks] = useState([{
    title: '',
    titleEnglish: '',
    isbn: '',
    publicationYear: '',
    publisher: '',
    coverImage: null,
    links: { amazon: '', googlePlay: '', flipkart: '', publisher: '' },
  }]);

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
        coverImage: null,
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
      <MainBookForm 
        mainBook={mainBook}
        handleMainBookChange={handleMainBookChange}
        renderLinksInputs={renderLinksInputs}
      />
      
      <CoAuthoredBooksForm 
        coAuthoredBooks={coAuthoredBooks}
        handleCoAuthoredChange={handleCoAuthoredChange}
        handleAddCoAuthoredBook={handleAddCoAuthoredBook}
        handleRemoveCoAuthoredBook={handleRemoveCoAuthoredBook}
        renderLinksInputs={renderLinksInputs}
      />

      <button
        type="submit"
        className="px-6 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        Save Changes
      </button>
    </form>
  );
}
