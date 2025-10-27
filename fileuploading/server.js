// server.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();

// ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // preserve extension and give unique name
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// file filter (example: accept images and pdf only)
function fileFilter(req, file, cb) {
  const allowed = /jpeg|jpg|png|gif|pdf/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  const mime = allowed.test(file.mimetype);
  if (ext && mime) cb(null, true);
  else cb(new Error("Only images and PDF files are allowed."));
}

// Initialize upload middleware
const upload = multer({
  storage,
  limits: {fileSize: 5 * 1024 * 1024}, // 5MB
  fileFilter,
});

// Serve uploaded files statically
app.use("/uploads", express.static(uploadDir));

// endpoint to upload single file (field name = "myFile")
app.post("/upload", upload.single("myFile"), (req, res) => {
  if (!req.file) return res.status(400).json({error: "No file uploaded."});
  res.json({
    message: "File uploaded successfully",
    filename: req.file.filename,
    url: `/uploads/${req.file.filename}`,
    size: req.file.size,
  });
});

// Global error handler for multer errors
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({error: err.message});
  } else if (err) {
    return res.status(400).json({error: err.message});
  }
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
