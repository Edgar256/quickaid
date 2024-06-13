import prisma from "../../../../lib/prisma";
import cloudinary from "cloudinary";
import formidable from "formidable";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (req) => {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export default async function handler(req, res) {
    console.log({req:req.files})
  try {
    if (req.method === "POST") {
      try {
        const { fields, files } = await parseForm(req);

        console.log({ fields, files })

        const { name, phone, medicalHistory } = fields;
        let photo = null;

        if (files.file) {
          const filePath = files.file.filepath;
          try {
            const result = await cloudinary.v2.uploader.upload(filePath, {
              folder: "quickaid",
            });
            photo = result.secure_url;
            fs.unlinkSync(filePath);
          } catch (error) {
            return res
              .status(500)
              .json({ error: "Error uploading to Cloudinary" });
          }
        }

        try {
          const user = await prisma.user.update({
            where: { id: fields.id },
            data: {
              name,
              phone,
              medicalHistory,
              photo: photo ? photo : undefined,
            },
          });

          return res
            .status(200)
            .json({ message: "Profile updated successfully", user });
        } catch (error) {
          return res.status(500).json({ error: "Error updating profile" });
        }
      } catch (error) {
        return res
          .status(500)
          .json({ error: "An error occurred while processing the form" });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.log({ error });
  }
}
