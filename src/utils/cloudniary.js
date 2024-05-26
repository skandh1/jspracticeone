import { v2 as cloudinary } from "cloudinary"
import { log } from "console";
import fs from "fs"



cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_APIKEY_SECRET,
});

const uploadOncloudinary = async (localfilepath) => {
    try {
        if (!localfilepath) return null 
        // upload the file of cloud 
        const response = await cloudinary.uploader.upload(localfilepath, {
            resource_type: "auto",
        })
        console.log("file uploaded successfully: ", response.url);
        return response 
    } catch (error) {
        fs.unlinkSync(localfilepath) // remove the locally saved temparay file as the upload faile
        return null;
    }

}

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    { public_id: "olympic_flag" },
    function (error, result) { console.log(result); });