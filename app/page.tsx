import AboutMe from "@/components/AboutMe";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<div className="relative">
			<div className="flex flex-col z-0">
				<Hero />
				<div className="px-16 z-10 mb-12 flex flex-col items-center justify-center gap-4">
					<AboutMe />
					<Projects />
					<Certificates />
				</div>
			</div>
			<div className="absolute w-screen z-20">
				<Footer />
			</div>
		</div>
	);
}
