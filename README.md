# Dodo Rampup

## Install Dependencies

**Pre-requisites:**
- You have [NodeJS](https://nodejs.org/en/) installed.

If you are running the application behind SAP's network (*i.e. VPN or Corporate network*), set *npm*'s proxy first:

```sh
npm config set https-proxy http://proxy:8080/
```

Then, install the project's dependencies with this command:
```sh
npm install
```

## Run
To start the frontend application, run the follow command:

Outside SAP Proxy:
```sh
grunt serve
```

Behind SAP Proxy:
```sh
grunt serve --proxy
```
