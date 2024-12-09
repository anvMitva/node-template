import Test from '../models/test.models.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const createTest = asyncHandler(async (req, res) => {
  const test = await Test.create(req.body);
  if (!test) {
    throw new ApiError(500, "Failed to create test");
  }
  res.status(201).json({
    success: true,
    data: test,
    message: "Test created successfully"
  });
});

export const getAllTests = asyncHandler(async (req, res) => {
  const tests = await Test.findAll({
    order: [['createdAt', 'DESC']]
  });
  res.status(200).json({
    success: true,
    data: tests,
    message: "Tests fetched successfully"
  });
});

export const getTestById = asyncHandler(async (req, res) => {
  const test = await Test.findByPk(req.params.id);
  if (!test) {
    throw new ApiError(404, "Test not found");
  }
  res.status(200).json({
    success: true,
    data: test,
    message: "Test fetched successfully"
  });
});

export const updateTest = asyncHandler(async (req, res) => {
  const test = await Test.findByPk(req.params.id);
  if (!test) {
    throw new ApiError(404, "Test not found");
  }
  const updatedTest = await test.update(req.body);
  res.status(200).json({
    success: true,
    data: updatedTest,
    message: "Test updated successfully"
  });
});

export const deleteTest = asyncHandler(async (req, res) => {
  const test = await Test.findByPk(req.params.id);
  if (!test) {
    throw new ApiError(404, "Test not found");
  }
  await test.destroy();
  res.status(200).json({
    success: true,
    message: "Test deleted successfully"
  });
});
