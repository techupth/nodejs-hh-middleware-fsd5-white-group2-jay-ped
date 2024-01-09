import fs from "fs/promises";

async function logging(req, res, next) {
  try {
    const text = `\nIP: ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}`;
    await fs.appendFile("logging.txt", text);
  } catch {
    await fs.appendFile(
      "logging.txt",
      `\nLoggingError onIP: ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}`
    );
  }
  next();
}

export default logging;
