describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2016')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        });

        it('should calculate area', function () {
            expect(app.calculateArea(1,2,3,0,"Error")).toEqual(false);
        });

        it('should calculate area', function () {
            expect(app.calculateArea(1,2,3,"Success","Error")).toEqual({
                area: -1, message: 'Error'
            });
        });
    });
});


