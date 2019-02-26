import './html-equal.js';
import makeImageTemplate from '../src/image-function.js';

const test = QUnit.test;

test('create a test that displays listed HTML images dynamically', function(assert) {
    //Arrange
    const image = {
        title: 'Unicorn Head',
        url: 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'
    };

    //Act
    const dom = makeImageTemplate(image);
    
    //Assert
    assert.htmlEqual(dom, `
    <li>Unicorn Head
            <img src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg">
    </li>`);
});