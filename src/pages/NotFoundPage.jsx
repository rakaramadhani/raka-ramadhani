export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
            <h1
                className="text-7xl font-black text-primary animate-bounce"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
                404
            </h1>
            <h2
                className="mt-4 text-2xl font-black uppercase tracking-tight text-foreground"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
                Page Not Found
            </h2>
            <p
                className="mt-2 text-muted-foreground text-center px-4 md:px-0"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <a
                href="/"
                className="mt-8 px-6 py-3
                    bg-primary text-primary-foreground
                    border-2 border-border
                    shadow-[4px_4px_0_0_var(--color-border)]
                    font-bold uppercase tracking-wider text-sm
                    hover:-translate-x-0.5 hover:-translate-y-0.5
                    hover:shadow-[6px_6px_0_0_var(--color-border)]
                    active:translate-x-0.5 active:translate-y-0.5
                    active:shadow-[1px_1px_0_0_var(--color-border)]
                    transition-all duration-150"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                Back to Home
            </a>
        </div>
    );
}
