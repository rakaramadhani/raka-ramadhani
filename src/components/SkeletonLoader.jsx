import { motion } from 'framer-motion';

/* Neo-brutalist skeleton using theme tokens */
const shimmerColors = ["var(--color-muted)", "var(--color-accent)", "var(--color-muted)"];

export const ProjectCardSkeleton = () => {
    return (
        <div className="w-auto h-auto border-2 border-border bg-card shadow-[4px_4px_0_0_var(--color-border)] overflow-hidden">
            <motion.div
                className="h-48 bg-muted"
                animate={{ backgroundColor: shimmerColors }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="p-4 space-y-3">
                <motion.div
                    className="h-4 bg-muted w-1/3"
                    animate={{ backgroundColor: shimmerColors }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                />
                <motion.div
                    className="h-6 bg-muted w-2/3"
                    animate={{ backgroundColor: shimmerColors }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.div
                    className="h-4 bg-muted w-full"
                    animate={{ backgroundColor: shimmerColors }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                />
                <motion.div
                    className="h-4 bg-muted w-4/5"
                    animate={{ backgroundColor: shimmerColors }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />
                <motion.div
                    className="h-8 bg-muted w-1/2 mt-4"
                    animate={{ backgroundColor: shimmerColors }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
            </div>
        </div>
    );
};

export const ExperienceCardSkeleton = () => {
    return (
        <div className="w-full flex flex-col md:flex-row bg-card border-2 border-border shadow-[4px_4px_0_0_var(--color-border)] p-3">
            <motion.div
                className="w-full md:w-72 h-40 md:h-56 bg-muted"
                animate={{ backgroundColor: shimmerColors }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="mt-4 md:m-8 w-full space-y-3">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="space-y-2">
                        <motion.div
                            className="h-4 bg-muted w-1/3"
                            animate={{ backgroundColor: shimmerColors }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                        />
                        <motion.div
                            className="h-6 bg-muted w-2/3"
                            animate={{ backgroundColor: shimmerColors }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        />
                    </div>
                    <div className="space-y-2">
                        <motion.div
                            className="h-4 bg-muted w-24"
                            animate={{ backgroundColor: shimmerColors }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        />
                        <motion.div
                            className="h-6 bg-muted w-20"
                            animate={{ backgroundColor: shimmerColors }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                        />
                    </div>
                </div>
                <motion.div
                    className="h-4 bg-muted w-full"
                    animate={{ backgroundColor: shimmerColors }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div
                    className="h-4 bg-muted w-4/5"
                    animate={{ backgroundColor: shimmerColors }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                />
            </div>
        </div>
    );
};

export const CertificateCardSkeleton = () => {
    return (
        <div className="bg-card border-2 border-border shadow-[4px_4px_0_0_var(--color-border)] overflow-hidden">
            <motion.div
                className="w-full h-64 bg-muted"
                animate={{ backgroundColor: shimmerColors }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};
