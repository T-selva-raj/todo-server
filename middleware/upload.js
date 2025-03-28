const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadToSupabase = async (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    try {
        const username = req.user ? req.user.uid : "guest";
        const fileName = `${username}/${Date.now()}_${req.file.originalname}`;
        const { data, error } = await supabase.storage
            .from(process.env.BUCKET_NAME)
            .upload(fileName, req.file.buffer, { contentType: req.file.mimetype });
        if (error) {
            console.error("Upload Error:", error);
            return res.status(500).json({ message: "Upload failed", error: error.message });
        }
        req.file.supabaseUrl = supabase.storage.from(process.env.BUCKET_NAME).getPublicUrl(fileName).data.publicUrl;
        next();
    } catch (error) {
        return res.status(500).json({ message: "Upload failed", error: error.message });
    }
};

module.exports = { upload, uploadToSupabase };
