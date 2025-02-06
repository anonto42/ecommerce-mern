import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';

const uploadOnCloudinary = async (files) => {
    try {
        if (!files || !Array.isArray(files) || files.length === 0) {
            return console.log("No files provided for upload");
        }

        // Upload each file and store the responses
        const uploadPromises = files.map(async (file) => {
            try {
                const response = await cloudinary.uploader.upload(file, {
                    resource_type: "auto"
                });

                // Delete the file after successful upload
                fs.unlinkSync(file);

                return response.secure_url; // Return the uploaded file's URL
            } catch (error) {
                console.error("Error uploading file:", error);
                fs.unlinkSync(file); // Delete the file even if upload fails
                return null; // Return null for failed uploads
            }
        });

        // Wait for all uploads to complete
        const uploadedUrls = await Promise.all(uploadPromises);

        // Filter out null values (failed uploads)
        return uploadedUrls.filter(url => url !== null);

    } catch (error) {
        console.error("Unexpected error:", error);
        return [];
    }
};

export { uploadOnCloudinary };