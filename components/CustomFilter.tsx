'use client';

import {CustomFilterProps} from '@/types';
import {Fragment, useState} from 'react';
import { Listbox, Transition } from '@headlessui/react'

const CustomFilter = ({title, options}: CustomFilterProps) => {

  return (
    <div className='w-fit'>
      Custom filter
    </div>
  );
};

export default CustomFilter;
