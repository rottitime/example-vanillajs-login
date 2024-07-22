HTML/CSS first, accessible and progressively enhanced login page and homepage header that indicates login status.

## Instructions

1. Install [Docker](https://docs.docker.com/engine/install/)
2. Run `docker compose up`
3. Go to https://localhost:3000

Userneme is "test@example.com"
Password can be anything

## Benefits

- Mobile first approach - This is the best practice and considers all devices early in development
- Design system concept - coded with config, theme, layout and component structure. A light example of how I would break down code in [Atomic Design](https://medium.com/galaxy-ux-studio/principles-of-atomic-design-7b03a30c3cb6)
- Latest ECMAScript 2023 features such as module based JS. Ideally I would setup babel to convert this for older browsers/devices
- php docker for easy simple install
- Ajax integration for web components - SPA approach provide much smoother experience for the user and also a performance boost as not loading all page asset with each reload
- NPM setup and usuage (for prettier) without impacting production files and breaking exercise requirements.
- Latest CSS features e.g. Native nested CSS, layout props, css vars
- Frontend validation for instant feedback. Fallback to backend validation
- Variable/config based CSS - for DRY practices and future changes can be implemented across one config file instead of multiple 
- Graceful degradation for older browsers: I have opted for extended Webcomponents instead of creating my own unique tags. This means the html will still render but if JS is enabled then it will provide a more rich experience
- Accessibility - although limited due to small pages. Accessibility tested across reporting suite, tabbing, label controls, clear user of HTML elements `header`, `nav`, `main` etc

## Out of scope

Timeboxed to few hours. If I had longer I would like to add:

- Much better design :)
- Accessibility demonstartion of another component. E.g. Accordion (my previos [code](https://i-dot-ai.github.io/etf/?path=/story/components-accordion--standard)) to show use of `aria-controls`, `aria-expanded`, `role`. With JS disabled this would be presented as a expanded list
- [Jest](https://jestjs.io/) unit testing
- Storybook to document design system elements
- Pollyfill for older browsers e.g. nested CSS
- Typescript
- Single page behaviour but with Graceful degradation for older browsers
- Setup pipeline for automatic security patches (dependabot), unit test checker, pull requests, storybook/document automatic deployment

---

## Links

My other examples of frontend work with graceful degradation

- o2 website with heavy animation and effects. But will degrade to simple html bullet list for search engine optimisation and older devices: https://www.youtube.com/watch?v=kvthDObDm7U&t=12s&ab_channel=londonbrawler

- Hear Colours: http://hearcolours.com/site/ behaves like popular single page frameworks (e.g. React). Animations, integrated scrollbars which all still work for Javascript disabled
