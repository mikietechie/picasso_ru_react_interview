# Mini React Blog Application [Picasso Blog](https://picassorublog.web.app)

![Screenshot of the landing page](https://picassorublog.web.app/images/screenshot.png)

## Why I built this system

1. Completed in partial fullfillment of a Picasso.ru React developer interview. The app uses vite, typescript, react, react router dom, react-inifinite-scroll-component, SCSS and bootstrap 5
2. To demonstrate my knowledge about React and Rest API's

## Choice of libraries
1. I used React Router Dom since it is a fully clientside application and React Router Dom is the recommended library for React Routing.
2. I used Bootstrap because it provides developers with base CSS styles and utilities to make a decent looking User Interface quickly.
3. I used react-inifinite-scroll-component because it's simple and awsome that's all.
4. I did not use axios, because I am only making basic fetch requests with no further configurations in the app.
5. I did not use React Redux because I believe it is an Over Kill. React useState & useContext are enough for most if not all use cases.
6. I always use SCSS because it is super cool, and makes styles better understandable. To me it is what TypeScript is to JavaScript
7. I used TypeScript because the year is 2024
8. I used the FSD architecture for my project layout because it is scalable, maintainable and understandable since React unlike Angular, NestJS and Django it does not enforce a predifined structure

## Cool parts
1. /src/app/shared/service.ts
In this file I created a class `X` with static methods for all data fetching functionality required in the application.
2. /src/app/shared/types.ts
In this file I created interfaces for all data models required in this TypeScript React application
3. /src/app/widgets/ui/Layout.tsx
In this file I created a clean UI parent component for my entire web application
4. /src/app/pages/Home.tsx
In this file I created the Home Page component. It fetches and displays all posts and has the infinite scroll feature
5. /src/app/pages/Post.tsx
In this file I created the Post Page component. Using the React Router Dom parameters it gets a post id. With the post id it tries to fetch the post using the `X` class, if the post is not found it returns a 404 page, else it uses the post id to fetch the author and post comments. The post, author and comments are all displayed on this page

## Improvements
1. I could have used RTK Query for data fetching since it has bettor error, loading and state handling.
2. I could have used styled components
3. I could have taken out bootstrap and wrote my on CSS code
4. I could have asked my roommates for a UI review.
