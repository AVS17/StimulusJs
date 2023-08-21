import { Controller } from '@hotwired/stimulus';

class HelloController extends Controller {
    connect() {
        console.log("Hola mundo");
        this.element.innerHTML = "Hello World";
    }
}

export default HelloController;