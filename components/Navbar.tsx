export default function Navbar() {
    return(
        <div id="nav" className="fixed top-0 left-0 w-full z-50 h-15 flex flex-row items-center justify-between bg-gradient-to-b from-black to-emerald-950">
            <div id="logo" className="h-full w-2/3 flex justify-left items-center px-20">
                <h3 className="logo-text">
                    DANIEL MARTIN
                </h3>
            </div>
            <div id="links" className="w-1/3 h-full">
                <ul className="flex h-full justify-around items-center">
                    <li><a href="#container" className="link-text">About</a></li>
                    <li><a href="#projects" className="link-text">Projects</a></li>
                    <li><a href="#experience" className="link-text">Experience</a></li>
                    <li><a href="#contact" className="link-text">Contact</a></li>
                    <li><a href="/Daniel Martin Resume.pdf" download className="link-text border border-emerald-600 px-3 py-1 rounded-full hover:bg-emerald-700/40 transition">Resume</a></li>
                </ul>
            </div>

        </div>
    );
}