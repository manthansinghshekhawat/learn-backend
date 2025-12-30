import { ApiError } from "../utils/api-error";
import { ApiREsponse } from "../utils/api-response";

const healthcheck = (req, res) => {
  try {
    res.status(200).json(new ApiREsponse(200, null, "API is healthy"));
  } catch (error) {
    res.status(500).json(new ApiError(500, null, "Internal Server Error"));
  }
};

export { healthcheck };
