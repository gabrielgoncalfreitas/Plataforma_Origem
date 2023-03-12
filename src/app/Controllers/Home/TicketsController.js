import formGetAll from "../../Helpers/Form";
import requestPost from "../../Helpers/Requests";
import { api } from "../../../router/api";

class TicketsController {
    async criarTicket(event) {
        await requestPost(api.home.criarTicket.path, formGetAll(event)).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.error(error);
        });
    }
}

export default TicketsController;