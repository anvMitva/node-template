import jwt from "jsonwebtoken";

export async function verifyUser(req, res, next) {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    // Check if token exists
    if (!token) {
      throw new Error("No token provided");
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Add user data to request
    req.user = decoded;
    
    next();
  } catch (error) {
    if (error.response) {
      return res
        .status(error.response.status)
        .json({
          error_message: error.response.data.message || "Authorization failed",
        });
    } else if (error.request) {
      return res
        .status(500)
        .json({ error_message: "No response from authorization server" });
    } else {
      return res.status(500).json({ error_message: "Internal Server Error" });
    }
  }
}
