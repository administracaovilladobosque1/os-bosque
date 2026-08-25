// Importações corretas (SDK modular via CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Config do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyADhfE-wSVzQrRRNmAq0a08wAyWU892Tko",
  authDomain: "bosque-condominio.firebaseapp.com",
  projectId: "bosque-condominio",
  storageBucket: "bosque-condominio.firebasestorage.app",
  messagingSenderId: "175778227305",
  appId: "1:175778227305:web:b0261060c47441cabdeef8"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Serviços que você vai usar
const auth = getAuth(app);
const db = getFirestore(app);

// Exporta para os outros arquivos
export { auth, db };