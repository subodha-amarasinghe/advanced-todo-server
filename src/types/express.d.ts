declare global {
    namespace Express {
      interface Request {
        user?: { _id: string }; // Define the structure of the user object
      }
    }
  }