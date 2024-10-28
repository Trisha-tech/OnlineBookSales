import React, { useEffect } from 'react';
import Preloader from '../Components/Preloader';

const License = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Preloader />
      <div className=' w-full max-w-screen-lg mx-auto text-black dark:text-gray-200 my-12'>
        <h1 className='text-center text-4xl font-bold my-6'>MIT License</h1>
        <p className='my-4'>Copyright (c) 2024 Trisha Sahu</p>
        <p className='my-4'>
          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the "Software"), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:
        </p>
        <p className='my-4'>
          The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.
        </p>
        <p className='my-4'>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.
        </p>
      </div>
    </>
  );
};

// const LicenseWrapper = styled.div`
//   padding: 20px;
//   max-width: 800px;
//   margin: 0 auto;
//   color: #333;
//   line-height: 1.6;
//   margin-top: 20px;

//   h1 {
//     font-size: 2.5rem;
//     margin-bottom: 20px;
//     font-weight: bold;
//     color: #002147;
//   }

//   p {
//     margin: 10px 0;
//   }
// `;

export default License;
