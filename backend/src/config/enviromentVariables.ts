import { config } from 'dotenv';
config();

export const serverPort: number = parseInt(process.env.SERVER_PORT);
