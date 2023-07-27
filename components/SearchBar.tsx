'use client';

import { SearchManufacturer } from './';
import React, { useState } from 'react';
import Image from 'next/image';
import { SearchBarProps } from '@/types';
import modelIconImage from '../public/model-icon.png';
import magnifyingGlassImage from '../public/magnifying-glass.svg';

const SearchBar = ({setManufacturer, setModel}: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState('');
  const [searchModel, setSearchModel] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar')
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  }

  return (
    <form className='searchbar' onSubmit={ handleSearch }>
      <div className='searchbar__item'>
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image src={modelIconImage} width={25} height={25} className='absolute w-[20px] h-[20px] ml-4' alt='car model' />
        <input
          type='text'
          name='model'
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder='Tiguan'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={magnifyingGlassImage}
        alt='magnifying glass'
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
  )
}

export default SearchBar;
