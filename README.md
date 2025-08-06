# It's a SvelteKit application for Daff website.

## Developing

### To install dependencies:

```bash
$ npm install
```

### To start a development server:

```bash
$ npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

### To create a production version of your app:

```bash
$ npm run build
```

### To preview the production build:

```bash
$ npm run preview
```

#### To format the Project

```bash
$ npm run format
```

#### To lint the Project

```bash
$ npm run lint
```

## Documentations

### Git Commit Guidelines

#### Commit message format

```bash
<task type>(scope): <emoji> <description>

[optional body]

[optional footer(s)]
```

Example commit message would be

```bash
feat(#2): ✨ Created login screen
Completed:
1. Created form, input, checkbox, label, submit
2. Prettier setup done.
3. Linter setup done.
4. Completed login screen, with responsiveness.
5. Initialized mock server using `json-server` served on port `5005`
6. `npm run local:server` to start mock server
```

#### Examples

- ✨ feat: For implementing new features
- ♻️ chore: For refactoring the code
- 🐛 fix: For fixing a bug
- 📝 docs: For updating documentation
- ⏪ merge: After resolving merge conflicts
- 💫 design: Added new design or changed existing

| Commit type               | Emoji           |
| :------------------------ | :-------------- |
| Introduce new features    | ✨ `:sparkles:` |
| Refactor code             | ♻️ `:recycle:`  |
| Fix a bug                 | 🐛 `:bug:`      |
| Update documentation      | 📝 `:memo:`     |
| Resolving merge conflicts | ⏪ `:rewind:`   |
| Done design changes       | 💫 `dizzy`      |
