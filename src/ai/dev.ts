import { config } from 'dotenv';
config();

import '@/ai/flows/moderate-user-reviews.ts';
import '@/ai/flows/summarize-user-reviews.ts';
import '@/ai/flows/find-attractions.ts';
