import React from "react";

const PROJECTS = [
	{
		name: "Finance Tracker",
		desc: "A simple finance tracker made using NextJS includes a very simple login system",
		tech: "React, NodeJS, NextJS, Typescript, PostgreSQL, TailwindCSS",
		link: "https://fin-track-xi.vercel.app/",
	},
	{
		name: "HiguVT",
		desc: "A website made for a VTuber showcasing their personality and directing the audience to other sites",
		tech: "React, Typescript, TailwindCSS",
		link: "https://fin-track-xi.vercel.app/",
	},
	{
		name: "Jasmine Clarke",
		desc: "A website made for a singer giving the viewer a preview of their works",
		tech: "React, Typescript, TailwindCSS",
		link: "https://fin-track-xi.vercel.app/",
	},
];

const WebProjects = () => {
	return (
		<div className="flex flex-col items-center justify-center my-8">
			<h3 className="text-3xl">Web Projects</h3>
			<div className="flex flex-col md:flex-row mt-4">
				{PROJECTS.map((project, index) => (
					<div
						key={index}
						className="flex bg-black flex-col items-center justify-center gap-4 max-w-[350px] border-2 border-white p-4 text-center"
					>
						<h5 className="text-lg text-white font-bold">
							{project.name}
						</h5>
						<p>{project.desc}</p>
						<p className="font-bold">{project.tech}</p>
						<a
							href={project.link}
							className="p-2 rounded-xl border-2 border-white hover:text-black hover:-translate-y-2 hover:bg-white transition duration-500"
						>
							<svg
								className="w-6 h-6"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
								/>
							</svg>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default WebProjects;
