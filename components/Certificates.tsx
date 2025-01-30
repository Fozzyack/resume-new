import Image from "next/image";
import React from "react";
import NN_certificate from "./assets/img/nndl.png";

const CERTIFICATES = [
	{
		name: "Neural Networks and Deep Learning",
		summary:
			"A small course offered by Stanford that teaches how build, train, and apply fully connected deep neural networks. Implementing efficient (vectorized) neural networks. Identifying key parameters in a neural network’s architecture and applying deep learning to your own applications.",
        skills: "Python, Pytorch, Neural Networks, Deep Learning",
		link: "https://coursera.org/share/a460b75a07738c6c810aec096ad7e485",

		img: NN_certificate,
	},
];

const Certificates = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="my-4 text-center">
				<h3 className="text-4xl">Certificates</h3>
				<p className="italic">
					( Extra Learning outside of my university degree )
				</p>
			</div>
			<div>
				{CERTIFICATES.map((certificate, index) => (
					<div
						key={index}
						className="flex flex-col items-center gap-2 justify-center p-8 bg-black border-white border-2 max-w-[400px] text-center"
					>
						<Image
							src={certificate.img}
							alt="certificate image"
							width={200}
							height={200}
						/>
						<h4 className="text-lg font-bold">
							Deep Neural Networks
						</h4>
						<p>{certificate.summary}</p>
                        <p className="font-bold">{certificate.skills}</p>
						<a
							href={certificate.link}
							className="p-2 rounded-xl mt-3 border-2 border-white hover:text-black hover:-translate-y-2 hover:bg-white transition duration-500 group-hover:border-black"
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
export default Certificates;
