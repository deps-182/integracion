import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"chronos-3b2d2","appId":"1:695161160665:web:3b45c219710769d1a6cfc8","storageBucket":"chronos-3b2d2.appspot.com","apiKey":"AIzaSyBVEoHVTy6qAyEvxCqmbIX5r2zj60ddJ9c","authDomain":"chronos-3b2d2.firebaseapp.com","messagingSenderId":"695161160665"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
