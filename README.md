[![Build Status](https://travis-ci.org/silvuss/silvuss-bracket-string-validator.svg?branch=master)](https://travis-ci.org/silvuss/silvuss-bracket-string-validator)

# bracket-string-validator – validate bracket strings

This project contains: (1) a library **bracket-string-validator** – it allows to check whether a given string is a so-called bracket string; (2) a command line interface for this library; (3) a website being an interface for this library.

A "bracket string" is a string that consists only of properly closed brackets (be it `()`, `[]` or `{}`); what is more, brackets of each type must be closed properly in relation to all of the other types that exist in the string. Examples of bracket strings: `()` or `({()})[]`. Examples of "non-bracket strings": `)(` or `([)]`. An empty string is NOT considered a proper bracket string. This definition is based on a definition by M. Kubica, available on [this webpage (in Polish)](http://edu.pjwstk.edu.pl/wyklady/jfa/scb/frames-jfa-main-node11.html).

I have found the idea of "bracket strings" on the forum 4programmers.net. It also seems to occur across the internet, at least on Polish websites. For details on the English term itself, see the page "[The term "bracket string"](https://github.com/silvuss/silvuss-bracket-string-validator/wiki/The-term-bracket-string)" of this project's wiki.

**Read before use:** This application **is not** intended to be used according to the purpose described above. You may use it **only** to test whether the code is written the way it is expected (i.e. it produces expected results) and **only** when you know what the code will really do. For details, see the section "[Disclaimers](#disclaimers)" below.

**_Note:_** _There is a term "documentation" used across commit messages, comments in the files with code, this README and other Markdown files in this project. By this term, one should understand all of those places._

## Table of contents

1. [Copyright note](#copyright-note)
2. [Disclaimers](#disclaimers)
3. [How does this application work?](#how-does-this-application-work)
4. [Building](#building)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Environments, tools and technologies used](#environments-tools-and-technologies-used)
8. [Sources](#sources)
9. [Credits](#credits)
10. [Details](#details)

## Copyright note

Note that this project "bracket-string-validator" (this repository) has currently **no license**, as explained in [this GitHub guide on licensing projects](https://choosealicense.com/no-permission/).

For your convenience, I am including below a quote from that site:

> When you make a creative work (which includes code), the work is under exclusive copyright by default. Unless you include a license that specifies otherwise, nobody else can use, copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation. Once the work has other contributors (each a copyright holder), “nobody” starts including you.

Also note that I can add a license in the future if it would be relevant to the needs of this project.

## Disclaimers

**The application that this project contains is an example application that is not intended to be run.** Its purpose is only to show code that is known to work. While probably nothing dangerous would happen, you may run it only under your own responsibility.

Although I have made efforts to make it work as intended and described, it is not a "professional" application. It was tested only with an amateur set of unit tests and only on one platform. For details on the platform, see the section "[Environment, tools and technologies used](#environment-tools-and-technologies-used)" below.

## How does this application work?

This application is able to do three things:
- to check whether the given string is a bracket string;
- to benchmark particular validation methods that it facilitates;
- `DEPRECATED`\* to unit-test particular validation methods that it facilitates.

Checking the string (speaking differently, validating the string) may be performed using one of several methods that this application facilitates. Nonetheless, each of them shall return the same results for the same parameter, i.e., they have the same logic.

In case of both benchmarking and unit-testing, the user may provide their file with custom data – respectively, benchmark data and unit-test cases.

**_Note:_** _The purpose of implementing multiple methods with the same logic is to show that the author of this repository is able to write the same logic in different ways in JavaScript._

When benchmarking, the application generate benchmark data on the fly. When unit-testing, the application uses a predefined set of unit tests.

---

\* For details, see the documentation page for unit testing.

## Building

This application neither can be build (compiled, etc.), nor require it.

## Installation

This application neither can be installed (onto any platform), nor require it. However, to run, it requires the following software to be installed in the system:
1. The [Node.js environment](https://en.wikipedia.org/wiki/Node.js); its version should be 10.16.0 (optimal), or higher compatible; it must be in the `PATH` variable under the name `node`.
2. The [Bash interpreter](https://en.wikipedia.org/wiki/Bash_(Unix_shell)); its version should be `5.0.7(1)-release (x86_64-redhat-linux-gnu)` (optimal), or higher compatible; it must be in the `PATH` variable AND must be available under the path `/bin/bash`.

**_Tip:_** _For information about whether installation will be possible, or also required, in future releases, see the [corresponding issue](https://github.com/silvuss/silvuss-bracket-string-validator/issues/2#issue-467473279)._

## Usage

There are two interfaces provided within this project that allow to use the library:
- a web interface (a web application);
- a CLI.

### Website

\[TODO\]

### CLI

**_Note:_** _To run through this interface, this application requires specific software to be installed. For details, see the section "[Installation](#installation)" above._

**_Note:_** _It is adviced to run this application in the same environment as it has been tested. In case of other environments this application may work properly, or its usage may cause unknown side effects, or it may not work at all. For details on the environment, see the section "[Environment, tools and technologies used](#environment-tools-and-technologies-used)" below. For more information about possible side effects, see the documentation page with caveats for running in different environments than advised. For information about compatibility of future releases with other environments, see the [corresponding issue](https://github.com/silvuss/silvuss-bracket-string-validator/issues/3#issue-467474906)._

1. Download the application sources (into whatever directory you like).
2. Install the required software (see [the section](#required-software) below).
3. From within the main directory of the application, execute one of the commands listed below.

**_Note:_** _Current release of this application can be run only in the terminal. For information about running possibilities in future releases, see the [corresponding issue](https://github.com/silvuss/silvuss-bracket-string-validator/issues/4)._

- To **validate** a string:
    ```
    app/cli/valbrstr validate [validation method ID] ["string to validate"]
    ```
    or equally
    ```
    app/cli/valbrstr v [validation method ID] ["string to validate"]
    ```

    Both arguments are optional.

    If no argument is given, the application assumes that the validation method is the stack list method, and that the string to validate is an empty string.

    If only the validation method ID is given, the application assumes that the string to validate is an empty string.

    If only the string to validate is given, the application assumes that the validation method is the stack list method.

- To **benchmark** a certain validation method that the application provides:
    ```
    app/cli/valbrstr run-benchmark [OWN_FILE_WITH_BENCHMARK_DATA]
    ```
    or equally
    ```
    app/cli/valbrstr b [OWN_FILE_WITH_BENCHMARK_DATA]
    ```

    The argument `OWN_FILE_WITH_BENCHMARK_DATA` is optional. If it is not provided, there are generated benchmark data.

    **_Note:_** _For details on benchmarking, see the page "[Benchmarking](https://github.com/silvuss/silvuss-bracket-string-validator/wiki/Benchmarking)" of the wiki._

- `DEPRECATED`\* To **unit-test** a certain validation method that the application provides:
    ```
    app/cli/valbrstr run-unit-tests [OWN_FILE_WITH_UNIT_TEST_CASES]
    ```
    or equally
    ```
    app/cli/valbrstr t [OWN_FILE_WITH_UNIT_TEST_CASES]
    ```

    The argument `OWN_FILE_WITH_UNIT_TEST_CASES` is optional. If it is not provided, there are used predefined unit test cases.

    **_Note:_** _For details on unit-testing, see the page "[Unit testing](https://github.com/silvuss/silvuss-bracket-string-validator/wiki/Unit-testing)" of the wiki._

---

\* For details, see the documentation page for "Unit testing".

**_Note:_** _For the list of all available validation methods and their IDs, see the documentation page for validation methods._

## Environments, tools and technologies used

### Environments and tools

- This application has been tested to work in the following environment:
    - **Processor's architecture:** `x86-64`
    - **Operating system:** Linux; distribution: Fedora 30; **kernel's version:** `5.1.15-300.fc30.x86_64`
    - **Bash version:** `5.0.7(1)-release (x86_64-redhat-linux-gnu)`
    - **Node.js version:** `v10.16.0`
    - **The [`LANG` variable](https://www.ibm.com/support/knowledgecenter/en/SSPREK_7.0.0/com.ibm.isam.doc_70/gsk_capicmd_user19.htm):** `en_US.utf8`

### Technologies and tools

- Markup languages:
    - [JSDoc](https://en.wikipedia.org/wiki/JSDoc)
- Programming languages:
    - [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))
    - [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- Runtime environments:
    - [Node.js](https://en.wikipedia.org/wiki/Node.js) – currently: the [CommonJS](https://en.wikipedia.org/wiki/CommonJS) module format; in the past: the [Node.js's experimental ECMAScript modules support](https://nodejs.org/api/esm.html)
- Data formats:
    - [JSON](https://en.wikipedia.org/wiki/JSON)
- Algorithms:
    - Validation algorithm is taken from [this post on the 4programmers.net forum](https://4programmers.net/Forum/C_i_C++/327138-sprawdzenie_czy_wyrazenie_jest_nawiasowe?p=1594101#id1594101).
- Standards:
    - [Semantic Versioning, v2.0.0](https://semver.org/spec/v2.0.0.html)
- Testing frameworks:
    - currently: [Jest](https://en.wikipedia.org/wiki/Jest_(JavaScript_framework)); in the past also: [Mocha](https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework))
- Continuous integration:
    - [Travis CI](https://en.wikipedia.org/wiki/Travis_CI)

## Sources

### Most helpful sources

Below are some of the sources that was helpful for me when developing this application. They are presented in no particular order. I tried to put in this section only the sources not already mentioned in the documentation.

- **The website of Lifewire:**
    - https://www.lifewire.com/pass-arguments-to-bash-script-2200571

- **The StackExchange network:**
    - https://unix.stackexchange.com/a/29620/238409
    - https://stackoverflow.com/a/8467449/4752834
    - https://askubuntu.com/a/503129
    - https://stackoverflow.com/a/192337/4752834
    - https://unix.stackexchange.com/a/188191/238409
    - https://unix.stackexchange.com/a/168259/238409
    - https://stackoverflow.com/a/36644558
    - https://stackoverflow.com/a/34358661
    - https://unix.stackexchange.com/q/210602
    - https://softwareengineering.stackexchange.com/q/231057
    - https://stackoverflow.com/q/1066572
    - https://stackoverflow.com/q/42179046
    - https://stackoverflow.com/q/10753288
    - https://stackoverflow.com/q/3812154
    - https://stackoverflow.com/q/47397208
    - https://stackoverflow.com/q/7163061
    - https://stackoverflow.com/q/37395114
    - https://stackoverflow.com/q/22009364
    - https://stackoverflow.com/q/19376648
    - https://stackoverflow.com/a/6482403
    - https://unix.stackexchange.com/q/280430
    - https://stackoverflow.com/q/7422072
    - https://stackoverflow.com/q/46653833

- **The Linux Documentation Project (LDP):**
    - https://www.tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_03.html
    - http://tldp.org/LDP/abs/html/here-docs.html
    - http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_01.html
    - http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-8.html
    - http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-6.html

- **The website of Computer Hope:**
    - https://www.computerhope.com/jargon/r/regular-file.htm

- **The NixCraft online community:**
    - https://www.cyberciti.biz/tips/bash-shell-parameter-substitution-2.html
    - https://www.cyberciti.biz/faq/bash-get-basename-of-filename-or-directory-name/

- **The Linux Information Project (LINFO):**
    - http://www.linfo.org/find_kernel_version.html

- **The website of Guilherme Oenning:**
    - https://goenning.net/2016/04/14/stop-reading-json-files-with-require/

- **Node.js's documentation:**
    - https://nodejs.org/api/esm.html
    - https://nodejs.org/api/fs.html
    - https://nodejs.org/api/assert.html
    - https://nodejs.org/api/modules.html
    - https://nodejs.org/api/child_process.html

- **npm's documentation:**
    - https://docs.npmjs.com/files/package.json#directories

- **The MDN web docs:**
    - https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators

- **JSDoc's documentation and issues:**
    - https://github.com/jsdoc/jsdoc/issues/1073
    - https://github.com/jsdoc/jsdoc/issues/14

- **Jest's documentation:**
    - https://jestjs.io/docs/en/getting-started.html
    - https://jestjs.io/docs/en/using-matchers#exceptions
    - https://jestjs.io/docs/en/setup-teardown
    - https://jestjs.io/docs/en/expect

- **Mocha's documentation:**
    - https://mochajs.org/#assertions
    - https://mochajs.org/#installation
    - https://mochajs.org/#getting-started
    - https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically
    - https://mochajs.org/#reporters
    - https://mochajs.org/#command-line-usage

- **Christopher Hiller's blog:**
    - https://boneskull.com/mocha-v6/#things-to-know-about-options

- **GitHub's documentation:**
    - https://help.github.com/en/articles/closing-issues-using-keywords

- **Adrian Mejiha's blog:**
    - https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/#Exports

- **Travis CI's documentation:**
    - https://docs.travis-ci.com/user/status-images/

- **The Atlassian's Git tutorial:**
    - https://www.atlassian.com/pl/git/tutorials/inspecting-a-repository/git-tag

- **The Linux `info` pages:**
    - `info bash`

- Various Linux `man` pages.

- **Vim Tips Wiki:**
    - https://vim.fandom.com/wiki/Moving_lines_up_or_down

- **The website of Grammarly:**
    - https://www.grammarly.com/blog/comma-before-but/

### Other useful sources

I tried to put in this section only the sources not already mentioned in the documentation. Given in no particular order.

- **The website of Stackify:**
    - https://stackify.com/unit-testing-basics-best-practices/

- **The IBM Developer portal:**
    - https://developer.ibm.com/tutorials/learn-nodejs-unit-testing-in-nodejs/

- **Wikipedia:**
    - https://en.wikipedia.org/wiki/Domain-specific_language

- **The 2ality blog:**
    - https://2ality.com/2018/12/nodejs-esm-phases.html

- **Nicholas C. Zakas's blog:**
    - https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/

- **Travis CI's documentation:**
    - https://changelog.travis-ci.com/npm-ci-support-62786 (thanks to [this comment on a Travis CI's issue](https://github.com/travis-ci/travis-ci/issues/10113#issuecomment-421121316))
    - https://docs.travis-ci.com/user/languages/javascript-with-nodejs/#npm-ci-support

- **npm's documentation:**
    - https://docs.npmjs.com/cli/ci.html

## Credits

- Thanks to the user [Mr.YaHooo](https://4programmers.net/Profile/70446), the author of [this post on the 4programmers.net forum](https://4programmers.net/Forum/C_i_C++/327138-sprawdzenie_czy_wyrazenie_jest_nawiasowe?p=1594101#id1594101), for providing the validation algorithm (originally written in C).
- Thanks to a user of the forum 4programmers.net for providing the idea of handling multiple bracket types (instead of brackets of one type, as I have read the original idea). Unfortunately, I do not remember their nickname. Sorry. :| If you think that you might be this user, please create an issue.

## Details

For other information about this website, see the documentation in the directory `/docs` of this project.