import { Github, ExternalLink, PlayCircle } from "lucide-react"; //Import the icons for github etc.
import Image from "next/image";

interface ProjectCardProps {
  thumbnail: string;
  name: string;
  description: string;
  tools?: string[];
  github: string;
  demo?: string;
}

export default function ProjectCard({
  thumbnail,
  name,
  description,
  tools = [],
  github,
  demo,
}:ProjectCardProps) {
    return(
        <div className="w-80 h-120 p-5 bg-gradient-to-b from-emerald-900 to-black rounded-4xl border border-emerald-900 flex flex-col justify-between">
            
            <div className="flex flex-col gap-4 flex-grow">
                {/*Thumbnail*/}
                <div className="relative overflow-hidden aspect-[4/3] w-full border border-emerald-900 rounded-2xl">
                    <Image src={thumbnail} alt={name} className="object-cover transition-transform duration-500 group-hover:scale-105" fill />
                </div>

                {/*links*/}
                <div className="flex justify-around gap-3 mt-5">
                    <a href={github} target="_blank" className="border border-emerald-900 w-5/12 px-2 py-1 rounded-full flex items-center gap-2 text-sm font-medium text-white hover:bg-gradient-to-b hover:from-emerald-900 hover:to-black transition justify-center"><Github size={18} />Code</a>
                    {demo && (<a href={demo} target="_blank" className="border border-emerald-900 w-5/12 rounded-full px-2 py-1 flex items-center gap-2 text-sm font-medium text-white hover:bg-gradient-to-b hover:from-emerald-900 hover:to-black transition justify-center"><PlayCircle size={18} />Demo</a>)}
                </div>

                {/*Name and Description*/}
                <div className="pt-2 pb-5 gap-6h-3/12 flex flex-col items-center">
                    <h3 className="text-2xl font-bold">{name}</h3>
                    <p className="text-center">{description}</p>
                </div>
            </div>

            {/*tools*/}
            <div className="flex justify-center gap-2 mt-4">
                {tools.map((tool, i) => (
                <span key={i} className="text-xs px-2 rounded-md border border-emerald-900">
                    {tool}
                </span>
                ))}
            </div>
        </div>
    );
}