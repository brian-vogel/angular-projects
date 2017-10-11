import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PrimeNG autocomplete fro search
import { AutoCompleteModule } from 'primeng/primeng';

import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';

import { ApiService } from './shared/api.service';
import { MusicService } from './shared/music.service';

@NgModule({
  imports: [
    FormsModule,
    AutoCompleteModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    // Expose components
    MusicSearchComponent,
    MusicDetailsComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    MusicFooterComponent,
  ],
  declarations: [
    // Declare components
    MusicSearchComponent,
    MusicDetailsComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    MusicFooterComponent,
  ],
  providers: [
    // Services
    ApiService,
    MusicService,
  ],
})
export class MusicModule { }
