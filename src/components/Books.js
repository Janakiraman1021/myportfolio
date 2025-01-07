import React from 'react';
import { Book, ShoppingCart, Award } from 'lucide-react';

const mainBook = {
  title: 'என் இதயத்தின் ஓசை',
  titleEnglish: 'En Idhayathin Osai',
  author: 'Janakiraman',
  publicationYear: '2023',
  publisher: 'JEC Publication',
  isbn: '9789361759345',
  synopsis: 'A heartfelt collection of Tamil poetry exploring themes of love, technology, and modern life. The verses blend traditional Tamil poetic forms with contemporary perspectives on blockchain and digital innovation.',
  recognition: 'Featured in Tamil Literary Review 2023',
  image: '/assets/books/sound-of-my-heart.jpeg', // Replace with actual image URL
  links: {
    amazon: 'https://www.amazon.in/dp/9361759345',
    googlePlay: 'https://play.google.com/store/books/details?id=CGkTEQAAQBAJ',
    flipkart: 'https://www.flipkart.com/product/p/itme?pid=9789361759345',
    publisher: 'https://jecpublication.com/index.php/product/en-itayattin-ocai/',
  },
};

const coAuthoredBooks = [
  {
    title: 'மழலையும் நானும்',
    image: '/assets/books/mazhalai.jpg', // Replace with actual image URL
    links: {
      amazon: 'https://amzn.to/3xPxoDA',
      flipkart: 'https://fktr.in/DRn7oPD',
    },
  },
  {
    title: 'விரும்பிய வரிகள்',
    image: '/assets/books/virumbiya.jpg', // Replace with actual image URL
    links: {
      amazon: 'https://amzn.to/3TUTY5C',
      flipkart: 'https://fktr.in/zotvX59',
    },
  },
  {
    title: 'வினோத உலகம்',
    image: '/assets/books/vinotha.jpg', // Replace with actual image URL
    links: {
      amazon: 'https://amzn.to/3ZRNPuL',
      flipkart: 'https://fktr.in/zb5RsJ8',
    },
  },
  {
    title: 'எனது அபிமானி',
    image: '/assets/books/abimani.jpg', // Replace with actual image URL
    links: {
      amazon: 'https://www.amazon.in/dp/9361752154',
      googlePlay: 'https://play.google.com/store/books/details?id=vTYZEQAAQBAJ',
      website: 'https://jecpublication.com/index.php/product/enadhu-abimaani/',
    },
  },
  {
    title: 'என் அழகிய தேவதை',
    image: '/assets/books/mmy-beautiful-angel.jpg', // Replace with actual image URL
    links: {
      amazon: 'https://www.amazon.in/dp/9361751379',
      googlePlay: 'https://play.google.com/store/books/details?id=LTYYEQAAQBAJ',
      website: 'https://jecpublication.com/index.php/product/en-azhagiya-dhevadhai/',
    },
  },
  {
    title: 'முகமரிய காதல்',
    image: '/assets/books/faceless-love.jpg', // Replace with actual image URL
    links: {
      amazon: 'https://amzn.to/3LEopsn',
      flipkart: 'https://fktr.in/91xf1kk',
    },
  },
];

export default function Books() {
  return (
    <section id="books" className="py-20 bg-gradient-to-br from-primary-light/5 to-secondary-light/5 dark:from-primary-dark/5 dark:to-secondary-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Published Books
        </h2>

        {/* Main Book */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <img
                    src={mainBook.image}
                    alt={mainBook.title}
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>

                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {mainBook.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    ({mainBook.titleEnglish})
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Author</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{mainBook.author}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Publisher</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {mainBook.publisher}, {mainBook.publicationYear}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">ISBN-13</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{mainBook.isbn}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-gray-600 dark:text-gray-300">{mainBook.synopsis}</p>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <Award className="w-5 h-5" />
                      <p className="font-medium">{mainBook.recognition}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {Object.entries(mainBook.links).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                      >
                        <ShoppingCart className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                        <span className="capitalize text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {platform}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Authored Books */}
        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Co-Authored Books
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coAuthoredBooks.map((book) => (
            <div key={book.title} className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform">
              <div className="p-6">
                <img
                  src={book.image}
                  alt={book.title}
                  className="rounded-lg shadow-lg mb-6 w-full object-cover"
                />
                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">
                  {book.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {Object.entries(book.links).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <ShoppingCart className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                      <span className="capitalize text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {platform}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
