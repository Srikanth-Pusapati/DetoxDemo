#Steps to create

$ create-react-native-app DetoxDemo


#Goto the Expo app home page using https://expo.io/tools and download the Expo Client clicking on the link Download IPA 2.X.X
Note: Create a folder by name bin/ in our react-native project and place the Expo package that we downloaded in it.
Also, rename the package to 'Exponent.app' even though its a folder containing other files.


#Downloaded Dependencies

"expo": "^27.0.1",

"react": "16.3.1",

"react-native": "~0.55.2"

#Downloaded Devdependencies

 "detox": "^8.0.0",
 
 "detox-expo-helpers": "^0.2.0",
 
 "jest-expo": "~27.0.0",
 
 "mocha": "^5.2.0",
 
 "react-native-scripts": "1.14.0",
 
 "react-test-renderer": "16.3.1"
 
#Global Installations

  "Node":8.11.3
  
  "exp":55.0.5 
  

 #Execution using 
 
 $ npm install  //make sure all the dependencies are installed
 
 $ exp start
 
 In another terminal 
 
 $npm run e2e  //were e2e is the detox test cases
 
