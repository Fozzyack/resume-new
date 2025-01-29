import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OtherProjects from "@/components/OtherProjects";
import WebProjects from "@/components/WebProjects";

export default function Home() {
	return (
		<div className="relative">
			<div className="flex flex-col z-0">
				<Hero />
				<div className="w-full relative z-10"></div>
				<div className="px-16 z-10">
					<AboutMe />
                    <div className="flex flex-col items-center justify-center mt-4">
                        <h3 className="text-4xl">
                            Projects
                        </h3>
                        <p className='italic'>
                            ( or lack thereof )
                        </p>
                    </div>
                    <WebProjects />
                    <OtherProjects />
				</div>
			</div>
			<div className="absolute w-screen z-20">
				<Footer />
			</div>
		</div>
	);
}
