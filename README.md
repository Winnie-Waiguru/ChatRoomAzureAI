# ChatRoomAzureAI

## Overview

**ChatRoomAzureAI** is a real-time chat application extended from an open-source base project.  
While the original project had chat functionality working, I **implemented my own API integration** to power AI responses.  
This required me to obtain my own API key and wire up the backend/frontend to make the app functional.

This repo reflects **my customized version**, which includes UI changes, API integration, and deployment.

## My Contributions

- **UI/UX Redesign** with **Tailwind CSS**.
- **AI Integration**:
- Obtained my own **Google AI Studio API key**.
- Configured `.env.production` for Vite builds in the frontend.
- Deployment:
  - Backend → Render: [https://chatroomazureai.onrender.com](https://chatroomazureai.onrender.com)
  - Frontend → GitHub Pages: [https://winnie-waiguru.github.io/ChatRoomAzureAI](https://winnie-waiguru.github.io/ChatRoomAzureAI)

## Original Features (from base project)

- Role-Based Access: `User`, `Agent`, `Supervisor`.
- Real-Time Messaging with **Socket.io**.
- Private Messaging between Agents & Supervisors.
- Multi-Language Support for users.
- Mobile-Responsive Layout.

## Screenshots

### Current Version (Tailwind + Gemini AI)

![screenshot](./public/screenshot.png)

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Winnie-Waiguru/ChatRoomAzureAI.git
   cd ChatRoomAzureAI
   cd <frontweb>
   cd <server>
   ```

2. Install dependencies:

   ```bash
   for server npm install
   for frontweb npm install
   ```

3. Set up the environment variables:

   ```plaintext
   for server GEMINI_API_KEY=your_google_api_key_here
   for frontweb VITE_API_BASE_URL=https://chatroomazureai.onrender.com
   ```

4. Start the development server and frontend:

   ```bash
   npm start and npm run dev
   ```

## Technologies Used

- **React**: For building the user interface.
- **Socket.io**: For real-time communication.
- **Tailwind CSS**: For styling components.
- **JavaScript/TypeScript**: For application logic.
