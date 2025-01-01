import React from 'react'

const ProductImageUpload = ({imageFile,
    setImageFile, uploadedImageUrl,
    setUploadedImageUrl,}) => {
  return (
    <div className='w-full max-w-md mx-auto'>
        <label className='text-lg font-semibold mb-5 block'>Upload Image</label>
        <div>
            <input type="file" id='image-upload' className='hidden' />
        </div>
    </div>
  )
}

export default ProductImageUpload;