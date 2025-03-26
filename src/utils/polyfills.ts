import { v4 as uuidv4 } from 'uuid';

if (!global.crypto) {
  (global as any).crypto = {
    randomUUID: uuidv4,
  };
}
