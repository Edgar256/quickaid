import prisma from "../../../../lib/prisma";
import { getTokenFromHeaders } from "../../../../utils/getTokenFromHeaders";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      // Extract token from headers
      const decodedToken = getTokenFromHeaders(req.headers);
      if (!decodedToken) {
        return res.status(403).json({ error: "Forbidden: Token has expired" });
      }

      // Check if the role is ADMIN
      const { role } = decodedToken;
      if (role !== "ADMIN") {
        return res
          .status(403)
          .json({ error: "Forbidden: User is not authorized" });
      }

      // Validate request body
      const { title, content, categoryId } = req.body;
      if (!title || !content || !categoryId) {
        return res.status(400).json({ error: "Incomplete data provided" });
      }

      // Create the blog
      const createdBlog = await prisma.blog.create({
        data: {
          title,
          content,
          authorId: decodedToken.id,
          categoryId,
        },
      });

      // Return the created blog
      return res.status(201).json({ message: createdBlog, error: null });
    } else {
      return res.status(405).json({
        message: "Method Not Allowed",
        error: "Only POST method is allowed for this endpoint",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
