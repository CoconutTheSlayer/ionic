import { KeysPipe } from './../pipes/keyvalue.pipe';
import { NoteEditPage } from './../pages/note-edit/note-edit';
import { NoteListPage } from './../pages/note-list/note-list';
import { NoteDetailPage } from './../pages/note-detail/note-detail';
import { NoteCreatePage } from './../pages/note-create/note-create';
import { LoaderComponent } from './../components/loader/loader.component';
import { NotesService } from './../providers/notes/notes.service';
import { DataService } from './../providers/data.service';
import { NoteDataService } from './../providers/notes/notes.data.service';
import { NoteEffects } from './../providers/notes/notes.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { notesReducer } from './../providers/notes/notes.reducer';
import { NgModule, ErrorHandler } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    NoteCreatePage,
    NoteDetailPage,
    NoteListPage,
    NoteEditPage,
    LoaderComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({ notes: notesReducer }),
    EffectsModule.forRoot([NoteEffects]),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25 //  Retains last 25 states
    // }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NoteCreatePage,
    NoteDetailPage,
    NoteListPage,
    LoaderComponent,
    NoteEditPage,
  ],
  providers: [
    SplashScreen,
    StatusBar,
    DataService,
    NotesService,
    NoteDataService,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
