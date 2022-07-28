module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FEE86D",
          secondary: "#000000",
          accent: "#F7F7F7",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui", "flowbite/plugin")],
}




