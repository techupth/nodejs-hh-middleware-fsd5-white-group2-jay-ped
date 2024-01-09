async function validateData(req, res, next) {
  if (req.method === "POST") {
    if (req.body.title.length > 35) {
      return res.json({ message: "Title must not be over 35 characters" });
    } else if (req.body.description.length > 150) {
      return res.json({
        message: "Description must not exceed 150 characters",
      });
    } else if (
      !Array.isArray(req.body.categories) ||
      req.body.categories.length === 0
    ) {
      return res.json({
        message: "Categories must be an array with at least 1 value",
      });
    }
  }

  next();
}

export default validateData;
