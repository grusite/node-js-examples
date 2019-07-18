"use strict";
const EVENT_LLAMADA_TELEFONO = "Llamada de telefono";

// Crear emisor de eventos
const EventEmitter = require("events");

const emisor = new EventEmitter();

// Actuar ante un evento (nos subscribimos)
emisor.on(EVENT_LLAMADA_TELEFONO, info => {
  if (info.llamante === "madre") {
    return;
  }
  console.log("ring ring");
});

emisor.on(EVENT_LLAMADA_TELEFONO, () => {
  console.log("brrr brrr");
});

// Emitimos eventos
emisor.emit(EVENT_LLAMADA_TELEFONO, { llamante: "madre" });
emisor.emit(EVENT_LLAMADA_TELEFONO, { llamante: "padre" });
