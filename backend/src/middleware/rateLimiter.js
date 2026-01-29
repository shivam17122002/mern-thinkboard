const ratelimit = require("../config/upstash");

module.exports = async (req, res, next) => {
  try {
    const ip = req.ip || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests",
      });
    }

    next();
  } catch (error) {
    console.error("Rate limiter error:", error);
    next();
  }
};
