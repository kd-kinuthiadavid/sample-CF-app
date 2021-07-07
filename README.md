# sample-CF-app

## Getting Started
### Prerequisites
- A firebase account and a firebase project
- Firebase prerequisites:
    - install firebase tools

    ```npm install -g firebase-tools```
    - login to firebase

    ```firebase login```

    - list your projects

    ``` firebase projects: list```
    - use the correct project

    ```firebase user <project_id>```

### Running the app
- clone the repo:

```https://github.com/kd-kinuthiadavid/sample-CF-app.git```

- go to thr functions folder, install deps and run the backend:

```cd functions && npm i && firebase emulators:start```

- the firestore and functions services should be available in `localhost:5001` and `localhost:8080` respectively.

- optionally, deploy the functons

```firebase deploy --only functions```

- the frontend should be available in `localhost:3000`

- navigate to the frontend folder, install deps and run the frontend

```cd .. && cd sample-frontend && yarn && yarn start```


### Testing
- to test the backend, you can make requests against the cloud functions using a third party service such as insomnia or postman like you would any other API request:
    - E.g, to test the `addMessageCallable` function, you'll make a POST request against `(http://localhost:5001/sample-cf-app/us-central1/addMessageCallable` ( or the deployed version of it ) with the a sample payload such as `{
	"data": {
		"text": "test-callable"
	}
}`
