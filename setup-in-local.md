# How to Setup the local development environment?
### Step 1 
Fork this repository by clicking the fork button.
![image](https://github.com/user-attachments/assets/7b4272f8-38a5-46dd-a2c4-c9924326bbe5)
Proceed by accepting the default repo name.

`This will create a copy of the project in your account.`

### Step 2
Visit the forked repository, it would should be at `github.com/<your github username>/<forked repo name, mostly craftfolio>`

### Step 3
Run the following command in your git bash/terminal 
```bash
git clone <github forked repo http url>
```
- you can get your forked repo link by clicking on the green code button.
![image](https://github.com/user-attachments/assets/2cca957d-8400-4763-a600-1b9de62e5745)

# Setting up the dev environment.
### Step 4
After successfully cloning the project, by following the previous steps you should have a folder with the `forked repo name in this case craftfolio` in the directory your chose to run the command in step 3.
Open the project in VS Code or your code editor.

### Step 5 (Installing dependicies)
```bash
npm install
```
Run the above command to install dependencies, in the project root folder.

### Step 6 (Setting up Authentication using Clerk)
Create your account on [clerk](https://dashboard.clerk.com/sign-in?sign_in_force_redirect_url=https%3A%2F%2Fdashboard.clerk.com&redirect_url=https%3A%2F%2Fclerk.com%2F)
- setup your project.
- Copy your clerk auth api keys.
```bash
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_***
  CLERK_SECRET_KEY=sk_test_***
```
Above is an example of what they must look like in your `.env.local` fine

### Step 7 (Setting up Firebase)
Create a firebase account if you don't have one, create a project in firebase for WebApp.
- You need to setup/enable Firebase Firestore and Firebase Real time database.

Copy necessary api keys they must look something like this in your .env.local file.
```bash
  NEXT_PUBLIC_FIREBASE_API_KEY=***
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=***
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=***
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=***
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=***
  NEXT_PUBLIC_FIREBASE_APP_ID=***
```
### Step 8 (Setup Auth URLs)
Last step would be to add Clerk helper redirect URLs
```bash
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/my-portfolio
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/my-portfolio
```
- Copy and paste them exactly in your `.env.local` file.
- This is how your .env.local file should look like after everthing is done, [Sample ENV file](https://github.com/hi-Kartik2004/CraftFolio/blob/master/.env_sample)

### Step 9 (Spin/run the app)
Inorder to spin/run the application locally, you need to run the following command in your terminal.
```bash
  npm run dev
```


