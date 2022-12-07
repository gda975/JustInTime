# JustInTime
Just In Time Application for UNC Nursing Staff and UNC Center for Nursing Excellence

This is a mobile app where users (nurses) can receive useful information updates such as policy changes, new resources, and other information that is necessary for them to perform their job. Administrators can use the admin portal to add new posts to send to the nurse users. 

# Admin Portal
Link to admin: https://just-in-time-5698c.web.app

# Download and Usage
Adminstrators can login to the website through the link above using any web browser and add, change, and remove posts. Administrator accounts need to be given access through the Firebase console and request can be accessed by emailing sirducanhpro@gmail.com.<br>
The mobile app is currently not deployed and needs to be deployed to the app store or some other platform to download. In the meantime, the app can be run by pulling the repository and then run through the Expo Go app. Instructions on how to setup Expo Go can be found <a href='https://docs.expo.dev/get-started/installation/'>here</a> by first following the "Installation" guide and then "Create your first app". <br>

A video detailing how to set up and run the application can also be found <a>here</a>.

# App Details
![image](https://user-images.githubusercontent.com/49326544/206061285-b4039af6-e609-4ae0-8c45-5b4f669a4804.png)
![image](https://user-images.githubusercontent.com/49326544/206061340-a435720f-0f3e-4c32-b68c-7b2ce7a1a7c7.png)
![image](https://user-images.githubusercontent.com/49326544/206064078-6b399e2c-6ef3-4aac-bddd-c909c4469654.png)
![image](https://user-images.githubusercontent.com/49326544/206061378-b1269ef5-8207-433c-bbce-bbec75331620.png)

The app is written in JavaScript, with the React framework for the web admin portal and React Native for the app. It is compiled with Expo and has a Firebase Realtime Database back-end system used to query data.

To continue technical work on the project, you will need a web browser and a Simulator (preferably a macOS device with an iPhone available) with Expo Go downloaded on the phone. Node.js will be needed for package installation. We recommend VSCode as the development environment of choice. After the cloned repository has been downloaded on the computer, you can open the folder in VSCode and run the command `npm ci --legacy-peer-deps` from the VSCode terminal to download the needed packages to run the application. This will need to be done within the proper directories, which means after `cd`ing into both the admin-app directory and the JustInTime Mobile App directory. Then, run the command `npm start` in both folders to run the respective apps. From the mobile app, a QR code can be scanned with a phone or opened with a simulator app, after which development can continue. 

# Web app details
![image](https://user-images.githubusercontent.com/49326544/206061845-110a6056-7c63-4fa6-b922-253fd7eb5a19.png)
![image](https://user-images.githubusercontent.com/49326544/206061918-45e402e0-0ffe-429f-8811-585a26857aac.png)

The web app is done in pure React.js and can be deployed from a local terminal. To do so, you need to have Firebase tools installed with `npm install -g firebase-tools`, `npm run build` to create a build directory, `firebase login` with your Firebase credentials, and lastly `firebase deploy`.

# App Hosting
If you want to deploy the app onto an App store, you will need to run a build process as described <a href="https://docs.expo.dev/archive/classic-updates/building-standalone-apps/">here</a>, which should automatically generate the ios and android directories. These can then be loaded with XCode or Android Studio to run and deploy them into apps that can then be hosted on the respective app stores. To do this, you will need to set up an iOS developer account and a Google developer account and go through an app verification process. 

Additionally, if you want to host videos within the app itself, you may need to purchase a different tier of cloud storage for video and resource hosting.

We do not expect any copyright, intellectual property, or HIPAA conflicts since the client mentioned that all data is publicly available and not linked to any patients.

# Future work
What's left to do? This app is relatively close to deployment - with another semester, it is very likely that this can become a fully functional and hosted application. 
* Notifications. Currently, our app does not have the ability to send push notifications. The next step regarding this involves configuring Firebase to send push notifications and have it be a programmatic option through the admin portal, to select whether a notification should be sent or not. Then, the mobile app needs to be configured to receive and update accordingly. To test this requires building the app and testing it outside of Expo Go, which we were unable to get to in Fall '22.
* Admin portal polishing. There needs to be added an option to store credentials into localStorage and provide the option to sign out, in addition to better validation and checks for security. The author tag should also update accordingly, with a username field added to the database admins
* Hosting resources. The app and backend can be configured to host resources such as PDFs or videos, potentially relying on FireStore for blob storage.
* Firebase analytics. The mobile app can be configured with Firebase analytics to get data on page views and app interaction. This can be a great way to understand how the app is being used.
* Creating developer Apple/Google accounts. This will be needed to host the app and let nurses download it.
* A more thorough testing suite. Currently, there are Jest tests that can be run with `npm test -- --watchAll` in the mobile app directory. However, navigation and interaction were harder to capture and test programatically, and will need more time to test and debug.

# Contact
If you have any issues or questions about further development/use, feel free to open a GitHub issue and reach out!

# Fake Logins
theosteiner@gmail.com <br>
lskmfdl <br> 

restrictedemail@gmail.com <br>
dweiufbewifbei <br>
