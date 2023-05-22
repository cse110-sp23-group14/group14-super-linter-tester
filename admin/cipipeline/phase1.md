# CI/CD Pipeline Phase 1

## What is currently functional
- Homepage 
- Settings Page Button

## What is Planned/In Progress
- Learn more page
- Check your compatability 
- Your horoscope is ... 

![CICD Pipeline Diagram](phase1.png)
<!---  Use phase1.png, phase1.drawio.png doesn't have some icons show up for some reason, and if you want to make edits, export as .drawio file and import into https://app.diagrams.net/ -->

## linting and code style enforcement
We are using VSCode for linter...

## code quality via tool
We are using CodeClimate to enforce code quality. It will help us to write pure code, which will be easy-to-read and have practical results. 

## code quality via human review
We are also checking code quality manually. For example, PULL REQUESTS. 

## unit tests via automation
We are using Jest to write our unit tests. It is important to write unit tests to make sure our code works as expected. We need to make sure there are no bugs, edge cases, or other bad things that the user could encounter. 

## documentation generation via automation
We are using JSDocs to automatically generate documentation for all `.js` file in `sources` and save the documentation to a new branch called `documentation`. It's important to keep documentation for our code because it increases readability and extensibility, and automating this process can save a lot of time.


