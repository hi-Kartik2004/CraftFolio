"use client";

import { useState } from "react";

const ManualEditPage = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    NavName: "",
    NavSubtitle: "",
    image: "",
    AboutImageLeft: "",
    AboutImageCenter: "",
    AboutImageRight: "",
    linkedinUrl: "",
    resumeLink: "",
    githubId: "",
    email: "",
    WhatsAppLink: "",
    HeroGradient: "",
    HeroTitle: "",
    HeroSubtitle: "",
    AboutTitle: "",
    AboutTitleGradient: "",
    AboutMockCode: "",
    AboutBadge: "",
    AboutDescription: "",
    AboutMainDescription: "",
    AboutOtherDescription: "",
    ProjectTitle: "",
    ProjectTitleGradient: "",
    ProjectDescription: "",
    ProjectBadge: "",
    SkillsBadge: "",
    FooterDescription: "",
    FooterBadge: "",
    FootTitle: "",
    FooterSliderTitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Generated JSON:", JSON.stringify(formData, null, 2));
    alert("JSON generated! Check the console for details.");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        I'm <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">editing</span> my portfolio
      </h1>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label
              htmlFor={key}
              className="text-lg font-semibold text-gray-400 mb-2"
            >
              {key}
            </label>
            <input
              type="text"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              placeholder={`Enter ${key}`}
              className="w-full px-4 py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-black py-4 rounded text-lg font-bold hover:opacity-90"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ManualEditPage;

