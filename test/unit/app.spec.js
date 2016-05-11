describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Zbyszek', '10/10/1995')).toEqual({
                name: 'Zbyszek', age: 20, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: "Zack", age: 5, course: 'kids'
            });
        });
        it('should calculate age', function(){
            expect(app.calculateAge('19/02/2016')).toEqual(NaN);
        });
        it('should calculate age', function(){
            expect(app.calculateAge('19/03/1999')).toEqual(NaN);
        });
        it('should ', function(){
        
        });
        it('should calculate Area', function(){
            expect(app.calculateArea(1,2,3, 'You\'re the best', 'buuuu')).toEqual({
                area: -1, message: 'buuuu'
            });
        });
        it('should calculate Area', function(){
            expect(app.calculateArea(5,51,1, 'Ok', 'notOk')).toEqual({
                area: 46, message: 'Ok'
            });
        });
        it('should calculate and return value', function(){
            expect();
        });
    });
});


