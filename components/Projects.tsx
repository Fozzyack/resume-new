import React from "react";

const PROJECTS = [
	{
		name: "Finance Tracker",
		desc: "A simple finance tracker made using NextJS includes a very simple login system",
		tech: "React, NodeJS, NextJS, Typescript, PostgreSQL, TailwindCSS",
		link: "",
		github: "https://github.com/Fozzyack/financetrackersimple",
	},
	{
		name: "HiguVT",
		desc: "A website made for a VTuber showcasing their personality and directing the audience to other sites",
		tech: "React, Typescript, TailwindCSS",
		link: "https://higuvt.starlightvoyager.dev",
		github: "https://github.com/Fozzyack/higu-vt",
	},
	{
		name: "Jasmine Clarke",
		desc: "A website made for a singer giving the viewer a preview of their works",
		tech: "React, Typescript, TailwindCSS",
		link: "https://jasmine.starlightvoyager.dev",
		github: "https://github.com/Fozzyack/Jasmine-clarke",
	},
];

const Projects = () => {
	return (
		<div className="flex flex-col items-center justify-center my-8">
			<h3 className="text-4xl">Projects</h3>
			<p className="italic">( or lack thereof )</p>
			<h3 className="text-3xl">Web Projects</h3>
			<div className="flex flex-col md:flex-row mt-4">
				{PROJECTS.map((project, index) => (
					<div
						key={index}
						className="flex bg-black flex-col items-center justify-center gap-4 max-w-[350px] border-2 border-white p-4 text-center hover:bg-white hover:text-black hover:-translate-y-2 transition duration-500 group hover:border-black"
					>
						<h5 className="text-lg font-bold">{project.name}</h5>
						<p>{project.desc}</p>
						<p className="font-bold">{project.tech}</p>
						<div className="flex items-center justify-center gap-3" >
							{project.link ? (
								<a
									href={project.link}
									className="p-2 rounded-xl border-2 border-white hover:text-black hover:-translate-y-2 hover:bg-white transition duration-500 group-hover:border-black hover:shadow-xl"
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
							) : null}
							{project.github ? (
								<a
									href={project.github}
									className="p-2 rounded-xl border-2 border-white hover:text-black hover:-translate-y-2 hover:bg-white transition duration-500 group-hover:border-black hover:shadow-xl"
								>
									<svg
										className="w-6 h-6 text-gray-800 dark:text-white"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											fill-rule="evenodd"
											d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
											clip-rule="evenodd"
										/>
									</svg>
								</a>
							) : null}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
