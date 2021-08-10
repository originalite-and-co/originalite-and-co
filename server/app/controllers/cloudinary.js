const {v2} = require("cloudinary");
require("./../config/cloudinary").config();

/**
 *
 * @param  {String} file - a file that you want to upload
 * @param {Object} [options] - for more details:
 * @returns {Promise<UploadApiResponse>}
 */
exports.uploadFile = async (file, options) => {
    try {
        return v2.uploader.upload(file, options)
    } catch (error) {
        console.error(`An error has occurred while uploading a file. Error: ${error}`);
    }
};