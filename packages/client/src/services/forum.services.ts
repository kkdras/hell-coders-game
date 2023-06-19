import { forumAxios } from "../http-common";


class ForumDataService {
  getAll() {
    return forumAxios.get("/topics");
  }


}

export default new ForumDataService();
