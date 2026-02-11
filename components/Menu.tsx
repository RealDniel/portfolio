import { motion } from "framer-motion";


export default function Menu() {

    return(
            <motion.div
            className="fixed top-20 left-5 menu-styling w-64 h-64"
            initial={{ opacity: 0, scale: 1, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1, x: -20 }}
            transition={{ duration: 0.5 }}
            >
                <div className="h-full text-white logo-text flex flex-col justify-around items-center w-full divide-y divide-emerald-900 p-3">
                    <a href="/" className="menu-li-styling">Home</a>
                    <a href="/blog" className="menu-li-styling">Blog</a>
                    <a href="" className="pointer-events-none coming-soon-text menu-li-styling">Photos</a>
                </div>
                
            </motion.div>
    );
}