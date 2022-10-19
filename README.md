**`so-nx-angular-add-lib`**

This NX Angular Workspace demonstrates an issue I am having when adding
a basic (ts) library to a project.

## Setup
This NX Angular Workspace consists of 

- an Angular application (`chester`) 
- an Angular library (`ui`) 
- an Angular library (`buildable-ui`) 
- a TS library (`shared-types`)

The only difference between the `ui` and `buildable-ui` libraries is that the latter was created with the 'buildable' flag
```
nx g @nrwl/angular:library ui --style=scss
nx g @nrwl/angular:library ui --style=scss --buildable
```

The TS library was generated with
```
nx g @nrwl/workspace:library shared-types
```

## The Issue
If we reference (`import`) types from the library `shared-types` in the app (`chester`) or ine the regular component library (`ui`), all works fine.  The app builds without any errors.

But when we we reference types from `shared-types` in the buildable component library (`buildable-ui`), we get a build error:

> File '<code_folder>/simba/libs/shared-types/src/lib/nullable.ngtypecheck.ts' is not under 'rootDir' '<code_folder>\simba\libs\buildable-ui\src'. 'rootDir' is expected to contain all source files.

## The Fix
You will note that `shared-types` was created **without** the buildable flag.  If we would have included the `--buildable`` flag, then all is fixed.

In the repo, we demonstrate this by created the buildable TS library `fancy-types` with the command:
```
nx g @nrwl/workspace:library fancy-types --buildable
```
And update all references to the non-buildable library `shared-types` to use `fancy-types`.

## Why Buildable UI Libraries?
In our case, the reason we needed buildable ui libraries was because we were using TailwindCss which requires the library to be buildable so that the (s)css associated with the components can be processed.

## How to Make a TS Library 'Buildable'?
If you compare the `shared-types` and `fancy-types` libraries you will see the several differences.  Here are the steps to convert `shared-types` into a buildable library:

### Add package.json
Create a new file in the library's root called `package.json` with the minimal information:
```
{
  "name": "@simba/shared-types",
  "version": "0.0.1"
}
```

### Add a 'build' Target to project.json
Edit the `project.json` file to include a **build** target:
```
{
  ...,
  "targets": {
    "build": {
      "executor": "@nrwl/js:tsc",
      "outputs": ["{options.outputPath}"],
      "options": {
        "outputPath": "dist/libs/shared-types",
        "main": "libs/shared-types/src/index.ts",
        "tsConfig": "libs/shared-types/tsconfig.lib.json",
        "assets": ["libs/shared-types/*.md"]
      }
    },
    ...
  }
}
```

You can view the updated (fixed) workspace in the `buildable-shared-types` branch of this repo.