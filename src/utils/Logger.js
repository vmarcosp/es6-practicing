export default class Logger {
    static info(content){
        const container = document.getElementById('container');
        container.innerHTML = content;
    }
}