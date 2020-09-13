# Contributing to Service Catalog

:tada::+1: First off, thank you for considering contributing to Service Catalog. :pray:

It's people like you that make Service Catalog such a great tool and help shape it's future. :rocket:

## Table of Contents
* [Code of Conduct](#code-of-conduct)
* [Common Guidelines](#common-guidelines)
  * [Get Started](#get-started)
  * [Fork and Branch](#fork-and-branch)
  * [Get the test suite running](#get-the-test-suite-running)
  * [Implement your fix or feature](#implement-your-fix-or-feature)
  * [View your changes](#view-your-changes)
  * [Get the style right](#get-thestyle-right)
  * [Submit a Pull Request](#submit-a-pull-request)
  * [Keep your Pull Request updated](#keep-your-pull-request-updated)
* [Maintainers Only](#maintainers-only)
  * [Merge a PR](#merge-a-pr)
  * [Ship a release](#ship-a-release)

## Code of Conduct

This project and everyone participating in it is governed by the [Service Catalog Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Common Guidelines

### Get Started

If you've noticed a bug or have a feature request, [make one][new issue]! It's
generally best if you get confirmation of your bug or approval for your feature
request this way before starting to code.

If you have a general question about service-catalog, you can [post a question],
the issue tracker is there for maintaining and having discussions about questions,
bugs, feature requests, documentation proposals and regression reports.

### Forking and Branch

If this is something you think you can fix, then [fork Service Catalog] and create
a branch with a descriptive name.

A good branch name would be:

```plaintext
git checkout -b feat/#325/add-service-pagination
                ^--^ ^--^ ^--------------------^
                |     |    |
                |     |    +-> Summary in present tense.
                |     |
                |     +------> Ticket that you are working on
                |
                +------------> Type: chore, docs, feat, fix, refactor, style, or test.

```

### Get the test suite running

The SPA uses [Jest] for Unit Testing and and [WebDriverIO] for E2E Tests. Make sure you're
using a recent widely supported version of [Node.js] ([Node.js] 10+ recommended).

Now install the package dependencies with [Lerna]:

```sh
lerna bootstrap
```

### Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help;
everyone is a beginner at first :smile_cat:

### View your changes

The Service Catalog is meant to be used by humans, not cucumbers. So make sure to take
a look at your changes in a browser by running the SPA and Microservice locally. 

At times, it might seem like a small change to a backend API might be inconsequential, 
however, minor changes can have major effects. A change in an API's return value might 
introduce an inconsistency in the frontend application which can cause the styling to
break. 

As such, always double check the impact of your changes to the overall apllication prior
to submitting a patch.

### Get the style right

Your patch should follow the same conventions & pass the same code quality
checks as the rest of the project. On any modern code editor the `eslint`, `tsconfig` 
and other similar configurations should enable in-editor feedback in this regard. You 
can check & fix style issues by running each linter individually. 

### Make a Pull Request

At this point, you should switch back to your master branch and make sure it's
up to date with Service Catalog's master branch:

```sh
git remote add upstream git@github.com:1-Platform/service-catalog.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```sh
git checkout feat/#325/add-service-pagination
git rebase master
git push --set-upstream origin feat/#325/add-service-pagination
```

Finally, go to GitHub and [make a Pull Request][] :D

GitHub Actions will run our test suite against all supported platforms and 
Node.js versions. We care about quality, so your PR won't be merged until all 
tests pass. It's unlikely, but it's possible that your changes pass tests in 
one Node.js version but fail in another. In that case, you'll have to setup 
your development environment to use the problematic Node version, and investigate
what's going on! An easy way is to use [NVM] for doing this.

### Keep your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code
has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing in Git, there are a lot of [good][git rebasing]
[resources][interactive rebase] but here's the suggested workflow:

```sh
git checkout feat/#325/add-service-pagination
git pull --rebase upstream master
git push --force-with-lease feat/#325/add-service-pagination
```

## Maintainers only

### Merge a PR 
A PR can only be merged into master by a maintainer if:

* It is passing CI.
* It has been approved by at least two maintainers. If it was a maintainer who
  opened the PR, only one extra approval is needed.
* It has no requested changes.
* It is up to date with current master.

Any maintainer is allowed to merge a PR if all of these conditions are
met.

### Ship a release

The release workflow for the repository is set run for every Pull Request using [Semantic Releases for Monorepos]. As such, the only thing that needs to be taken care of is to make sure that all Pull Requests are thoroughly vetted prior to being merged.

[new issue]: https://github.com/1-Platform/service-catalog/issues/new
[post a question]: https://github.com/1-Platform/service-catalog/issues/new?assignees=&labels=question&template=question.md&title=
[fork Service Catalog]: https://help.github.com/articles/fork-a-repo
[make a pull request]: https://help.github.com/articles/creating-a-pull-request
[git rebasing]: http://git-scm.com/book/en/Git-Branching-Rebasing
[interactive rebase]: https://help.github.com/en/github/using-git/about-git-rebase
[shortcut reference links]: https://github.github.com/gfm/#shortcut-reference-link
[NPM]: https://docs.npmjs.com/about-npm/
[Lerna]: https://lerna.js.org/
[Node.js]: https://nodejs.org/en/
[Jest]: https://jestjs.io/
[WebDriverIO]: https://webdriver.io/
[VueJS]: https://vuejs.org/v2/guide/
[NVM]: https://github.com/nvm-sh/nvm/blob/master/README.md
[Semantic Releases for Monorepos]: https://github.com/pmowrer/semantic-release-monorepo
