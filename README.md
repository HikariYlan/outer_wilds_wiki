# Outer Wilds Wiki
## Made with ❤️ by Hikari / Ylan

This community-based wiki lists all the elements that make up the 
game "Outer Wilds": 
planets, species, endings, achievements, etc.

## A personal note from the developer
This is the 6th (hopefully the last) iteration of that project.
It started as my school end-of-the-year project, in 2022, where we had to develop a website around the theme of our choice. 
Big fan of the game since 2021, I obviously proposed *Outer Wilds* to my duo who accepted, and the project was born.
Starting with very basics knowledge, the website was developed with HTML, CSS & some Javascript.

In the first year of my computer science degree, I learned PHP, which started the 2nd version, then I learned *Composer*, which started the 3rd version.
Lastly, in the second year of my degree, I learned the framework *Symfony*, which started the 4th version of this project.
As of 2025, I am now in my final year and I started to learn Typescript with *Node.js* & its framework *Express*.
Seeing how light *Express* is and how *Symfony* is overkill for I want to do, I decided to restart for the 5th time with the hope of finishing it one day.

## Running the website locally

### Requirements

In order to run this project in your own PC, you need to have the list below installed:

- Node.js
- (for windows only) Git Bash For Windows

### Starting the local server

Open a terminal in the place of your choice, then copy-paste the series of commands below:
```shell
git clone https://github.com/HikariYlan/outer_wilds_wiki.git &&
cd outer_wilds_wiki/ &&
npm install &&
npm run watch
```

Here is an explanation step by step:

- `git clone`: fetch the entire project from the source (here my GitHub repository) to download it on you machine
- `cd outer_wilds_wiki/`: place the terminal in the newly created folder
- `npm install`: install all dependencies listed in the file called "package.json"
- `npm run watch`: starts the server only if no errors has been found
