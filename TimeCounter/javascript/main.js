import { Application } from "@hotwired/stimulus"
import HelloController from "./controllers/hello_controller.js";
import TimerController from "./controllers/timer_controller.js";
window.Stimulus = Application.start()

Stimulus.register("hello", HelloController);
Stimulus.register("timer", TimerController);