# School Project Discord Bot

## Summary
This Bot is just a small school project I've been throwing together on a rainy weekend day. It's main features are 3 commands that work with randomization and 1 helper command that is supposed
to give you some info on how to use each command etc.

## Features
I'll be using `.` as a prefix here in the following examples. Aliases will be ommitted for ease of reading.
* Coin Flip: `.coin-flip` Flips a coin and tells you if it landed heads or tails.
* Dice Roll: `.dice-roll number` Rolls a n-sides dice depending on the `number` you pass as a parameter.
* Random Selector: `.choice-randomizer choice1, choice2, choiceN` Selects one out of n choices that you pass to it each seperated by a `,`.
* Command Info: `.args-info .command` Gives you some info about the command you pass to it. Don't forget to use the prefix.

## Requirements
- [node.js](https://nodejs.org/en/) v16.0.0 or higher
- [npm discord.js](https://www.npmjs.com/package/discord.js) v12.5.3 or higher
- Certain files depend on the `token` and `prefix`. `token` being the "key" you get from your discord dev application (see support). `prefix` is whatever comes before your command, you can choose this yourself. Be sure to declare those two in your `config.json` in your root directory.

### Dev Requirements (recommended)
- [npm eslint](https://www.npmjs.com/package/eslint) v7.25.0 or higher
- .eslintrc.json configuration rules from [here](https://discordjs.guide/preparations/setting-up-a-linter.html#setting-up-eslint-rules)

## Support
- [How to set up a basic discord bot](https://discordjs.guide/#before-you-begin)
- [node.js 16.0.0 documentation](https://nodejs.org/dist/latest-v16.x/docs/api/)
- [discord.js documentation](https://discord.js.org/#/docs/main/stable/general/welcome)
