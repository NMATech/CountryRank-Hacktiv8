
# COUNTRY RANK APP - HACKTIVE8 CAPSTONE

Name : Nadindra Maulana Aziz <br>
Program : ReactJS for FrontEnd Website

🌎 Country Rank Viewer <br>
This is a ReactJS application designed to display detailed information and ranking for countries worldwide. The app utilizes public APIs such as RestCountries API and NYTimes API to provide comprehensive data about countries, including population, region, and related news articles.


## Features

    1. Country Data Overview
        - Displays essential details like population, region, area, and capital city for each country.
        - Fetches country-specific data dynamically using RestCountries API.

    2. News Section
        - Retrieves and displays the latest news articles related to selected countries using the NYTimes API.

    3. Compare Country 
        - Compare two country data using RestCountries API.

    4. Interactive Globe Map
        - Visualize countries on an interactive map using react-simple-maps.

    5. Rank Countries by Population and Area
        - Sort countries based on their population or area size to view rankings in a clean, organized format.

    6. Responsive Design
        - Optimized for desktop, tablet, and mobile devices using modern tools like TailwindCSS.

## Tech Stack

This project utilizes a modern set of technologies and libraries to provide a seamless experience for users. Here's a breakdown of the key tools used:

- **[REACTJS](https://react.dev/)**: For building the UI with a component-based architecture.
- **[REDUX](https://redux.js.org/)**: To manage global state in the application.
- **[React Router DOM](https://reactrouter.com/)**: For navigation between different pages of the app.
- **[Tailwind CSS](https://tailwindcss.com/)**: For styling with utility-first CSS classes.
- **[Framer Motion](ramer.com/motion/)**: To add smooth animations and transitions to the app.
- **[React Simple Maps](https://www.react-simple-maps.io/)**: For interactive map visualizations to display geographical data.
- **[React Select](https://react-select.com/)**: For creating flexible and customizable dropdown menus and form elements.
- **[React Load Spinner](https://www.npmjs.com/package/react-loader-spinner)**: For displaying loading spinners while data is being fetched.
- **[SWIPER](https://swiperjs.com/react)**: To build interactive carousels for displaying content.
- **[D3-Geo](https://d3js.org/d3-geo)**: For working with geographic data and map visualizations.

These technologies enable fast, dynamic, and interactive experiences for users interacting with country rankings, news, and other data visualizations.

**Third Parties:** 
 - [REST COUNTRIES API](https://restcountries.com/)
 - [NYTIMES API](https://developer.nytimes.com/apis)

## Installation

Clone repository
```bash
  git clone https://github.com/NMATech/CountryRank-Hacktiv8.git
```

install depedencies
```bash
  npm install
```

rename .env-example to .env

get your own nytimes api-key from [here](https://developer.nytimes.com/apis)

run server
```bash
  npm run dev
```
    
## Authors

- [@nadindra](https://www.github.com/NMATech)

