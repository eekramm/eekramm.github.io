// describe("removeClass", function() {
//     let myParagraph;
//     beforeEach( function() {
//         // Arange
//         myParagraph= document.createElement('p');
//         myParagraph.classList.add('test-class');
//     });

//     test('should remove a class from an element', () => {
//         // Act
//         removeClass(myParagraph, 'test-class');

//         // Assert
//         expect(myParagraph.classList.contains('test-class')).toBeFalsy();
//     });
// })

// // will come from outside test class

// function removeClass(element, classToRemove) {
//     element.classList.remove(classToRemove);
// }