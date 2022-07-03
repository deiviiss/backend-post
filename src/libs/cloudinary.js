const { v2 } = require('cloudinary');
//enviroment
const { config } = require('./../config');

v2.config({
  cloud_name: config.nameCloudinary,
  api_key: config.apiKeyCloudinary,
  api_secret: config.apiSecretCloudinary
});

const upLoadImage = async filepath => {
  return await v2.uploader.upload(filepath, {
    folder: 'posts'
  })
}

const deleteImage = async id => {
  return await v2.uploader.destroy(id);
}

module.exports = { upLoadImage, deleteImage };