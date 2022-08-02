import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

import express, { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

import logger from 'jet-logger';
import invoiceRouter from '@routes/invoice-router'


// Constants
const app = express();

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

// Add api router
app.use('/invoices', invoiceRouter);

// Error handling
app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
    logger.err(err, true);
    const status = StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(status).json({
        error: err.message,
    });
});

// Export here and start in a diff file (for testing).
export default app;
