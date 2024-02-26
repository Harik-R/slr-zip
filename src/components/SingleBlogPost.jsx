// components/SingleBlogPost.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SingleBlogPost = ({ id, title, imageUrl, short_description }) => {
    console.log(id);
    return (
        <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className=''>
                <div className='m-auto'>
                    <Image src={imageUrl} width={1000} height={1000} alt='Blog Image' />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center my-4'>
                <h3>{title}</h3>
                <p className='my-2 text-sm'>{short_description}</p>
            </div>
            <Link href={`/pages/blogs/singleblogpostpage?id=${id}`}>
                <span className='text-sm'>Read More...</span>
            </Link>
        </div>
    );
};

export default SingleBlogPost;
