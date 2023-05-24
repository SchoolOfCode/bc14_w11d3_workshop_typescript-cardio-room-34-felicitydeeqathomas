# TypeScript Practice

The aim here is to become more familiar with TypeScript, not to finish all the tasks.

## Task 1

Navigate to the [TypeScript Playground](https://www.typescriptlang.org/play) and have a go at the following things:

1. Declare and initialise variables (names and values of your variables are up to you) for each of the types below. First use type inference. Then try explicitly providing a type annotation. An example has been given for the first one.

   - boolean (hint: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean). Example:

     ```ts
     // Using type inference.
     let isHungry = true;

     // Using explicit type annotation
     let hasBeenWashed: boolean = true;
     ```

   - string
   - number
   - an array of booleans (hint: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
   - an array of numbers
   - an array of strings

2. Declare and implement a function which takes in two numbers and returns their sum. Have type annotations for both the parameters and the return value (hint: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions).

3. Declare a new type that describes an object (hint: https://www.typescriptlang.org/docs/handbook/2/objects.html) containing the keys and types below:

   - amount: a number
   - uniqueId: a string
   - isValid: a boolean
   - addressLines: an array of strings

4. Declare a new type alias named `Colour` which is any one of: "BLUE" or "YELLOW" (hint: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types).

See how you can break the Typescript functionality as much as use it correctly. Learn what it can and can't do!

## Task 2

The aim of this task is to convert an existing rock, paper, scissors game (in `task-2/src/game.js`) from JavaScript to TypeScript. The game logic has already been written for you so that you can just focus on TypeScript.

(Normally, if you're going to use TypeScript, you would just write the app directly in TypeScript from the start. However, sometimes you might have to migrate an older/existing codebase to TypeScript.)

1. `cd` into the `task-2` folder and run `npm i` to install required dependencies.
2. Rename `src/game.js` to `src/game.ts`.
   - If your IDE starts underlining errors/problems in red, that's normal and they'll disappear as you work through the task and complete the migration.
3. Get the contents of `src/game.ts` to compile by adding type annotations where needed (e.g. function parameters) and fixing the errors from TypeScript. (You can optionally use `npm run dev` to see immediate feedback as you make changes. Be prepared to see lots of errors at the start.)

If you've been running TypeScript in watch mode (via `npm run dev` earlier), then your `build` folder should already contain the latest `game.js`. If not, try running `npm run build` in your terminal. This should take your TypeScript file, compile it, transpile it to JavaScript and automatically overwrite the contents of `game.js` file in the `build` folder.

If you see compiler errors, understand it (read through the error message, google it) and attempt to resolve them one by one.

Once complete, try serving the `index.html` locally (using something like Live Server) and seeing if the game works (check the buttons, check the scores displayed).

## Task 3 (bonus)

Let's write a simple web application which fetches a dad joke and displays it on the page.

1. `cd` into the `task-3` folder
2. Run `npm i -D typescript` to install TypeScript as a development-only dependency.
3. Create a `src` folder within the `task-3` folder.
4. Create a `build` folder within the `task-3` folder.
5. Run `npx tsc --init` to create a `tsconfig.json` in the `task-3` folder. With the newly created `tsconfig.json`, uncomment and change:

   1. `compilerOptions.module` to be `"ES6"` (or newer if you prefer)
   2. `compilerOptions.rootDir` to be `"./src"`
   3. `compilerOptions.outDir` to be `"./build"`
   4. `compilerOptions.noEmitOnError` to be `true`
   5. `compilerOptions.strict` to be `true`

6. Add a `build` script to your `package.json` which runs the command `tsc`
7. Optionally, add a `dev` script to your `package.json` which runs the command `tsc --watch`. (You can use this whilst developing.)
8. Create an `index.html` which contains any starter HTML you'll need. Any JavaScript files you want to link should come from the `build` folder (as this is where TypeScript should output any JavaScript files based on the config above). You may want to add `type="module"` and `defer` attributes to the `script` tag in the HTML file (depending on your code).

9. Write a small front end using TypeScript which:

   1. Contains a HTML blockquote element (for displaying a fetched quote)
   2. Contains a HTML button element (so that the user can fetch a new joke by clicking)
   3. Fetches a new joke (from `https://icanhazdadjoke.com/`) and displays it in the blockquote element whenever the button is clicked
   4. Fetches and displays a new joke when the page initially loads
   5. Try to:
      - compose your app of simple, lean functions, each of which have a single responsibility. For example, a function which only fetches and returns the quote, etc.
      - have type annotations for each function's parameters and return type
      - have types defined for the data received from the API (have a look at websites that generate your TypeScript types for you if you give them some sample JSON)

10. Once done, you can run `npm run build`, which should then take your TypeScript files (from your `src` folder), check/compile them, transpile them and put the JavaScript output in your `build` folder. You can serve your `index.html` locally using something like Live Server to see if your app is working.

## Task 4 (bonus)

Write a small REST API using TypeScript and Express.

1. `cd` into the `task-4` folder
2. Install TypeScript as a development-only dependency.
3. Install Express.
4. Install the types for Express using `npm i -D @types/express`. When using NPM packages/third party code with your TypeScript code:

   - some NPM packages come with type declaration files (which allow TypeScript to understand the types within that third party code). In other words, you don't have to install anything other than the package itself
   - some NPM packages don't come with types, but you may be able to install the types separately via the Definitely Typed repo (which is a community-maintained repo which contains TypeScript declarations for many NPM packages). In other words, you have to install the package itself as well as something like `npm i -D @types/PACKAGE_NAME`.
   - some NPM packages don't come with types and unfortunately type declarations files may not available via Definitely Typed. In this case, you may need to write the type declarations yourself before you're able to use that third party code in your TypeScript app (depending on how strict your `tsconfig.json` is configured).

5. Create a `src` folder within the `task-4` folder.
6. Create a `build` folder within the `task-4` folder.
7. Run `npx tsc --init` to create a `tsconfig.json` in the `task-4` folder.
8. Structure your project however you want (e.g. create and name your folders) and configure `tsconfig.json` to reflect your project structure. (If you're stuck, feel free refer to the previous task to see how we set things up there.)

9. Add a `build` script to your `package.json` which runs the command `tsc`

10. Optionally, add a `dev` script to your `package.json` which runs the command `tsc --watch`. (You can use this whilst developing.)

11. The REST API should support least two routes. Try to:

    - Add type annotations for `req.query`, `req.body`, `req.params`, `res.body` (where appropriate)

## Task 5 (bonus):

For other ways of writing a server with TypeScript, have a look at tools like:

- TRPC: https://trpc.io/
- NestJS: (https://docs.nestjs.com/)
- Ts.ED (https://tsed.io/)

## Task 6 (bonus):

Once you've finished experimenting, work through [this course](https://www.codecademy.com/learn/learn-typescript) as a team.

## Resources:

- https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
- https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
- https://medium.com/free-code-camp/learn-typescript-in-5-minutes-13eda868daeb
- https://www.youtube.com/watch?v=ahCwqrYpIuM
- https://www.youtube.com/watch?v=zQnBQ4tB3ZA
- https://www.youtube.com/watch?v=ydkQlJhodio
