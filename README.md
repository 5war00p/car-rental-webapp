# car-rental-webapp

This project is done as a Home Assignment for Krinati Solutions for Software Intern.


## API setup

Clone the repo using git cli command:
```
gh repo clone 5war00p/car-rental-webapp
```

Change working directory:

```
cd car-rental-webapp
```

Install all required packages:

```
npm i
```

**.env** (Environment Variables) configuration
```
API_PORT                        # port to run server
API_BIND_ADDR                   # binding address (if any) by default set to '0.0.0.0'
DB_URI                          # mongo DB_URI
```

to run in dev mode (it uses nodemon)
```
npm run dev
```

to run normal mode (it uses node)
```
npm run start
```
