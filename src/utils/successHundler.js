const sendSuccessResponse = (res, statusCode = 200, data = {}) => {
  res.status(statusCode).json({
    success: true,
    status: statusCode,
    data: data,
  });
};

const sendSuccessfulCreationResponse = (res, data) => {
  sendSuccessResponse(res, 201, data);
};

const sendSuccessfulUpdateResponse = (res) => {
  sendSuccessResponse(res);
};
const sendSuccessfulDeleteResponse = (res) => {
  sendSuccessResponse(res, 204);
};
const sendSuccessfulReadResponse = (res,data) => {
  sendSuccessResponse(res, 200, data);
};

module.exports = {
  sendSuccessResponse,
  sendSuccessfulCreationResponse,
  sendSuccessfulReadResponse,
  sendSuccessfulDeleteResponse,
  sendSuccessfulUpdateResponse
};
