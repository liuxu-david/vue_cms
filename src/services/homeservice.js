import request from "./index";

export function getUser() {
  return request({
    url: "/get",
  });
}
