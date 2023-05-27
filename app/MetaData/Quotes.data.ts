export const quotes = [
    "Never Settle, Stay Hungry, Stay Foolish",
]

export const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

