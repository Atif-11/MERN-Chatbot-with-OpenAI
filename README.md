# ChatGPT Replica - MERN Application

Welcome to the repository of my MERN application, which replicates the functionality of ChatGPT. This project demonstrates secure user authentication, chat functionality with a language model, and efficient data management with MongoDB.

## Features

- **User Authentication**: Secure login and sign-up using JWT tokens.
- **Chat Functionality**: Interact with the GPT-4o-mini language model.
- **Data Persistence**: Chat history saved and retrieved from MongoDB.
- **Chat Management**: Option to clear chat history.
- **Protected Routes**: Ensures security by restricting access to authenticated users only.

## Tech Stack

- **MongoDB**: Database for storing user data and chat history.
- **Express**: Backend framework for handling API requests.
- **React**: Frontend library for building the user interface.
- **Node.js**: Server-side JavaScript runtime.
- **JWT**: JSON Web Tokens for secure authentication.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Atif-11/MERN-Chatbot-wuth-OpenAI.git
   cd chatgpt-replica
   ```

2. Install server dependencies:
   ```bash
   npm install
   ```

3. Install client dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the `src` directory and add the following environment variables:
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Start the React client:
   ```bash
   npm run dev
   ```
 

## Usage

- Visit `http://localhost:5173` to access the application.
- Sign up for a new account or log in with existing credentials.
- Interact with the chatbot on the chat page.
- View and manage your chat history.

## Demo

Check out the [video demo](https://www.linkedin.com/posts/sayyed-muhammad-atif-ali-471a5621a_mern-javascript-nodejs-activity-7221069308976631808-pUFb?utm_source=share&utm_medium=member_desktop) of the application showcasing its functionality.

## Acknowledgements

A huge thanks to [freeCodeCamp](https://www.freecodecamp.org/) for providing an excellent tutorial that served as the foundation for this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Feel free to reach out if you have any questions or feedback:
- LinkedIn: https://www.linkedin.com/in/sayyed-muhammad-atif-ali-471a5621a/
- Email: atif42068@gmail.com

---

Thank you for checking out my project! Your feedback and contributions are welcome.
```
