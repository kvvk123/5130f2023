const firebaseConfig = {
    apiKey: "AIzaSyD18Ym-VxP17wNLJkJa3TUCMAhqOruhEFk",
    authDomain: "internet-web-systems.firebaseapp.com",
    databaseURL: "https://internet-web-systems-default-rtdb.firebaseio.com",
    projectId: "internet-web-systems",
    storageBucket: "internet-web-systems.appspot.com",
    messagingSenderId: "438203201441",
    appId: "1:438203201441:web:7041766ab7ccd433d53de0",
    measurementId: "G-SBNJ7ZWZNV"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
var detailsFormDB = firebase.database().ref('detailsForm');

// Reference to Firebase Storage
var storage = firebase.storage();

// Handle form submission
document.getElementById('detailsForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var phonenumber = getElementVal("phoneNumber");
    var emailId = getElementVal("emailId");
    var currentLocation = getElementVal("currentLocation");
    var desiredLocation = getElementVal("desiredLocation");
    var origin = getElementVal("origin");
    var familyOrigin = getElementVal("familyOrigin");
    var birthPlace = getElementVal("birthPlace");
    var education = getElementVal("education");
    var occupation = getElementVal("occupation");
    var awardsAchievements = getElementVal("awardsAchievements");
    var languages = getElementVal("languages");
    var hobbies = getElementVal("hobbies");

    // Get the file input element
    var fileInput = document.getElementById("fileInput");
    var file = fileInput.files[0];

    if (file) {
        // Upload the file to Firebase Storage
        var storageRef = storage.ref("uploads/" + file.name);
        var task = storageRef.put(file);

        // Listen for state changes, errors, and completion of the upload.
        task.on(
            "state_changed",
            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + percentage + "% done");
            },
            function error(err) {
                console.error("Error uploading file:", err);
            },
            function complete() {
                console.log("File uploaded successfully!");
                // Get the download URL for the uploaded file
                storageRef
                    .getDownloadURL()
                    .then(function (downloadURL) {
                        // Save the user's information, including the file URL, to the database
                        saveMessages(
                            name,
                            phonenumber,
                            emailId,
                            currentLocation,
                            desiredLocation,
                            origin,
                            familyOrigin,
                            birthPlace,
                            education,
                            occupation,
                            downloadURL,
                            awardsAchievements,
                            languages,
                            hobbies,
                        );
                    })
                    .catch(function (error) {
                        console.error("Error getting file download URL:", error);
                    });
            }
        );
    } else {
        // If no file was selected, save user information without a file URL
        saveMessages(
            name,
            phonenumber,
            emailId,
            currentLocation,
            desiredLocation,
            origin,
            familyOrigin,
            birthPlace,
            education,
            occupation,
            null,
            awardsAchievements,
            languages,
            hobbies,
        );
    }
    document.getElementById('detailsForm').reset();
}

// Function to save user information to the database
const saveMessages = (
    name,
    phonenumber,
    emailId,
    currentLocation,
    desiredLocation,
    origin,
    familyOrigin,
    birthPlace,
    education,
    occupation,
    fileUrl,
    awardsAchievements,
    languages,
    hobbies
) => {
    var newDetailsForm = detailsFormDB.push();

    newDetailsForm.set({
        name: name,
        phonenumber: phonenumber,
        emailId: emailId,
        currentLocation: currentLocation,
        desiredLocation: desiredLocation,
        origin: origin,
        familyOrigin: familyOrigin,
        birthPlace: birthPlace,
        education: education,
        occupation: occupation,
        fileUrl: fileUrl, // Include the file URL in the database
        awardsAchievements: awardsAchievements,
        languages: languages,
        hobbies: hobbies
    });
};

function resetFormFields() {
    document.getElementById("name").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("emailId").value = "";
    document.getElementById("currentLocation").value = "";
    document.getElementById("desiredLocation").value = "";
    document.getElementById("origin").value = "";
    document.getElementById("familyOrigin").value = "";
    document.getElementById("birthPlace").value = "";
    document.getElementById("education").value = "";
    document.getElementById("occupation").value = "";
    document.getElementById("resumeInput").value = "";
    document.getElementById("awardsAchievements").value = '';
    document.getElementById("languages").value = '';
    document.getElementById("hobbies").value = '';
  }

const getElementVal = (id) => {
    return document.getElementById(id).value;
};