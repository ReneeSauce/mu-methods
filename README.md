# Apiary Project: Mu Methods

## Getting Started

Cloning the repository:

```
git clone git@github.com:jahorwitz/mu-methods.git
```

!!!IMPORTANT Make sure to install dependencies before making any code changes. This repository utilizes git-hooks which must be installed using npm before they will function.

Install:

```
npm install
```

Running the application:

```
npm run dev
```

Running tests:

```
npm run test
```

## Deployments

- [Production Build](http://mu-methods-apiary.s3-website-us-east-1.amazonaws.com/)
- [Storybook](http://storybook.mu-methods-apiary.s3-website-us-east-1.amazonaws.com/)

## Contributing

### No Commits To Main

Contributors are not allowed to commit directly to `main`. This rule is enforced using git hooks. Instead, you must create a new branch off of `main` using the following naming pattern:

```
Pattern:"/^(master|main|develop){1}$|^(feature|fix|hotfix|release)\/.+$/g"
```

Example:
`feature/my-dev-task`

### Commit messages

If your commit message does not conform to the correct pattern, you will receive an error message like the following:

```
  ************* Invalid Git Commit Message **************
  commit message: Added husky git hooks
  correct format: <type>[scope]: <subject>
  example: docs: update README to add developer tips

  type:
    feat     A new feature.
    fix      A bug fix.
    docs     Documentation only changes.
    style    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
    refactor A code change that neither fixes a bug nor adds a feature.
    test     Adding missing tests or correcting existing ones.
    chore    Changes to the build process or auxiliary tools and libraries such as documentation generation.
    perf     A code change that improves performance.
    ci       Changes to your CI configuration files and scripts.
    build    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
    temp     Temporary commit that won't be included in your CHANGELOG.

  scope:
    Optional, can be anything specifying the scope of the commit change.
    For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc.
    In App Development, scope can be a page, a module or a component.

  subject:
    Brief summary of the change in present tense. Not capitalized. No period at the end.
```

## Helpful Resources

This project uses the following key libraries

- [react-bootstrap](https://react-bootstrap.github.io/)
- [Bootstrap 5](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [Bootstrap Classes](https://getbootstrap.com/docs/5.0/utilities/colors/)
- [Vite JS](https://vitejs.dev/)
- [Storybook JS](https://storybook.js.org/)
- [React Router](https://reactrouter.com/en/main/start/tutorial)
- [Testing Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Testing Cheatsheet #2](https://vitest.dev/api/)

## Deployment

The project is configured to deploy automatically using GitHub Actions whenever a commit is made to `main`. This workflow is triggered by merging a Pull Request. After the workflow runs, you can visit the deployed site here: http://mu-methods-apiary.s3-website-us-east-1.amazonaws.com/
