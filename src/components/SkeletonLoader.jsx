import { motion } from 'framer-motion';

export const ProjectCardSkeleton = () => {
    return (
        <div className="w-auto h-auto border rounded-xl bg-white shadow-md border-gray-200 overflow-hidden">
            <motion.div 
                className="h-48 bg-gray-200 rounded-t-2xl"
                animate={{ 
                    backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="p-4 space-y-3">
                <motion.div 
                    className="h-4 bg-gray-200 rounded w-1/3"
                    animate={{ 
                        backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.1
                    }}
                />
                <motion.div 
                    className="h-6 bg-gray-200 rounded w-2/3"
                    animate={{ 
                        backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2
                    }}
                />
                <motion.div 
                    className="h-4 bg-gray-200 rounded w-full"
                    animate={{ 
                        backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3
                    }}
                />
                <motion.div 
                    className="h-4 bg-gray-200 rounded w-4/5"
                    animate={{ 
                        backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.4
                    }}
                />
                <motion.div 
                    className="h-8 bg-gray-200 rounded w-1/2 mt-4"
                    animate={{ 
                        backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
            </div>
        </div>
    );
};

export const ExperienceCardSkeleton = () => {
    return (
        <div className="w-full flex flex-col md:flex-row bg-white border rounded-2xl shadow-md border-gray-200 p-3">
            <motion.div 
                className="rounded-xl w-full md:w-72 h-40 md:h-56 bg-gray-200"
                animate={{ 
                    backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="mt-4 md:m-8 w-full space-y-3">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="space-y-2">
                        <motion.div 
                            className="h-4 bg-gray-200 rounded w-1/3"
                            animate={{ 
                                backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.1
                            }}
                        />
                        <motion.div 
                            className="h-6 bg-gray-200 rounded w-2/3"
                            animate={{ 
                                backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.2
                            }}
                        />
                    </div>
                    <div className="space-y-2">
                        <motion.div 
                            className="h-4 bg-gray-200 rounded w-24"
                            animate={{ 
                                backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.3
                            }}
                        />
                        <motion.div 
                            className="h-6 bg-gray-200 rounded w-20"
                            animate={{ 
                                backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.4
                            }}
                        />
                    </div>
                </div>
                <motion.div 
                    className="h-4 bg-gray-200 rounded w-full"
                    animate={{ 
                        backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
                <motion.div 
                    className="h-4 bg-gray-200 rounded w-4/5"
                    animate={{ 
                        backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6
                    }}
                />
            </div>
        </div>
    );
};

export const CertificateCardSkeleton = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <motion.div 
                className="w-full h-64 bg-gray-200"
                animate={{ 
                    backgroundColor: ["#e5e7eb", "#f3f4f6", "#e5e7eb"] 
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};
