import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Settings} from "../../models/settings.model";
import {AppService} from "../../services/app.service";
import {FormControl} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-mqtt',
  templateUrl: './mqtt.component.html',
  styleUrls: ['./mqtt.component.css']
})
export class MQTTComponent implements OnInit {

  public mqttUrlPattern = new RegExp('https?://.+');
  public mqttUrlPattern2 = '^(?:(?:(?:[a-zA-z\\-]+)\\:\\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9-\\.]){1,61}[a-zA-Z0-9](?:\\.[a-zA-Z]{2,})+|\\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\\]|(?:(?:[0-9]{1,3})(?:\\.[0-9]{1,3}){3}))(?:\\:[0-9]{1,5})?$';

  /* two-way databinding for settings*/
  _settings: Settings;
  @Input()
  set settings(val: Settings) {
    this.settingsChange.emit(val);
    this._settings = val;
  }
  get settings() {
    return this._settings;
  }
  @Output()
  settingsChange: EventEmitter<Settings> = new EventEmitter<Settings>();

  constructor(private appService: AppService, private translate: TranslateService) { }

  ngOnInit() {
  }

}
