## Summary

This is a demo app that has todo-list functionality.

### Dependencies

This app uses express + postgraphile + next.js.

You need to have postgres database set up and running.
You may find pgsql dump file in `./server/db/create.pgsql`.

To restore make sure you have database called `shasher` and run `psql shasher < ./server/db/create.pgsql`

### Setup

0. Run `nvm use` to switch to project node
1. Run `yarn` to install dependencies and generate .env file.
1. Run `yarn start` to run application.
1. Go to `http://localhost:3001` using your favorite browser.
