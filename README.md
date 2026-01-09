🚌 RMKCET BUS TRACKER
Real-Time GPS-Based Bus Tracking for Students & Management

The College Bus Tracking System is a real-time location tracking platform that allows students to track their college buses live, reducing waiting time and improving safety.
The system uses GPS-enabled mobile devices and Firebase Realtime Database to provide accurate, live bus location updates.

🚀 Features
 Student Features
 Secure student login
 Track assigned bus in real time
 Search and track other buses by bus number

Live bus location on map

 Bus arrival & delay notifications

 Admin / Management Features

 Approve student accounts

 Manage buses & routes

 Assign drivers to buses

 View live status of all buses

 Driver Module

 GPS-based live location sharing

 Continuous updates to Firebase

🛠️ Tech Stack
Frontend

Flutter (Android & Windows)

React.js (Web version – optional)

Backend & Services

Firebase Authentication

Firebase Realtime Database

Firebase Cloud Functions (optional)

Maps & GPS

Google Maps API

Device GPS

📁 Project Structure
College-Bus-Tracking-System/
│
├── flutter_app/
│   ├── lib/
│   │   ├── models/
│   │   │   └── bus.dart
│   │   ├── screens/
│   │   └── services/
│   └── pubspec.yaml
│
├── web_app/                # React.js web version (optional)
│
├── firebase/
│   ├── firebase.json
│   └── database.rules.json
│
├── README.md
└── docs/

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/College-Bus-Tracking-System.git
cd College-Bus-Tracking-System

2️⃣ Firebase Setup

Create a Firebase project

Enable:

Authentication (Email/Password)

Realtime Database

Add Firebase config to the app

Create buses collection in database

3️⃣ Run Flutter App
cd flutter_app
flutter pub get
flutter run

4️⃣ Run Web App (Optional)
cd web_app
npm install
npm start

🧠 How It Works

Driver phone sends GPS location

Location is updated in Firebase Realtime Database

Student app fetches live data

Google Maps displays real-time bus movement

Notifications alert students of bus arrival

🎯 Use Cases

College & university transportation

Student safety & time management

Smart campus initiatives

Real-time fleet monitoring

 Future Enhancements

 Voice alerts (Tamil / English)

 Multi-language support

 iOS app support

 Route optimization

 Attendance marking via bus in-charge

 Offline fallback using last-known location

 Academic Use

This project was developed as part of a college academic project to solve real-world transportation challenges using modern technologies.

📜 License

This project is licensed under the MIT License.

👩‍💻 Author

Baargavi B
🎓 Engineering Student | 📱 Mobile App Developer
🚀 Smart Campus Solutions
