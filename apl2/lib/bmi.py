# -*- coding: utf-8 -*-

class Calc_bmi:
    def __init__ (self, elems):
        self.elems = elems

    def getValue (self, w, h):
        return {
            weight: parseFloat(w.value),
            height: parseFloat(h.value),
        }

    def get_bmi (self, values):
        return String(values.weight / (values.height ** 2))

    def writeValue (self):
        values = self.getValue(self.elems.weight, self.elems.height)
        bmi = self.get_bmi(values)
        self.elems.result.textContent = bmi

    def bind (self):
        self.elems.exebtn.addEventListener('click', self.writeValue.bind(self))

def dcl_bind ():
    elems = {
        weight: document.getElementById('weight'),
        height: document.getElementById('height'),
        result: document.getElementById('result'),
        exebtn: document.getElementById('execute'),
    }
    calculator = Calc_bmi(elems)
    calculator.bind()

document.addEventListener('DOMContentLoaded', dcl_bind)
