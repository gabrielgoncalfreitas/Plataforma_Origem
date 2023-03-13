import formGetAll from "../../Helpers/Form";
import requestPost from "../../Helpers/Requests";
import { api } from "../../../router/api";

class SprintsController {
    async criarSprint(event) {
        await requestPost(api.sprints.criarSprint.path, formGetAll(event)).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.error(error);
        });
    }
}

export default SprintsController;