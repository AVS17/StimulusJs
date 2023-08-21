import { Application } from "@hotwired/stimulus"
import PasswordValidatorController from "./controllers/password_validator_controller.js";
import TogglerViewController from "./controllers/toggler_view_controller.js";
window.Stimulus = Application.start()


Stimulus.register("validator", PasswordValidatorController);
Stimulus.register("toggler", TogglerViewController);
