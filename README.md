# little-paws


# link to add 
- https://drive.google.com/drive/folders/1ecIV4EYbdHeMAUUcYJs9dtDOQp6cmlNm?usp=share_link

# env
- i'm using yarn package manager.
- i used xcode-simulators and macbook env to develop the app.
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
- i was using twilio for server side, which gave me issues as it's required some modules that are not supported in client-side.
- 