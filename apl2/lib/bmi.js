class Calc_bmi {
    constructor(elems) {
        this.elems = elems;
    }
    getValue(w, h) {
        return {weight: parseFloat(w.value), height: parseFloat(h.value)};
    }
    get_bmi(values) {
        console.log(values);
        return new String((values.weight / Math.pow(values.height, 2)));
    }
    writeValue() {
        var bmi, values;
        values = this.getValue(this.elems.weight, this.elems.height);
        bmi = this.get_bmi(values);
        this.elems.result.textContent = bmi;
    }
    bind() {
        this.elems.exebtn.addEventListener("click", this.writeValue.bind(this));
    }
}
function dcl_bind() {
    var calculator, elems;
    elems = {weight: document.getElementById("weight"), height: document.getElementById("height"), result: document.getElementById("result"), exebtn: document.getElementById("execute")};
    calculator = new Calc_bmi(elems);
    calculator.bind();
}
document.addEventListener("DOMContentLoaded", dcl_bind);

//# sourceMappingURL=bmi.js.map
