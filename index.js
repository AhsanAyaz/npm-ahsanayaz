#!/usr/bin/env node

const {
  white,
  blueBright
} = require("colorette");

const work = white(`Software Architect & Educator`)
const gde = `${blueBright('Google Developers Expert in Angular')}`
const twitter = blueBright('https://twitter.com/codewith_ahsan')
const linkedIn = blueBright('https://linkedin.com/in/ahsanayaz')
const github = blueBright('https://github.com/ahsanayaz')
const slides = blueBright('https://slides.com/ahsanayaz')
const website = blueBright('https://codewithahsan.dev')
const ngCookBook = blueBright('https://ng-cookbook.com')
const npx = white('npx ahsanayaz')

const heading = `${white('Muhammad Ahsan Ayaz')}`
const rows = {
  ['Google Developers Expert']: gde,
  ['Angular Cookbook']: ngCookBook,
  LinkedIn: linkedIn,
  Website: website,
  Twitter: twitter,
  Github: github,
  Slides: slides,
  Card: npx
}

let output = `
${heading}
${work}
`;

// `maxKeyLetters` helps in formatting the information nicely
const maxKeyLetters = Math.max(...Object.keys(rows).map(key => key.length));
const secondaryContent = Object.keys(rows).map((key) => {
  return `${key.padEnd(maxKeyLetters)} : ${rows[key]}`
}).join('\n');

output += `
${secondaryContent}
`;

console.log(output)