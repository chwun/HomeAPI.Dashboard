export interface TvRemoteData {
  routes: TvRemoteDataRoutes;
}

export interface TvRemoteDataRoutes {
  on: string;
  off: string;
  home: string;
  source: string;
  settings: string;
  back: string;
  ok: string;
  up: string;
  down: string;
  left: string;
  right: string;
  pause: string;
  play: string;
}
