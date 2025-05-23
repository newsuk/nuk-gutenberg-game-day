# Gutenberg Game Day

Welcome to Gutenberg Game Day!

Today you'll be getting hands-on with building blocks for the WordPress editor - using JS/React and a little bit of [Sass](https://sass-lang.com/).

---

## What will I be building?

If you're a learner who's _not_ worked with Gutenberg before, you'll be completing the [beginner task](#what-is-the-beginner-task).

If you have worked with Gutenberg before, you will get to work on an idea of your choice! Please submit your proposals by EOD Monday (16th).

---

## What are the teams?

For the Game Day on May 7th 2025, the teams are:

| Team            | Members                              | Task                      |
|:---------------:| ------------------------------------ | ------------------------- |
| Pikachu (1)     | Dero, Tom R, Jordan, Milan, Yuki     | Podcast                   |
| Author Team (2) | Edwil, Michael, Sameke, Tom H        | Author Pages              |
| AppPress (3)    | Mohan, Dan, Jakub, Robel, Ehsan      | WP API + Apps             |
| Play Squad (4)  | Adam, Mateusz, Snow, Jem             | Puzzles CMS               |
| Ratatouille (5) | Bibi, Mario, Peace, Alex             | Recipes                   |
| NewsQuiz (6)    | Callum, Jonny, Michael, Alister      | Knowledge Check Quiz      |

---

## What is the beginner task?

Your task is to make a funky headline block! Full details of the task can be found [here](./TASK.md).

<img src="assets/funky-headline.png " width="420" >

---

## Where should I put my solution?

Create a new branch for your team in the `nuk-gutenberg-game-day` repo. Include your team's number and the names of your teammates (e.g. `team-1-jack-umer`).

Be sure to push your commits regularly during the day - not just at the end!

---

## Who in my team should write the code?

Teams for the tech task will be made up of one or more **Learners** who are new to Gutenberg, and one **Helper** who is a Gutenberg/WordPress expert.

As a Learner, you are responsible for driving the team’s solution and writing the code.

Your team’s Helper is there to guide and support you and answer any questions you have during the day.

---

## Can you give me some hints?

- Take regular breaks during the task! Grab a coffee, play some fusball - whatever helps you through the day
- Don’t focus on making your code perfect straight away - it’s better to start simple and have something working, then gradually improve your code over the course of the day
- Be aware that the requirements of the task are intentionally vague, so you can make your solution as basic or advanced as you like - there are many different ways to complete the task!
- You can use JavaScript or TypeScript for the task, whichever you feel most comfortable with
- If at any point during the task you and your partner get stuck (e.g. you’re having trouble running `wp-env`, or are finding it hard to style your components) be sure to ask one of our “floating” Helpers who will come and help you

---

## How do I setup my development environment?

**Check Node version >= 20.10.0**
```
node --version
```

**Check NPM is up-to-date**
```
npm i -g npm
```

**Check Docker is installed and running**
```
docker --version
docker ps
```

**Create block using NPX**
```
npx @wordpress/create-block@latest --wp-env gutenberg-game-day
cd gutenberg-game-day
```

**Start build script watcher**
```
npm start
```

**Start dev environment**
```
npm run env start
```

**Confirm development site is running (probably on port 8888)**
```
open http://localhost:8888/wp-admin/
```
You can login with username `admin` and password `password`
