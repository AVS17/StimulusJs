import { Controller } from '@hotwired/stimulus';
import { passwordStrength } from 'check-password-strength';

export default class extends Controller {
    static targets = ['passwordInput', 'passwordMessage'];
    static classes = ['success', 'warning'];


    passwordChanged() {
        let newPassword = this.passwordInputTarget.value;
        let validationMessage = passwordStrength(newPassword).value;
        this.passwordMessageTarget.innerHTML = this.translateMessage(validationMessage);
        this.applyStyles(validationMessage)
    }

    applyStyles(passwordValidation) {
        this.passwordMessageTarget.classList.remove(this.successClass, this.warningClass);
        if (passwordValidation === "Strong") {
            this.passwordMessageTarget.classList.add(this.successClass);
        } else {
            this.passwordMessageTarget.classList.add(this.warningClass);
        }
    }

    translateMessage(originalMessage) {
        switch (originalMessage) {
            case "Too weak":
                return "La contraseña es muy débil";
            case "Weak":
                return "La contraseña es débil"
            case "Medium":
                return "La contraseña es aceptable"
            case "Strong":
                return "La contraseña es segura"
        }
    }
}