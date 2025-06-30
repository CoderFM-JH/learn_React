# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```


pour envoyer le projet sur github:

# Sending the project to GitHub
To send your project to GitHub, follow these steps:
1. Create a new repository on GitHub.
2. Open your terminal and navigate to the root directory of your project.
3. Initialize a new Git repository, add your files, commit them, and push to your GitHub repository.

echo "# learn_React" >> README.md
  ++git init
git add README.md
  ++git commit -m "first commit"
git branch -M main
  ++git remote add origin https://github.com/CoderFM-JH/learn_React.git
git push -u origin main
  ++git status

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL_TO_YOUR_GITHUB_REPO>
git push -u origin main
```
## Running the project
To run the project, you can use the following commands:
```bash
# Install dependencies
npm install
# Start the development server
npm run dev
```
# Build the project
To build the project for production, you can use the following command:
```bash
npm run build
```
# Serve the production build
To serve the production build, you can use the following command:
```bash
npm run serve
```
# Test the project
To run tests, you can use the following command:
```bash
npm run test
```
# Lint the project
To lint the project, you can use the following command:
```bash
npm run lint
```
# Format the project
To format the project, you can use the following command:
```bash
npm run format
```
