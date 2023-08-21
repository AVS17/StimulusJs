import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['passwordInput'];

    toggle() {
        if (this.passwordInputTarget.type === "password") {
            this.passwordInputTarget.type = "text";
        } else {
            this.passwordInputTarget.type = "password";
        }
    }
}