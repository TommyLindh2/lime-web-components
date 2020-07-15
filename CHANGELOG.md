# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.3.1](https://github.com/Lundalogik/lime-web-components/compare/v4.3.0...v4.3.1) (2020-07-15)


### Bug Fixes

* **decorators:** add required dependency on rxjs ([1eef4ad](https://github.com/Lundalogik/lime-web-components/commit/1eef4adb4472d5d2beca095e0fc08f1646cb3297))





# [4.3.0](https://github.com/Lundalogik/lime-web-components/compare/v4.2.0...v4.3.0) (2020-07-09)


### Features

* **context:** add support for nested contexts ([0ba530a](https://github.com/Lundalogik/lime-web-components/commit/0ba530a09cbf5a7aa61e1e7f1046b584dad33dd2))





# [4.2.0](https://github.com/Lundalogik/lime-web-components/compare/v4.1.0...v4.2.0) (2020-06-24)


### Features

* **create-dialog:** update create limeobject dialog command ([fac2889](https://github.com/Lundalogik/lime-web-components/commit/fac2889fd4a68f6f5b4dd8ae6184937fea046fc6))
* **delete-object:** add delete object command ([0d72359](https://github.com/Lundalogik/lime-web-components/commit/0d72359ca8619435a294cb8d0c41b627efde7ab2))





# [4.1.0](https://github.com/Lundalogik/lime-web-components/compare/v4.0.1...v4.1.0) (2020-06-11)


### Features

* **interfaces:** add aggregates to response ([a4ab5d7](https://github.com/Lundalogik/lime-web-components/commit/a4ab5d77f9f967914ad2e84ff743eb3a8d906009))





## [4.0.1](https://github.com/Lundalogik/lime-web-components/compare/v4.0.0...v4.0.1) (2020-06-10)

**Note:** Version bump only for package lime-web-components





# [4.0.0](https://github.com/Lundalogik/lime-web-components/compare/v3.2.0...v4.0.0) (2020-05-27)


### Bug Fixes

* **user-statistics-service:** revert version 2.5.0 ([5b71a32](https://github.com/Lundalogik/lime-web-components/commit/5b71a3267d869c095c4bf17196b6266e8a51892c))
* upgrade tslint from 6.1.1 to 6.1.2 ([151c997](https://github.com/Lundalogik/lime-web-components/commit/151c9978b8894b324d5347363973fc434080d260))
* upgrade tslint from 6.1.1 to 6.1.2 ([c7aa292](https://github.com/Lundalogik/lime-web-components/commit/c7aa292cff8be15d211162b5b3b68a99eb138c72))


### BREAKING CHANGES

* **user-statistics-service:** The UserStatistics interface is removed





# [3.2.0](https://github.com/Lundalogik/lime-web-components/compare/v3.1.1...v3.2.0) (2020-05-15)


### Features

* **testing:** add document limeobject for testing ([f962c9d](https://github.com/Lundalogik/lime-web-components/commit/f962c9d33d155fb4f0a1f6d9a30af96b7cea9b95))





## [3.1.1](https://github.com/Lundalogik/lime-web-components/compare/v3.1.0...v3.1.1) (2020-05-14)


### Bug Fixes

* **testing:** correctly expose history limetype ([9dc6e7a](https://github.com/Lundalogik/lime-web-components/commit/9dc6e7a053e8e01f3d054925da1504b9f172f8ae))





# [3.1.0](https://github.com/Lundalogik/lime-web-components/compare/v3.0.0...v3.1.0) (2020-05-04)


### Features

* add functions for setting the state ([d1d632e](https://github.com/Lundalogik/lime-web-components/commit/d1d632eba8a188a4e201f025b2173410c25974e4))
* add test fixtures for limeobjects ([7389723](https://github.com/Lundalogik/lime-web-components/commit/7389723dcce5420ba20f0a8c584c1e8da35fdde3))





# [3.0.0](https://github.com/Lundalogik/lime-web-components/compare/v2.6.2...v3.0.0) (2020-04-23)


### Bug Fixes

* **decorators:** emit new value when context has changed ([a87c93a](https://github.com/Lundalogik/lime-web-components/commit/a87c93a9ba0dbe3436111898a1bb43ef2de19558)), closes [Lundalogik/crm-feature#1011](https://github.com/Lundalogik/crm-feature/issues/1011)


### BREAKING CHANGES

* **decorators:** The `LimePluginLoader` interface now requires the method `componentWillUpdate` to
be implemented. This is due to an issue in Stencil where the functionality of the function is not
included in the build unless at least one component in the project is using it. Since this fix is
using the `componentWillUpdate` function under the hood, it is now required that plugins add it to
their projects.





## [2.6.2](https://github.com/Lundalogik/lime-web-components/compare/v2.6.1...v2.6.2) (2020-04-22)

**Note:** Version bump only for package lime-web-components





## [2.6.1](https://github.com/Lundalogik/lime-web-components/compare/v2.6.0...v2.6.1) (2020-04-17)


### Bug Fixes

* include testing package in root package ([be1ffbf](https://github.com/Lundalogik/lime-web-components/commit/be1ffbf190de7b9082b3d054cbb5076d118d47d6))
* trigger release ([a24e352](https://github.com/Lundalogik/lime-web-components/commit/a24e352059a937dd7d83f1a598accd9913cba624))





# [2.6.0](https://github.com/Lundalogik/lime-web-components/compare/v2.5.0...v2.6.0) (2020-04-16)


### Features

* **testing:** add helper functions to make it easier to write tests for lime-web-components ([744ba03](https://github.com/Lundalogik/lime-web-components/commit/744ba03c2b7f80e1d1a71612e750591b99d22c52))
* **testing:** add package to help writing tests for lime web components ([4a306f0](https://github.com/Lundalogik/lime-web-components/commit/4a306f0ae656e11e33613c663cf0a93c245334db))





# [2.5.0](https://github.com/Lundalogik/lime-web-components/compare/v2.4.1...v2.5.0) (2020-04-09)


### Features

* **user-statistics-service:** add user statistics service interface ([250486b](https://github.com/Lundalogik/lime-web-components/commit/250486b2968880eef516422aefa14c30152161ea))


### Reverts

* Revert "ci(release): graduate pre-releases" ([306e7a2](https://github.com/Lundalogik/lime-web-components/commit/306e7a2c0eaeda4006f3a4dde0912be7611fb272))





## [2.4.1](https://github.com/Lundalogik/lime-web-components/compare/v2.4.1-alpha.1...v2.4.1) (2020-03-30)

**Note:** Version bump only for package lime-web-components





## [2.4.1-alpha.1](https://github.com/Lundalogik/lime-web-components/compare/v2.4.0...v2.4.1-alpha.1) (2020-03-30)


### Bug Fixes

* **decorators:** wait for lime properties in componentWillLoad ([d9193e3](https://github.com/Lundalogik/lime-web-components/commit/d9193e3e4dc1d2892dbb766a6fd9a0e2234e4da0)), closes [Lundalogik/crm-feature#1004](https://github.com/Lundalogik/crm-feature/issues/1004)





## [2.4.1-alpha.0](https://github.com/Lundalogik/lime-web-components/compare/v2.4.0...v2.4.1-alpha.0) (2020-03-30)


### Bug Fixes

* **decorators:** wait for lime properties in componentWillLoad ([d9193e3](https://github.com/Lundalogik/lime-web-components/commit/d9193e3e4dc1d2892dbb766a6fd9a0e2234e4da0)), closes [Lundalogik/crm-feature#1004](https://github.com/Lundalogik/crm-feature/issues/1004)





# [2.4.0](https://github.com/Lundalogik/lime-web-components/compare/v2.3.0...v2.4.0) (2020-03-30)


### Features

* **limeobject:** add method for loading relations into the state ([d5cd8b9](https://github.com/Lundalogik/lime-web-components/commit/d5cd8b9e9a4565130b172f892b5d31210b7eef9f))





# [2.3.0](https://github.com/Lundalogik/lime-web-components/compare/v2.2.1...v2.3.0) (2020-02-21)


### Features

* **dialog command:** add optional route property on createlimeobjectdialogcommand ([114d547](https://github.com/Lundalogik/lime-web-components/commit/114d5472464f3b4845f889ef7227bd5a5a29191c))





## [2.2.1](https://github.com/Lundalogik/lime-web-components/compare/v2.2.0...v2.2.1) (2020-01-09)


### Bug Fixes

* **decorators:** return value from original componentWillLoad in state decorators ([e91faa7](https://github.com/Lundalogik/lime-web-components/commit/e91faa7583afd56685fa4dc39292c5fcd7dfb969)), closes [#104](https://github.com/Lundalogik/lime-web-components/issues/104) [#75](https://github.com/Lundalogik/lime-web-components/issues/75)





# [2.2.0](https://github.com/Lundalogik/lime-web-components/compare/v2.1.0...v2.2.0) (2019-12-20)


### Features

* **limetype interface:** adds system type to property type ([3e1799e](https://github.com/Lundalogik/lime-web-components/commit/3e1799e4393df1facf7b0d4d9357140c06c3ad31))


### Reverts

* Revert "build: publish to github registry" ([f535e0d](https://github.com/Lundalogik/lime-web-components/commit/f535e0df2d93382aa440ffbcc88542f1dff83cab))





# [2.1.0](https://github.com/Lundalogik/lime-web-components/compare/v2.0.0...v2.1.0) (2019-08-09)


### Features

* **notification-service:** report non-blocking and non-transient message ([e02ff9f](https://github.com/Lundalogik/lime-web-components/commit/e02ff9f))





# [2.0.0](https://github.com/Lundalogik/lime-web-components/compare/v1.4.1...v2.0.0) (2019-07-04)


### Bug Fixes

* trigger release ([01b4dfc](https://github.com/Lundalogik/lime-web-components/commit/01b4dfc))


### Code Refactoring

* **platform:** add get method in favor of public properties ([5d0c903](https://github.com/Lundalogik/lime-web-components/commit/5d0c903))


### BREAKING CHANGES

* **platform:** Removed all public properties, services are now retrieved with the `get` method.
New services can be registered with the `register` method which can also be used by 3rd parties to
register new services on the platform. Core platform service names are exposed in the
`PlatformServiceName` enum.





## [1.4.1](https://github.com/Lundalogik/lime-web-components/compare/v1.4.0...v1.4.1) (2019-06-28)


### Bug Fixes

* send_task expects app ([5f2eefa](https://github.com/Lundalogik/lime-web-components/commit/5f2eefa))





# [1.4.0](https://github.com/Lundalogik/lime-web-components/compare/v1.3.0...v1.4.0) (2019-06-24)


### Bug Fixes

* **npm:** publish to npmjs.org ([73b94ea](https://github.com/Lundalogik/lime-web-components/commit/73b94ea))


### Features

* **task service:** add getStatus method ([fb28b85](https://github.com/Lundalogik/lime-web-components/commit/fb28b85))





# [1.3.0](https://github.com/Lundalogik/lime-web-components/compare/v1.2.8...v1.3.0) (2019-06-24)


### Features

* license under Apache-2.0 ([34b755e](https://github.com/Lundalogik/lime-web-components/commit/34b755e))





## [1.2.8](https://github.com/Lundalogik/lime-web-components/compare/v1.2.7...v1.2.8) (2019-06-20)


### Bug Fixes

* Revert "fix: Revert "fix:... ([e4439d1](https://github.com/Lundalogik/lime-web-components/commit/e4439d1))





## [1.2.7](https://github.com/Lundalogik/lime-web-components/compare/v1.2.6...v1.2.7) (2019-06-20)


### Bug Fixes

* Revert "fix: Revert "Revert "fix: Revert... ([b7f2830](https://github.com/Lundalogik/lime-web-components/commit/b7f2830))
* Revert "Revert "fix: Revert "fix: Revert "fix: dummy commit"""" ([730ebcd](https://github.com/Lundalogik/lime-web-components/commit/730ebcd))





## [1.2.6](https://github.com/Lundalogik/lime-web-components/compare/v1.2.5...v1.2.6) (2019-06-20)


### Bug Fixes

* Revert "fix: Revert "fix: dummy commit"" ([d6b6002](https://github.com/Lundalogik/lime-web-components/commit/d6b6002))





## [1.2.5](https://github.com/Lundalogik/lime-web-components/compare/v1.2.4...v1.2.5) (2019-06-20)


### Bug Fixes

* Revert "fix: dummy commit" ([0b187ef](https://github.com/Lundalogik/lime-web-components/commit/0b187ef))





## [1.2.4](https://github.com/Lundalogik/lime-web-components/compare/v1.2.3...v1.2.4) (2019-06-20)


### Bug Fixes

* dummy commit ([78e0667](https://github.com/Lundalogik/lime-web-components/commit/78e0667))





## [1.2.3](https://github.com/Lundalogik/lime-web-components/compare/v1.2.2...v1.2.3) (2019-06-20)


### Bug Fixes

* Revert "fix: dummy commit" ([f1ff607](https://github.com/Lundalogik/lime-web-components/commit/f1ff607))





## [1.2.2](https://github.com/Lundalogik/lime-web-components/compare/v1.2.1...v1.2.2) (2019-06-20)


### Bug Fixes

* dummy commit ([a91aa7c](https://github.com/Lundalogik/lime-web-components/commit/a91aa7c))
* dummy commit ([9ec3ccb](https://github.com/Lundalogik/lime-web-components/commit/9ec3ccb))
* dummy version ([ac9d6c8](https://github.com/Lundalogik/lime-web-components/commit/ac9d6c8))





## [1.2.1](https://github.com/Lundalogik/lime-web-components/compare/v1.2.0...v1.2.1) (2019-06-19)


### Bug Fixes

* dummy version ([4402508](https://github.com/Lundalogik/lime-web-components/commit/4402508))





# [1.2.0](https://github.com/Lundalogik/lime-web-components/compare/v1.1.0...v1.2.0) (2019-06-19)


### Bug Fixes

* **tutorial:** update how to create web-components ([640b8c9](https://github.com/Lundalogik/lime-web-components/commit/640b8c9))


### Features

* **notification:** add dismissible option ([b163f6b](https://github.com/Lundalogik/lime-web-components/commit/b163f6b))





# [1.1.0](https://github.com/Lundalogik/lime-web-components/compare/v1.0.1...v1.1.0) (2019-06-05)


### Features

* **commands:** add relations property on bulk create command ([803e8a4](https://github.com/Lundalogik/lime-web-components/commit/803e8a4))





## [1.0.1](https://github.com/Lundalogik/lime-web-components/compare/v1.0.0...v1.0.1) (2019-05-29)


### Bug Fixes

* **decorators:** add missing exports ([cf60471](https://github.com/Lundalogik/lime-web-components/commit/cf60471))





# [1.0.0](https://github.com/Lundalogik/lime-web-components/compare/v0.1.0...v1.0.0) (2019-05-29)


### Features

* convert lime-web-component-interfaces to monorepo lime-web-components ([2266483](https://github.com/Lundalogik/lime-web-components/commit/2266483))
* rename packages to `@limetech/lime-web-components-<package-name>` ([25f7a9f](https://github.com/Lundalogik/lime-web-components/commit/25f7a9f))


### Reverts

* **route-interface:** removes origin param again ([8104086](https://github.com/Lundalogik/lime-web-components/commit/8104086))
