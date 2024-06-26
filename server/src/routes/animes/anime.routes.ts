import { Router } from "express";
import {
  episode,
  info,
  movies,
  popular,
  recents,
  recommendations,
  searched,
  stream,
  trending,
} from "../../controllers/anime.controller";

export default (router: Router) => {
  router.get("/api/trending", trending);
  router.get("/api/popular", popular);
  router.get("/api/info", info);
  router.get("/api/episode", episode);
  router.get("/api/episode-streaming", stream);
  router.get("/api/search", searched);
  router.get("/api/recommendations", recommendations)
  router.get("/api/recents", recents)
  router.get('/api/movies', movies)
};
