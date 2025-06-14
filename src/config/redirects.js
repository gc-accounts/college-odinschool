/** @type {import('next').NextConfig} */
const redirects = [
  {
    source: "/",
    destination: "/data-analyst-course",
    permanent: true
  },
   {
    source: "/ai-analyst-course",
    destination: "/data-analyst-course",
    permanent: true
  },
]

module.exports = redirects; 