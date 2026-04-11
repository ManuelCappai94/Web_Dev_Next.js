const dev = process.env.NODE_ENV !== "production"

export const server = dev 
? "http://localhost:3000" 
: "https://web-dev-next-js-git-main-manuelcappai94s-projects.vercel.app"