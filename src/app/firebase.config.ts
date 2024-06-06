import { ApplicationConfig } from "@angular/core";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { getFirestore,provideFirestore } from "@angular/fire/firestore";
import { getAuth, provideAuth } from "@angular/fire/auth";

export const appConfig: ApplicationConfig = {
    providers: [
        provideFirebaseApp(() => initializeApp({})),
        provideFirestore(() => getFirestore()),
        provideAuth(() =>getAuth())
    ]
}