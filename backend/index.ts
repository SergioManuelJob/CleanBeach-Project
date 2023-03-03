import express from 'express';
import { userRouter } from './src/routes/user.routes';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
app.use(express.json())

// Initialize routes
userRouter(app);

const PORT = process.env.PORT || 27017

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export default app;