**This project is built upon [this](https://github.com/lxieyang/chrome-extension-boilerplate-react) boilerplate by [Michael Liu](https://lxieyang.github.io/).**

### I've made the following changes as per my requirement:

- Removed the NewTab configs from `webpack.config.js`
- Add `src/App` that contains the widget that'll appear on bottom-right on allowed pages
- It's embedded inside an iframe, on `src/Content/index.js`

Run `yarn start` to begin.

![Running app on chrome browser](https://pbs.twimg.com/media/Erb6W9HVgAA37Wd?format=jpg&name=large)

More ref embedding iframes: [Twitter thread](https://twitter.com/heytulsiprasad/status/1348540910561153025)
