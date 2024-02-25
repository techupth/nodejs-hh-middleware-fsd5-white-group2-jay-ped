function validateAssignmentData(req, res, next) {
  const body = req.body;

  //   - ถ้า Title มีความยาวเกิน 35 ตัวอักษร ให้ Return ตัว Response ดังนี้
  if (body.title.length > 35) {
    return res
      .status(400)
      .json({ message: "Title must not be over 35 characters" });
  }

  //   - ถ้า Description มีความยาวเกิน 150 ตัวอักษร ให้ Return ตัว Response ดังนี้
  if (body.title.length > 150) {
    return res
      .status(400)
      .json({ message: "Description must not exceed 150 characters" });
  }

  //   - ถ้า Categories ไม่ใช่ Array หรือเป็น Array ที่เป็น Empty Array ให้ Return ตัว Response ดังนี้
  if (!Array.isArray(body.categories) || body.categories.length < 1) {
    return res
      .status(400)
      .json({ message: "Categories must be an array with at least 1 value" });
  }

  next();
}

export default validateAssignmentData;
