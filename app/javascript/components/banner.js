import Typed from "typed.js"

const initTypedJsOnBanner = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Learn to code"],
    typeSpeed: 50,
    fadeOut: true,
    loop: true
  });
}

export { initTypedJsOnBanner };
