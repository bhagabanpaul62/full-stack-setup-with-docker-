import express from 'express';
import helmet from 'helmet'
import cors from 'cors'
import { errorHandler } from './middleware/error/errorHandler.js';
import { AppError } from './utils/appError.js';




export const app = express();



// 1. Security
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true   // lowercase 'c', with 's' at end
}));

// 2. Body parsers
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

// 3. Routes
// app.use('/api/v1/companies', companyRoutes);
// app.use('/api/v1/auth', authRoutes);

// 4. 404 handler (before error handler)
app.use((req, res , next) => {
  next(new AppError(res, `Route ${req.path} not found`, 404));
});

app.use(errorHandler);