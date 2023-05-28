import "./globals.css";

export const metadata = {
    title: "Muhammad Ans | Software Engineer",
    description: "Software Engineer based in Pakistan.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <head>
                <meta
                    name="description"
                    content={metadata.description}
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            <html lang="en">
                <body>{children}</body>
            </html>
            {/* add script */}
        </>
    );
}
