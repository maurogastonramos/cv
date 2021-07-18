module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        flower: "url('~/assets/header-bg.jpg')",
        profile: "url('~/assets/profile-pic.png')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
