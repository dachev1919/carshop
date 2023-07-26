'use client';

import { ShowMoreProps } from '@/types';
import { CustomButton } from '@/components';
import { updateSearchParams } from '@/utils';

const ShowMore = ({pageNumber, isNext, setLimit}: ShowMoreProps) => {

  const navigationHandler = () => {
    const newLimit = (pageNumber + 1) * 10;const newPathName = updateSearchParams('limit', String(`${newLimit}`));

    setLimit(newLimit);
  }

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='Show More'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={navigationHandler}
        />
      )}
    </div>
  );
};

export default ShowMore;
