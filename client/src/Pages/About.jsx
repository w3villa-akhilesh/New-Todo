import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-2xl mt-20">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        About Todo App
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to our Todo Web App! This app helps you manage your daily tasks
        and stay organized. You can easily create, update, and delete tasks to
        keep track of your to-dos.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features:</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
        <li className="flex gap-3 items-center">
          <img
            className="h-5 w-5"
            src="https://cdn-icons-png.freepik.com/256/8216/8216858.png?ga=GA1.1.1216306819.1739192753&semt=ais_hybrid"
            alt=""
          />
          Simple and intuitive task management
        </li>
        <li className="flex gap-3 items-center">
          <img
            className="h-5 w-5"
            src="https://cdn-icons-png.freepik.com/256/8216/8216858.png?ga=GA1.1.1216306819.1739192753&semt=ais_hybrid"
            alt=""
          />
          Track completed and pending tasks
        </li>
        <li className="flex gap-3 items-center">
          <img
            className="h-5 w-5"
            src="https://cdn-icons-png.freepik.com/256/8216/8216858.png?ga=GA1.1.1216306819.1739192753&semt=ais_hybrid"
            alt=""
          />
          Edit and delete tasks with ease
        </li>
        <li className="flex gap-3 items-center">
          <img
            className="h-5 w-5"
            src="https://cdn-icons-png.freepik.com/256/8216/8216858.png?ga=GA1.1.1216306819.1739192753&semt=ais_hybrid"
            alt=""
          />
          Lightweight and fast UI
        </li>
      </ul>

      <p className="text-center text-gray-600 text-sm">
        Built with <span className="font-semibold">React.js</span> and{" "}
        <span className="font-semibold">Tailwind CSS</span> for a smooth user
        experience.
      </p>
    </div>
  );
};

export default About;