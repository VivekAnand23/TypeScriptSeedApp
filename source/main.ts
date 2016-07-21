///  <reference path="../typings/jquery/jquery.d.ts" />

import * as $ from "jquery";
import Greeter from "./entities/greeter";

let greeter = new Greeter("Anand!");
let msg = greeter.greet();

$("h1").html(`<h1>${msg}</h1>`);
document.getElementById("msg").innerHTML = `<b>${msg}<b>`;
