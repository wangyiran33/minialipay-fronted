import request from "../util/request";

class ExampleService {
  sendExampleRequest(param) {
    return request("example", {param});
  }
}

export default new ExampleService();