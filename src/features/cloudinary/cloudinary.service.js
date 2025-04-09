import expressAsyncHandler from 'express-async-handler';

export const deleteImageByUrl = expressAsyncHandler(async (imageUrl) => {
  const urlsPart = imageUrl.split('/');
  const fileWithExt = urlsPart[urlsPart.length - 1];
  const [publicId] = fileWithExt.split('.');

  const folder = urlsPart[urlsPart.length-2]
  const fullPublicId = `${folder}/${publicId}`;

  return await cloudinary.uploader.destroy(fullPublicId);
});
