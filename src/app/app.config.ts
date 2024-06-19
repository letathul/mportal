import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { jobReducer } from './job/job.reducer';
import { EffectsModule } from '@ngrx/effects';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';

export const firebaseCon = {
  projectId: 'jobportal-19207',
  appId: '1:971092996730:web:4181cad5631c936d8b41c3',
  storageBucket: 'jobportal-19207.appspot.com',
  apiKey: 'AIzaSyAqbKuPOJALbmJsLVnZMVdxB5-himlUtJ0',
  authDomain: 'jobportal-19207.firebaseapp.com',
  messagingSenderId: '971092996730',
};

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      StoreModule.forRoot({}),
      StoreModule.forFeature('mportal', jobReducer),
      EffectsModule.forRoot([])

      // EffectsModule.forFeature(ShopListEffects),
    ),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseCon)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
