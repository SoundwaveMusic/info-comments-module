
import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 500,
  duration: "30s"
};

export default function () {
  let res = http.get("http://localhost:4000/stress");
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 500
  });
}