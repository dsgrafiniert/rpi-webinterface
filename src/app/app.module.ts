import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormsModule } from 'ng5-validation';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TsFieldComponent } from './components/settings/ts-field/ts-field.component';
import { InternetComponent } from './components/internet/internet.component';
import { LogComponent } from './components/log/log.component';
import { MeasurementComponent } from './components/measurement/measurement.component';
import { SensorsComponent } from './components/sensors/sensors.component';
import { ThingspeakComponent } from './components/thingspeak/thingspeak.component';
import { MQTTComponent } from './components/mqtt/mqtt.component';

import { WittypiComponent } from './components/wittypi/wittypi.component';
import { UpdateComponent } from './components/update/update.component';
import { OfflineComponent } from './components/offline/offline.component';
import { GpioFieldComponent } from './components/settings/gpio-field/gpio-field.component';
import { WeightCalibrationComponent } from './components/sensors/weight-calibration/weight-calibration.component';
import {MiscellaneousComponent} from "./components/miscellaneous/miscellaneous.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/translations_', '.json');
}

const appRoutes: Routes = [
  { path: '', component: SettingsComponent },
  { path: '**', redirectTo: '/' } // PageNotFound
];


@NgModule({
    declarations: [
        AppComponent,
        SettingsComponent,
        NavbarComponent,
        FooterComponent,
        TsFieldComponent,
        InternetComponent,
        LogComponent,
        MeasurementComponent,
        SensorsComponent,
        ThingspeakComponent,
        MQTTComponent,
        WittypiComponent,
        UpdateComponent,
        OfflineComponent,
        GpioFieldComponent,
        WeightCalibrationComponent,
        MiscellaneousComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
