use actix_web::{Error, FromRequest, Path}
use serde_derive::*;

#[derive(Deseerialize)]
struct HelloPath {
    name: String,
}

fn hello_name(to: Path<HelloPath>) -> impl Responder {
    format!("Hello {}!", &to.name)
}

