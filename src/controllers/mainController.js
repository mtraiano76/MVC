const mainController = {

    renderHome(req,res){ 
        //desde el router (archivo app.js) le paso req res a controlador 
        //y controlador controla lo que pasa
        return res.send("Los Ositos Mimositos")
    }
}
module.exports = mainController
//como linkeo desde el routes al controlador? creo una constante en app.js que lo requiera (require)