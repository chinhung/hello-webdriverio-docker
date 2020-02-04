## About
WebdriverIO is a test automation framework. In this repository, a web End-to-End testing will be run with Docker Service.

## Setup
1. Install and manage driver and Selenium server by webdriver-manager:
    ```sh
    npm install -g webdriver-manager
    webdriver-manager update
    webdriver-manager start
    ```
2. Install the Node.js modules:
    ```sh
    cd /path/of/this/repo
    npm install
    ```

## Run Test
```sh
npm test
```

## Future Work
- Dockerize this application.
- Integrate with CI system.

## Reference
- https://webdriver.io/docs/wdio-docker-service.html
- https://eden-liu.com/devops/webdriverio-with-ci/
- https://ithelp.ithome.com.tw/articles/10204846