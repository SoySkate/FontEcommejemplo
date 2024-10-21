import React from 'react';

const SearchComponent = () => {
    return (
          <div className="Search">
            <div className='border-[0.2rem] flex rounded-xl gap-4 px-2 bg-white'>
              <input className='rounded-xl outline-none' type="text" placeholder="Search items..." />
              <button className="text-white font-bold py-2 px-4 rounded">
                <img src='/lupa.png' alt='imagen lupa'className='h-[1.2rem] w-[1.2rem]'/></button>
            </div>
          </div>
    );
};

export default SearchComponent;
