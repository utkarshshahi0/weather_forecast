import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'current-weather',
    loadChildren: () => import('./current-weather/current-weather.module').then( m => m.CurrentWeatherPageModule)
  },
  {
    path: 'weather-forecast',
    loadChildren: () => import('./weather-forecast/weather-forecast.module').then( m => m.WeatherForecastPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
