import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';


export const BookFeature = () => {
  return (
    <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-amber-400 mb-4">Released Book</h3>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-zinc-200 mb-2">
              என் இதயத்தின் ஓசை
              <span className="text-zinc-400 ml-2 font-normal">
                (En Ithaythin Oasi)
              </span>
            </h4>
            <p className="text-zinc-400 mb-6">
              I have authored a book titled 'En Ithaythin Oasi', now available on
              multiple platforms.
            </p>
            <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.amazon.in/dp/9361759345?ref=myi_title_dp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Amazon
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              
                <a
                  href="https://play.google.com/store/books/details?id=CGkTEQAAQBAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Play Books
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
