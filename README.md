# little-paws


# link to android apk app.
- https://drive.google.com/drive/folders/1ecIV4EYbdHeMAUUcYJs9dtDOQp6cmlNm?usp=share_link

# env
- used yarn package manager.
- used xcode-simulators and macbook env to develop the app.
- not been tested on android, yet.

# how to run the project
- clone from github or download the zip file.
- cd into the project folder.
- type 'yarn' in the terminal/cmd and click enter to install packages.
- type 'yarn android' to run on android simulator or physical devices connected to laptop via a cable.
- type 'yarn ios' to run on xcode-simulators.

# how to use opt features.
- enter your phone number in the format 0xx xxx xxxx without spaces.
- the app will add country code.
- package for dealing with country code, was not working, but code is just commented out.


# issues.
- used twilio for server side, which gave me issues as it's required some modules that are not supported in client-side.
- the package that display the opt input as in the figma UI was not working, but commented out for further investigation



### Task Overview:
Your task is to develop a sign-up and login screen using OTP for a mobile
application. The designs have been provided in Figma, and your task is to implement
them using React Native. The app should allow users to sign up and log in using their
phone numbers, and verify their identity through OTP. You will be given 32 hours to
implement the functionality.
### Deliverables:
● A React Native project that implements the sign-up and login screens with
OTP verification.
● The project should be submitted as a GitHub repository with a detailed
README file that explains how to run the project, how to use the OTP
verification feature, and any other relevant details.
● A demo video or a set of screenshots showing the app in action.
### Requirements:
1. The app should have two screens, one for sign up and one for login, with a
consistent design.
2. Users should be able to enter their phone numbers in the sign-up and login
screens.
3. Users should be able to receive OTPs via SMS.
4. Users should be able to enter the OTP they receive in the app to verify their
identity.
5. Users should be able to resend OTPs if they don't receive them or if they enter
the wrong number.
6. The app should handle errors and provide appropriate feedback to the user.
7. The app should be optimized for different screen sizes and orientations.
8. The app should be compatible with iOS and Android devices.
