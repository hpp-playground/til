fn main() {
    println!(
        "半径{:.1}, 円周率{:.3}, 面積{:.4}",
        3.2,
        std::f64::consts::PI,
        3.2f64.powi(2) * std::f64::consts::PI,
    );
}
