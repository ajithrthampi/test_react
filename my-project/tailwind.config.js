/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        vvsm:"370px",
        vsm: "400px",
        ssm: "420px",
        xsm: "500px",
        sm: "640px",
        md: "768px",
        slg: "960px",
        lg: "1024px",
        xlg: "1128px", 
        xl: "1280px",
      },
    },
  },
  plugins: [],
}

