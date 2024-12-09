import express from 'express';
import { validateRequest } from '../middlewares/validator.middlewares.js';
import { testValidators } from '../validators/test.validators.js';
import { verifyUser } from '../middlewares/auth.middlewares.js';
import { createTest, getAllTests, getTestById, updateTest, deleteTest } from '../services/test.services.js';

const router = express.Router();

// Protected routes with authentication
router.use(verifyUser);

// CRUD routes
router.post('/', validateRequest(testValidators.create), createTest);
router.get('/', getAllTests);
router.get('/:id', getTestById);
router.put('/:id', validateRequest(testValidators.update), updateTest);
router.delete('/:id', deleteTest);

export default router;
