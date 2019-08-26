use tera::{Tera, Context, compile_templates};
use actix_web::{http, server, App, error, HttpResponse, Path, State};
use serde_derive::*;

struct AppState {
    template: Tera,
}

#[derive(Deserialize)]
struct HelloPath {
    name: String,
}

fn hello_template (
    app: State<AppState>,
    path: Path<HelloPath>,
) -> Result<HttpResponse, error::Error> {
    let mut context = Context::new();
    context.insert("name", &path.name);

    let body = app
        .template
        .render("index.html.tera", &context)
        .map_err(|e| error::ErrorInternalServerError(format!("{}", e)))?;

    Ok(HttpResponse::Ok().body(body))
}

fn main() {
    server::new(|| {
        let app = AppState {
            template: compile_templates!("templates/**/*"),
        };
        App::with_state(app).route("/{name}", http::Method::GET, hello_template)
    })
    .bind("localhost:3000")
    .expect("Can not bind to port 3000")
    .run();
}
